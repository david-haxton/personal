# Unit 2.1.2: Designing, Creating and Refining Algorithms
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**
- How to identify **inputs**, **processes**, and **outputs** for a given problem
- How to produce **structure diagrams** showing the sub-sections of a problem and their links
- How to **create**, **interpret**, **correct**, **complete**, and **refine** algorithms using:
  - Pseudocode
  - Flowcharts (using correct symbols)
  - OCR Exam Reference Language or a high-level programming language such as Python
- How to identify **syntax errors** and **logic errors**
- How to create and use **trace tables** to follow an algorithm step by step

**Flowchart symbols -- all required:**
- Arrow/line: flow of control
- Rectangle: process or instruction
- Parallelogram: input or output
- Diamond: decision (True/False or Yes/No branches required)
- Rounded rectangle/oval: terminal (Start or End/Stop)
- Rectangle with double vertical lines: sub-program or subroutine call

**Error types:**
- **Syntax error** -- breaks the grammatical rules of the programming language; stops the program from running or being translated; example: misspelling a keyword
- **Logic error** -- the program runs but produces incorrect or unexpected output; example: using `>` instead of `>=`

**Trace tables:**
- Used to follow an algorithm step by step, recording the value of each variable at each stage
- Boxes should be left blank if no change or output occurs on that line -- writing anything ambiguous (e.g. 'x') risks losing marks

**Marking language:**
- Accept: Pseudocode, OCR Exam Reference Language, or any consistent high-level language
- Accept: "Breaks the grammatical rules of the programming language" // "Stops the program from running/translating" for syntax error
- Accept: "The program runs but produces incorrect/unexpected output" for logic error
- Accept: True/False OR Yes/No labels on flowchart decision branches
- Accept: BOD for correct flowchart logic where incorrect shapes are used -- parallelogram for input/output penalised once only then FT
- Do not accept: Descriptions that confuse syntax and logic errors (e.g. "a syntax error gives the wrong answer")
- Do not accept: Flowcharts presented as pseudocode when a flowchart is specifically required
- Do not accept: Ambiguous entries in trace table boxes -- blank means no change/output

**Not required:** Formal structure diagram notation beyond simple hierarchical boxes

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Flowchart decision boxes left without True/False labels**
   - Decision diamonds must have their branches labelled True/False or Yes/No. Unlabelled branches lose marks.
   - Source: June 2022 J277/02 ER Q2 -- "fewer candidates labelled the decision box appropriately with True/False or Yes/No. These labels are crucial to be able to follow the path of the algorithm when a decision is made."

2. **Trace tables: leaving ambiguous entries instead of blank boxes**
   - If no change or output occurs on a line, the box should be left blank.
   - Source: June 2024 J277/02 ER Q9(b) -- "Candidates should be encouraged to simply leave boxes blank if no output is given on a particular line."

3. **Identifying inputs and outputs too vaguely**
   - "Video" as an input is too vague. The correct answer is "name of video to search for." Precision is required.
   - Source: June 2024 J277/02 ER Q4(a)

4. **Confusing syntax and logic errors**
   - Syntax errors prevent the program from running. Logic errors allow it to run but give wrong output. Stating "a syntax error gives the wrong answer" describes a logic error.
   - Source: June 2025 J277/02 ER Q3(a)

5. **Trace table: outputting values that were never output**
   - A common error is writing values that the algorithm never actually outputs (e.g. outputting -1 from a loop that terminates before printing it).
   - Source: June 2023 J277/02 ER Q3(d)

### Common Mark Losses
- Flowchart: wrong symbols (rectangle for decision, diamond for process)
- Flowchart: unlabelled decision branches
- Trace table: ambiguous entries instead of blank boxes
- Trace table: arithmetic slips propagating through subsequent rows
- Trace table: outputting values the algorithm never actually outputs
- Identifying inputs/outputs imprecisely
- Confusing syntax errors (won't run) with logic errors (wrong output)

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q1 | Programming constructs (if, for, while) -- selection vs iteration | 3 | Table completion |
| 2022 | J277/02 | Q2 | Flowchart -- draw algorithm with decision and I/O boxes | 4 | Draw/complete |
| 2023 | J277/02 | Q3(d) | Trace table -- condition-controlled (while) loop | 3 | Table completion |
| 2024 | J277/02 | Q4(a) | Identify one input and one output for a program | 2 | Open response |
| 2024 | J277/02 | Q9(b) | Trace table -- sequence of assignments, no loops | 3 | Table completion |
| 2025 | J277/02 | Q3(a) | Identify syntax error from code example | 2 | Identify + explain |
| 2025 | J277/02 | Q5(b) | Trace table -- for loop with counter variable | 4 | Table completion |

**Key observations:**
- Trace tables appear in every series and are growing in complexity; 2025 introduced a for loop counter -- mark scheme confirmed one mark per set of variable changes, not per line number
- Flowchart questions appeared in 2022 and 2023; absent 2024--2025, making them a candidate for reappearance
- Syntax vs logic error questions appeared in 2025 -- likely to recur

---

## Quick Reference

### Flowchart Symbols

| Symbol | Shape | Use |
|--------|-------|-----|
| Terminal | Rounded rectangle/oval | Start and End/Stop |
| Process | Rectangle | Any instruction or calculation |
| Input/Output | Parallelogram | INPUT and OUTPUT statements |
| Decision | Diamond | Any condition -- label True/False branches |
| Sub-program | Rectangle with double vertical lines | Subroutine or function call |
| Flow | Arrow/line | Direction of execution |

### Error Types

| Error | Effect | Example |
|-------|--------|---------|
| Syntax | Program cannot run/translate | `prnt("hello")` -- misspelled keyword |
| Logic | Program runs but gives wrong output | `if score > 10` instead of `>= 10` |

### Key Exam Language

**Say this:**
- "Breaks the grammatical rules of the programming language, stops the program running" (syntax error)
- "Program runs but produces incorrect/unexpected output" (logic error)
- Leave trace table boxes blank when no change or output occurs

**Not this:**
- "Syntax error gives the wrong answer" -- this is a logic error
- Ambiguous entries in trace table boxes
- Flowchart decision diamonds without True/False labels
