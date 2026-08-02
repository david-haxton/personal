/* ============================================
   J277 REVISION TUTOR — FRONTEND LOGIC
   Handles: navigation, quiz UI
   ============================================ */

// ==================== STATE ====================

const state = {
    currentView: 'landing',
    
    // Quiz Mode
    quiz: {
        selectedUnit: null,
        selectedSubtopic: null,
        conversationHistory: [],
        isLoading: false
    }
};

// Unit display names
const unitNames = {
    '1.1': 'Systems Architecture',
    '1.2': 'Memory & Storage',
    '1.3': 'Networks, Connections & Protocols',
    '1.4': 'System Security',
    '1.5': 'Systems Software',
    '1.6': 'Ethical, Legal, Cultural & Environmental Impacts',
    '2.1': 'Algorithms',
    '2.2': 'Programming Fundamentals',
    '2.3': 'Producing Robust Programs',
    '2.4': 'Boolean Logic',
    '2.5': 'Programming Languages & IDEs',
};

// Sub-topic data for granular quiz selection
// Units with only one teaching file (1.6, 2.4) have no subtopics -- quiz covers the whole unit
const subtopicData = {
    '1.1': [
        { id: '1.1.1', label: '1.1.1', name: 'CPU Architecture', description: 'Von Neumann, registers, FDE cycle' },
        { id: '1.1.2', label: '1.1.2', name: 'CPU Performance', description: 'Clock speed, cores, cache' },
    ],
    '1.2': [
        { id: '1.2.1', label: '1.2.1', name: 'Primary Storage', description: 'RAM, ROM, virtual memory, cache' },
        { id: '1.2.2', label: '1.2.2', name: 'Secondary Storage', description: 'Magnetic, optical, solid-state' },
        { id: '1.2.3', label: '1.2.3', name: 'Units of Data', description: 'Bits, bytes, nibbles, units' },
        { id: '1.2.4', label: '1.2.4', name: 'Data Storage', description: 'Binary, hex, characters, images, sound' },
        { id: '1.2.5', label: '1.2.5', name: 'Compression', description: 'Lossy vs lossless, RLE, Huffman' },
    ],
    '1.3': [
        { id: '1.3.1', label: '1.3.1', name: 'Networks & Topologies', description: 'LANs, WANs, star, mesh, client-server' },
        { id: '1.3.2', label: '1.3.2', name: 'Protocols & Layers', description: 'TCP/IP, HTTP, FTP, layers model' },
    ],
    '1.4': [
        { id: '1.4.1', label: '1.4.1', name: 'Threats to Systems & Networks', description: 'Malware, social engineering, DoS, SQL injection' },
        { id: '1.4.2', label: '1.4.2', name: 'Preventing Threats', description: 'Firewalls, encryption, passwords, backups' },
    ],
    '1.5': [
        { id: '1.5.1', label: '1.5.1', name: 'Operating Systems', description: 'OS functions, memory management, drivers' },
        { id: '1.5.2', label: '1.5.2', name: 'Utility Software', description: 'Defrag, encryption, backup, compression' },
    ],
    '2.1': [
        { id: '2.1.1', label: '2.1.1', name: 'Computational Thinking', description: 'Abstraction, decomposition, algorithmic thinking' },
        { id: '2.1.2', label: '2.1.2', name: 'Designing Algorithms', description: 'Flowcharts, pseudocode, trace tables, errors' },
        { id: '2.1.3', label: '2.1.3', name: 'Searching & Sorting', description: 'Linear, binary, bubble, insertion, merge' },
    ],
    '2.2': [
        { id: '2.2.1', label: '2.2.1', name: 'Programming Fundamentals', description: 'Variables, operators, sequence, selection, iteration' },
        { id: '2.2.2', label: '2.2.2', name: 'Data Types', description: 'Integer, real, Boolean, character, string, casting' },
        { id: '2.2.3', label: '2.2.3', name: 'Additional Techniques', description: 'Strings, files, arrays, functions, SQL, random' },
    ],
    '2.3': [
        { id: '2.3.1', label: '2.3.1', name: 'Defensive Design', description: 'Validation, authentication, maintainability' },
        { id: '2.3.2', label: '2.3.2', name: 'Testing', description: 'Test data types, error types, iterative vs final' },
    ],
    // Note: 2.4 (Boolean Logic) has a single sub-topic -- clicking the unit goes direct to quiz
    '2.5': [
        { id: '2.5.1', label: '2.5.1', name: 'Languages', description: 'High-level, low-level, compiler, interpreter' },
        { id: '2.5.2', label: '2.5.2', name: 'IDEs', description: 'Editor, error diagnostics, run-time environment, translator' },
    ],
};


// ==================== SESSION PERSISTENCE ====================
// Keep an in-progress quiz alive across accidental page refreshes.
// sessionStorage clears on tab close, so the "no data stored" promise
// on the landing page still holds.

const QUIZ_STORAGE_KEY = 'j277:quiz:v1';

function persistQuizState() {
    if (!state.quiz.selectedUnit || state.quiz.conversationHistory.length === 0) return;
    try {
        sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify({
            selectedUnit: state.quiz.selectedUnit,
            selectedSubtopic: state.quiz.selectedSubtopic,
            conversationHistory: state.quiz.conversationHistory,
        }));
    } catch (e) {
        // Quota exceeded or storage disabled — safe to ignore
    }
}

function clearQuizState() {
    try { sessionStorage.removeItem(QUIZ_STORAGE_KEY); } catch (e) {}
}

function restoreQuizState() {
    let saved;
    try {
        const raw = sessionStorage.getItem(QUIZ_STORAGE_KEY);
        if (!raw) return false;
        saved = JSON.parse(raw);
    } catch (e) {
        clearQuizState();
        return false;
    }

    if (!saved || !saved.selectedUnit || !Array.isArray(saved.conversationHistory) || saved.conversationHistory.length === 0) {
        clearQuizState();
        return false;
    }

    state.quiz.selectedUnit = saved.selectedUnit;
    state.quiz.selectedSubtopic = saved.selectedSubtopic || null;
    state.quiz.conversationHistory = saved.conversationHistory;

    // Rebuild the visible chat
    const container = document.getElementById('quiz-messages');
    container.innerHTML = '';
    for (const msg of saved.conversationHistory) {
        const el = document.createElement('div');
        el.className = `message message-${msg.role}`;
        if (msg.role === 'assistant') {
            el.innerHTML = formatFeedback(msg.content);
        } else {
            el.textContent = msg.content;
        }
        container.appendChild(el);
    }

    // Label
    if (state.quiz.selectedSubtopic && subtopicData[state.quiz.selectedUnit]) {
        const st = subtopicData[state.quiz.selectedUnit].find(s => s.id === state.quiz.selectedSubtopic);
        if (st) document.getElementById('quiz-unit-label').textContent = `Unit ${state.quiz.selectedSubtopic}: ${st.name}`;
    } else if (unitNames[state.quiz.selectedUnit]) {
        document.getElementById('quiz-unit-label').textContent = `Unit ${state.quiz.selectedUnit}: ${unitNames[state.quiz.selectedUnit]}`;
    }

    navigateTo('quiz');
    container.scrollTop = container.scrollHeight;
    setTimeout(() => document.getElementById('quiz-input').focus(), 0);
    return true;
}


// ==================== NAVIGATION ====================

function navigateTo(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // Show target view
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
        target.classList.add('active');
        state.currentView = viewName;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}


// ==================== QUIZ MODE ====================

function selectUnit(unit) {
    // If this unit has no subtopics, start the quiz directly
    if (!subtopicData[unit]) {
        startQuiz(unit, null);
        return;
    }
    
    // Toggle expansion — if already expanded, collapse it
    const existingPanel = document.getElementById(`subtopics-${unit}`);
    if (existingPanel) {
        existingPanel.remove();
        document.querySelector(`.unit-btn[data-unit="${unit}"]`).classList.remove('expanded');
        return;
    }
    
    // Collapse any other expanded unit
    document.querySelectorAll('.subtopic-panel').forEach(p => p.remove());
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('expanded'));
    
    // Mark this unit as expanded
    document.querySelector(`.unit-btn[data-unit="${unit}"]`).classList.add('expanded');
    
    // Build sub-topic panel
    const subtopics = subtopicData[unit];
    const panel = document.createElement('div');
    panel.id = `subtopics-${unit}`;
    panel.className = 'subtopic-panel';
    
    panel.innerHTML = `
        <button class="subtopic-btn subtopic-btn-all" onclick="startQuiz('${unit}', null)">
            <span class="subtopic-label">All of Unit ${unit}</span>
            <span class="subtopic-desc">Cover the full unit</span>
        </button>
        ${subtopics.map(st => `
            <button class="subtopic-btn" onclick="startQuiz('${unit}', '${st.id}')">
                <span class="subtopic-number">${st.label}</span>
                <span class="subtopic-label">${st.name}</span>
                <span class="subtopic-desc">${st.description}</span>
            </button>
        `).join('')}
    `;
    
    // Insert after the unit button
    const unitBtn = document.querySelector(`.unit-btn[data-unit="${unit}"]`);
    unitBtn.after(panel);
}

function startQuiz(unit, subtopic) {
    state.quiz.selectedUnit = unit;
    state.quiz.selectedSubtopic = subtopic;
    state.quiz.conversationHistory = [];

    // Navigate to quiz view
    navigateTo('quiz');

    // Set unit label
    if (subtopic) {
        const st = subtopicData[unit].find(s => s.id === subtopic);
        document.getElementById('quiz-unit-label').textContent = `Unit ${subtopic}: ${st.name}`;
    } else {
        document.getElementById('quiz-unit-label').textContent = `Unit ${unit}: ${unitNames[unit]}`;
    }

    // Clear previous messages
    const messagesContainer = document.getElementById('quiz-messages');
    messagesContainer.innerHTML = '';

    // Show loading while we wait for the first byte
    state.quiz.isLoading = true;
    addLoadingIndicator();
    document.getElementById('quiz-send-btn').disabled = true;

    streamQuizReply(unit, [], subtopic)
        .then(() => {
            state.quiz.isLoading = false;
            document.getElementById('quiz-send-btn').disabled = false;
            document.getElementById('quiz-input').focus();
        })
        .catch(err => {
            removeLoadingIndicator();
            addChatMessage('assistant', `Sorry, something went wrong starting the quiz. ${err.message || 'Please try again.'}`);
            state.quiz.isLoading = false;
            document.getElementById('quiz-send-btn').disabled = false;
        });
}

// Ends the current quiz cleanly and returns to the landing page,
// clearing all state. Used by the Home button and by the summary panel.
function finishQuiz() {
    state.quiz.selectedUnit = null;
    state.quiz.selectedSubtopic = null;
    state.quiz.conversationHistory = [];
    clearQuizState();

    document.querySelectorAll('.subtopic-panel').forEach(p => p.remove());
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('expanded'));

    navigateTo('landing');
}

// Wraps up the current session. Short sessions skip the summary and go
// straight home; anything with 2+ real exchanges gets a "topics to
// revisit" panel streamed in before returning to the landing page.
async function endQuiz() {
    if (state.quiz.isLoading) {
        // Mid-stream — treat End Session as an abort
        finishQuiz();
        return;
    }
    if (state.quiz.conversationHistory.length < 4) {
        finishQuiz();
        return;
    }
    await generateSessionSummary();
}

async function generateSessionSummary() {
    state.quiz.isLoading = true;

    const input = document.getElementById('quiz-input');
    const sendBtn = document.getElementById('quiz-send-btn');
    input.disabled = true;
    sendBtn.disabled = true;
    const originalPlaceholder = input.placeholder;
    input.placeholder = 'Generating your revision plan…';

    const messagesContainer = document.getElementById('quiz-messages');
    const summaryEl = document.createElement('div');
    summaryEl.className = 'message message-summary';
    summaryEl.innerHTML = '<div class="summary-header">Session Summary</div><div class="summary-body"></div>';
    messagesContainer.appendChild(summaryEl);
    const summaryBody = summaryEl.querySelector('.summary-body');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const apiMessages = buildQuizAPIMessages();
    apiMessages.push({
        role: 'user',
        content: "This session is ending. Based on our conversation, give me a short revision plan. Include: (1) one to three specific topics I should focus on next, based on any gaps or hesitations you noticed, (2) one sentence noting what I did well, (3) one concrete action I should take next time. Under 150 words. No preamble, no headers, no meta-commentary — just the plan."
    });

    let fullText = '';
    try {
        const response = await fetch('/api/quiz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                unit: state.quiz.selectedUnit,
                subtopic: state.quiz.selectedSubtopic,
                messages: apiMessages,
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `Server error (${response.status})`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            let sep;
            while ((sep = buffer.indexOf('\n\n')) !== -1) {
                const event = buffer.slice(0, sep);
                buffer = buffer.slice(sep + 2);
                if (!event.startsWith('data: ')) continue;
                let data;
                try { data = JSON.parse(event.slice(6)); } catch { continue; }
                if (data.text) {
                    fullText += data.text;
                    summaryBody.textContent = fullText;
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
            }
        }

        summaryBody.innerHTML = formatFeedback(fullText || 'No summary available — the session may have ended early.');
    } catch (err) {
        console.error('[quiz] summary error:', err);
        summaryBody.textContent = 'Could not generate a summary right now, but well done on the session. You can head back to pick another topic.';
        input.placeholder = originalPlaceholder;
    }

    const actions = document.createElement('div');
    actions.className = 'summary-actions';
    actions.innerHTML = '<button class="btn-primary" onclick="finishQuiz()">Back to home</button>';
    summaryEl.appendChild(actions);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    state.quiz.isLoading = false;
    clearQuizState();
}

function addChatMessage(role, content) {
    const messagesContainer = document.getElementById('quiz-messages');
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${role}`;
    
    if (role === 'assistant') {
        // Parse markdown formatting for AI responses
        messageEl.innerHTML = formatFeedback(content);
    } else {
        // Plain text for student messages (safe against XSS)
        messageEl.textContent = content;
    }
    
    messagesContainer.appendChild(messageEl);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Track in history and persist for refresh recovery
    state.quiz.conversationHistory.push({ role, content });
    persistQuizState();
}

function addLoadingIndicator() {
    const messagesContainer = document.getElementById('quiz-messages');
    const loading = document.createElement('div');
    loading.className = 'loading-dots';
    loading.id = 'quiz-loading';
    loading.innerHTML = '<span></span><span></span><span></span>';
    messagesContainer.appendChild(loading);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeLoadingIndicator() {
    const loading = document.getElementById('quiz-loading');
    if (loading) loading.remove();
}

function sendQuizMessage() {
    const input = document.getElementById('quiz-input');
    const message = input.value.trim();

    if (!message || state.quiz.isLoading) return;

    // Add user message to UI and history
    addChatMessage('user', message);
    input.value = '';
    input.style.height = 'auto';

    // Show loading until the first streamed byte arrives
    state.quiz.isLoading = true;
    addLoadingIndicator();
    document.getElementById('quiz-send-btn').disabled = true;

    const apiMessages = buildQuizAPIMessages();

    streamQuizReply(state.quiz.selectedUnit, apiMessages, state.quiz.selectedSubtopic)
        .then(() => {
            state.quiz.isLoading = false;
            document.getElementById('quiz-send-btn').disabled = false;
            document.getElementById('quiz-input').focus();
        })
        .catch(err => {
            removeLoadingIndicator();
            addChatMessage('assistant', `Sorry, something went wrong. ${err.message || 'Please try again.'}`);
            state.quiz.isLoading = false;
            document.getElementById('quiz-send-btn').disabled = false;
            document.getElementById('quiz-input').focus();
        });
}

function handleQuizKeydown(event) {
    // Send on Enter (without Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendQuizMessage();
    }
}


// ==================== QUIZ API ====================

/**
 * Build the messages array for the Quiz API call.
 * The conversation history tracks both user and assistant messages.
 * For the API, we need proper alternating user/assistant format.
 * The first user message (unit selection) is handled server-side when messages is empty.
 */
function buildQuizAPIMessages() {
    const history = state.quiz.conversationHistory;
    
    if (history.length === 0) return [];
    
    // The first message in history is always the assistant's opening question (from the API).
    // We need to reconstruct the conversation starting with the implicit user unit-selection message.
    const messages = [];
    
    // The server sent the first assistant message in response to an implicit
    // "I'd like to be quizzed on Unit X" user message. We need to include that
    // implicit message so the conversation alternates correctly.
    let topicLabel;
    if (state.quiz.selectedSubtopic) {
        const st = subtopicData[state.quiz.selectedUnit].find(s => s.id === state.quiz.selectedSubtopic);
        topicLabel = `Unit ${state.quiz.selectedSubtopic}: ${st.name}`;
    } else {
        topicLabel = `Unit ${state.quiz.selectedUnit}: ${unitNames[state.quiz.selectedUnit]}`;
    }
    messages.push({
        role: 'user',
        content: `I'd like to be quizzed on ${topicLabel}.`
    });
    
    // Now add all messages from the conversation history
    for (const msg of history) {
        messages.push({
            role: msg.role,
            content: msg.content
        });
    }
    
    return messages;
}

/**
 * Stream the Quiz Mode reply via Server-Sent Events, progressively rendering
 * chunks into a new assistant message element. When the stream ends, the
 * message is re-rendered through formatFeedback so markdown lands correctly.
 */
async function streamQuizReply(unit, messages, subtopic) {
    const payload = { unit, messages };
    if (subtopic) payload.subtopic = subtopic;

    const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error (${response.status})`);
    }

    const messagesContainer = document.getElementById('quiz-messages');
    let messageEl = null;
    let fullText = '';
    let streamError = null;
    let stopReason = null;

    const ensureMessageEl = () => {
        if (messageEl) return;
        removeLoadingIndicator();
        messageEl = document.createElement('div');
        messageEl.className = 'message message-assistant';
        messagesContainer.appendChild(messageEl);
    };

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let sep;
        while ((sep = buffer.indexOf('\n\n')) !== -1) {
            const event = buffer.slice(0, sep);
            buffer = buffer.slice(sep + 2);
            if (!event.startsWith('data: ')) continue;
            const dataStr = event.slice(6);
            let data;
            try {
                data = JSON.parse(dataStr);
            } catch {
                continue;
            }

            if (data.error) {
                streamError = data.error;
                continue;
            }
            if (data.text) {
                ensureMessageEl();
                fullText += data.text;
                // Safe text rendering while streaming (no XSS surface)
                messageEl.textContent = fullText;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            if (data.done) {
                stopReason = data.stop_reason || null;
            }
        }
    }

    if (streamError) {
        throw new Error(streamError);
    }

    if (!fullText) {
        removeLoadingIndicator();
        throw new Error('No response received.');
    }

    // Finalise: switch to formatted HTML and record in history
    ensureMessageEl();
    let finalText = fullText;
    if (stopReason === 'max_tokens') {
        finalText += '\n\n*[response cut short — ask again to continue]*';
    }
    messageEl.innerHTML = formatFeedback(finalText);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    state.quiz.conversationHistory.push({ role: 'assistant', content: fullText });
    persistQuizState();

    return fullText;
}


// ==================== TEXT FORMATTING ====================

/**
 * Format feedback text for display.
 * Converts markdown-style formatting to HTML for better readability.
 * Handles bold, bullet points, paragraphs, and separates trailing questions.
 */
// ==================== REPLACEMENT formatFeedback ====================
// Replace the existing formatFeedback function in script.js with this version.
// Adds support for ## and ### headers, which practice mode feedback uses heavily.

// ==================== REPLACE formatFeedback AND applyInlineFormatting ====================
// In script.js, find the existing formatFeedback function and replace everything
// from "function formatFeedback(text)" to the closing "}" of applyInlineFormatting
// with the code below.

function formatFeedback(text) {
    if (!text) return '<p>No feedback received.</p>';

    // Pre-process: ensure ## and ### headers are isolated as their own paragraphs,
    // and strip horizontal rules.
    text = text
        .replace(/---/g, '')
        .replace(/(#{1,3} [^\n]+)/g, '\n\n$1\n\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

    const paragraphs = text.split(/\n\n+/);

    const htmlBlocks = paragraphs.map(para => {
        const trimmed = para.trim();
        if (!trimmed) return '';

        // # Header
        if (trimmed.startsWith('# ')) {
            return `<h2 class="feedback-heading">${applyInlineFormatting(trimmed.slice(2))}</h2>`;
        }

        // ## Header
        if (trimmed.startsWith('## ')) {
            return `<h3 class="feedback-heading">${applyInlineFormatting(trimmed.slice(3))}</h3>`;
        }

        // ### Header
        if (trimmed.startsWith('### ')) {
            return `<h4 class="feedback-subheading">${applyInlineFormatting(trimmed.slice(4))}</h4>`;
        }

        // List
        const lines = trimmed.split('\n');
        const isList = lines.every(line =>
            line.trim() === '' ||
            line.trim().startsWith('•') ||
            line.trim().startsWith('- ') ||
            line.trim().startsWith('* ') ||
            /^\d+\./.test(line.trim())
        );

        if (isList) {
            const items = lines
                .filter(line => line.trim() !== '')
                .map(line => {
                    let content = line.trim()
                        .replace(/^[•\-\*]\s*/, '')
                        .replace(/^\d+\.\s*/, '');
                    return `<li>${applyInlineFormatting(content)}</li>`;
                });
            return `<ul>${items.join('')}</ul>`;
        }

        // Regular paragraph
        return `<p>${applyInlineFormatting(trimmed.replace(/\n/g, ' '))}</p>`;
    });

    const filtered = htmlBlocks.filter(Boolean);

    // Wrap trailing question blocks
    let splitIndex = filtered.length;
    for (let i = filtered.length - 1; i >= 1; i--) {
        if (filtered[i].includes('?')) {
            splitIndex = i;
        } else {
            break;
        }
    }

    if (splitIndex < filtered.length && splitIndex > 0) {
        const feedbackPart = filtered.slice(0, splitIndex).join('');
        const questionPart = filtered.slice(splitIndex).join('');
        return feedbackPart + `<div class="next-question">${questionPart}</div>`;
    }

    return filtered.join('');
}

function applyInlineFormatting(text) {
    // Escape HTML first — model output is semi-trusted and may reflect student
    // input verbatim, so raw < and > must not become live markup.
    text = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    return text;
}
// ==================== AUTO-RESIZE TEXTAREA ====================

document.addEventListener('DOMContentLoaded', () => {
    // Auto-resize textareas on input
    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 200) + 'px';
        });
    });

    // If a quiz was in progress before a refresh, restore it.
    restoreQuizState();
});

// ==================== PRACTICE MODE ====================
// Paste at the bottom of script.js

// State
const practiceState = {
    paper: null,
    question: null,
    questionLabel: null,
    marks: 0,
    attemptNumber: 1,
    attempt1Answer: null,
    loading: false,
};


// --- Paper switcher ---

function switchPracticePaper(paper) {
    document.getElementById('practice-tab-2023').classList.toggle('active', paper === '2023');
    document.getElementById('practice-tab-2024').classList.toggle('active', paper === '2024');
    document.getElementById('practice-list-2023').classList.toggle('active', paper === '2023');
    document.getElementById('practice-list-2024').classList.toggle('active', paper === '2024');
}


// --- Start a question ---

async function startPractice(paper, question) {
    // Reset state
    practiceState.paper = paper;
    practiceState.question = question;
    practiceState.attemptNumber = 1;
    practiceState.attempt1Answer = null;
    practiceState.loading = false;

    // Show question area, hide selector
    document.getElementById('practice-selector').style.display = 'none';
    document.getElementById('practice-question-area').style.display = 'block';

    // Clear previous content
    document.getElementById('practice-question-text').innerHTML = '<p style="color:#888;">Loading question...</p>';
    document.getElementById('practice-feedback').style.display = 'none';
    document.getElementById('practice-feedback').innerHTML = '';
    document.getElementById('practice-answer-input').value = '';
    document.getElementById('practice-answer-input').disabled = false;
    document.getElementById('practice-submit-btn').disabled = false;
    document.getElementById('practice-submit-btn').textContent = 'Submit answer';
    document.getElementById('practice-complete-actions').style.display = 'none';
    document.getElementById('practice-answer-area').style.display = 'block';
    document.getElementById('practice-attempt-indicator').textContent = 'Attempt 1 of 2';

    // Fetch question text from /api/questions
    try {
        const response = await fetch(`/api/questions?paper=${paper}&question=${encodeURIComponent(question)}`);
        const data = await response.json();

        if (!response.ok) {
            document.getElementById('practice-question-text').innerHTML =
                `<p style="color:red;">Could not load question: ${data.error || 'Unknown error'}</p>`;
            return;
        }

        practiceState.marks = data.marks;
        practiceState.questionLabel = data.question;

        // Display question
        document.getElementById('practice-question-text').innerHTML = data.html;

        // Show answer format guidance for cloze questions
        const clozeQuestions = ['Q1', 'Q3b'];
        const answerInput = document.getElementById('practice-answer-input');
        if (clozeQuestions.includes(question)) {
            answerInput.placeholder = 'List your answers in order, one per line.\nFor example:\nanalogue\ndigital\nsampling\n...';
        } else {
            answerInput.placeholder = 'Write your answer here...';
        }

        // Update meta tag
        document.getElementById('practice-question-meta').textContent =
            `${paper} — ${data.question}`;

        // Update marks label
        document.getElementById('practice-marks-label').textContent =
            `${data.marks} mark${data.marks !== 1 ? 's' : ''}`;

        // Focus answer input
        document.getElementById('practice-answer-input').focus();

    } catch (err) {
        document.getElementById('practice-question-text').innerHTML =
            '<p style="color:red;">Connection error loading question. Please try again.</p>';
        console.error('[practice] question fetch error:', err);
    }
}


// --- Submit answer ---

async function submitPracticeAnswer() {
    if (practiceState.loading) return;

    const answer = document.getElementById('practice-answer-input').value.trim();
    if (!answer) {
        document.getElementById('practice-answer-input').focus();
        return;
    }

    practiceState.loading = true;
    document.getElementById('practice-submit-btn').disabled = true;
    document.getElementById('practice-submit-btn').textContent = 'Marking...';
    document.getElementById('practice-answer-input').disabled = true;

    // Show feedback area with loading state
    const feedbackBox = document.getElementById('practice-feedback');
    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = '<p style="color:#888;">Getting feedback...</p>';

    try {
        const payload = {
            paper: practiceState.paper,
            question: practiceState.question,
            answer: answer,
            attemptNumber: practiceState.attemptNumber,
        };

        if (practiceState.attemptNumber === 2 && practiceState.attempt1Answer) {
            payload.attempt1Answer = practiceState.attempt1Answer;
        }

        const response = await fetch('/api/practice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            feedbackBox.innerHTML = `<p style="color:red;">${data.error || 'Something went wrong. Please try again.'}</p>`;
            document.getElementById('practice-submit-btn').disabled = false;
            document.getElementById('practice-submit-btn').textContent = 'Submit answer';
            document.getElementById('practice-answer-input').disabled = false;
            return;
        }

        // Display feedback
        feedbackBox.innerHTML = formatFeedback(data.reply);

        if (practiceState.attemptNumber === 1) {
            // Store attempt 1 answer and prepare for attempt 2
            practiceState.attempt1Answer = answer;
            practiceState.attemptNumber = 2;

            document.getElementById('practice-attempt-indicator').textContent = 'Attempt 2 of 2';
            document.getElementById('practice-answer-input').value = '';
            document.getElementById('practice-answer-input').disabled = false;
            document.getElementById('practice-submit-btn').disabled = false;
            document.getElementById('practice-submit-btn').textContent = 'Submit final answer';
            document.getElementById('practice-answer-input').focus();

        } else {
            // Attempt 2 complete — show final actions
            document.getElementById('practice-answer-area').style.display = 'none';
            document.getElementById('practice-complete-actions').style.display = 'flex';
        }

    } catch (err) {
        feedbackBox.innerHTML = '<p style="color:red;">Connection error. Check your internet and try again.</p>';
        document.getElementById('practice-submit-btn').disabled = false;
        document.getElementById('practice-submit-btn').textContent = 'Submit answer';
        document.getElementById('practice-answer-input').disabled = false;
        console.error('[practice] submit error:', err);
    } finally {
        practiceState.loading = false;
        // Scroll feedback into view
        feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}


// --- Navigation ---

function backToSelector() {
    document.getElementById('practice-selector').style.display = 'block';
    document.getElementById('practice-question-area').style.display = 'none';
    window.scrollTo(0, 0);
}

function endPractice() {
    navigateTo('landing');
}
