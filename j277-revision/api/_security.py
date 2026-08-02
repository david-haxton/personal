"""
Shared security helpers for the J277 API endpoints.

Provides:
  - is_allowed_origin: whitelist check for CORS
  - set_cors_headers: helper that writes CORS response headers
  - allow_request: per-IP sliding-window rate limit

Rate limiting is per Lambda instance and best-effort — under concurrent
warm instances the effective limit can be exceeded. Good enough to stop
accidental hammering and casual abuse from a class-sized user base; not
a defence against a determined attacker rotating IPs.
"""

import time
from collections import deque


# ---------- CORS ----------

# Stable public domains for the app.
ALLOWED_ORIGINS = {
    'https://j277-revision.vercel.app',
    'https://j277-revision-2qew.vercel.app',
}

# Any preview subdomain under our Vercel team is also allowed.
ALLOWED_ORIGIN_SUFFIXES = (
    '-david-haxtons-projects.vercel.app',
)


def is_allowed_origin(origin):
    """Return the origin if it is permitted, else None."""
    if not origin:
        return None
    if origin in ALLOWED_ORIGINS:
        return origin
    if origin.startswith('https://') and any(
        origin.endswith(suffix) for suffix in ALLOWED_ORIGIN_SUFFIXES
    ):
        return origin
    return None


def set_cors_headers(handler, methods='POST, OPTIONS'):
    """
    Write CORS headers onto a BaseHTTPRequestHandler-style response.
    If the Origin is not in the whitelist, the ACAO header is omitted,
    so the browser blocks the response.
    """
    origin = handler.headers.get('Origin', '')
    resolved = is_allowed_origin(origin)
    if resolved:
        handler.send_header('Access-Control-Allow-Origin', resolved)
        handler.send_header('Vary', 'Origin')
    handler.send_header('Access-Control-Allow-Methods', methods)
    handler.send_header('Access-Control-Allow-Headers', 'Content-Type')


# ---------- Rate limit ----------

RATE_LIMIT_WINDOW_SECONDS = 60
RATE_LIMIT_MAX_REQUESTS = 30

# ip -> deque of recent request timestamps (per Lambda instance)
_buckets = {}


def _client_ip(handler):
    """Best-effort client IP from X-Forwarded-For, falling back to socket peer."""
    fwd = handler.headers.get('X-Forwarded-For', '')
    if fwd:
        return fwd.split(',')[0].strip()
    if getattr(handler, 'client_address', None):
        return handler.client_address[0]
    return 'unknown'


def allow_request(handler):
    """
    Sliding-window per-IP rate limit. Returns True if the request is
    within limits, False if it should be rejected with 429.
    """
    ip = _client_ip(handler)
    now = time.time()
    bucket = _buckets.setdefault(ip, deque())

    cutoff = now - RATE_LIMIT_WINDOW_SECONDS
    while bucket and bucket[0] < cutoff:
        bucket.popleft()

    if len(bucket) >= RATE_LIMIT_MAX_REQUESTS:
        return False

    bucket.append(now)

    # Prevent unbounded growth of the buckets dict across long-lived instances.
    if len(_buckets) > 1000:
        for stale_ip in list(_buckets.keys()):
            if not _buckets[stale_ip]:
                del _buckets[stale_ip]

    return True
