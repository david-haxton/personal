import Link from "next/link";
import type { CSSProperties } from "react";
import { border, button, ground, ink, MAILTO, shadow } from "./tokens";

const NAV = [
  { href: "/tuition", label: "Tuition" },
  { href: "/ai", label: "AI" },
  { href: "/web", label: "Web" },
];

const wordmark: CSSProperties = {
  fontSize: 19,
  fontWeight: 800,
  letterSpacing: "-0.01em",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
};

const navLink: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

const cta: CSSProperties = {
  ...button(5),
  marginLeft: "auto",
  fontSize: 14,
  letterSpacing: "0.06em",
  padding: "12px 22px",
  whiteSpace: "nowrap",
};

/**
 * The header and footer are deliberately identical — the client asked for an
 * exact match. Only the sticky positioning and outer margin differ.
 */
export default function SiteBar({ variant }: { variant: "header" | "footer" }) {
  const isHeader = variant === "header";
  const Tag = isHeader ? "header" : "footer";

  return (
    <Tag
      style={{
        background: ground,
        border,
        boxShadow: shadow(8),
        padding: "16px 22px",
        display: "flex",
        alignItems: "center",
        gap: 36,
        flexWrap: "wrap",
        ...(isHeader
          ? { position: "sticky", top: 14, zIndex: 60 }
          : { margin: "0 0 12px" }),
      }}
    >
      <Link href="/" style={wordmark}>
        David Haxton
      </Link>
      <nav
        style={{
          display: "flex",
          gap: 30,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            style={navLink}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a href={MAILTO} className="btn btn-sm" style={cta}>
        Say hello
      </a>
    </Tag>
  );
}
