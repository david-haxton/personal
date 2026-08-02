# Unit 2.5.1: Programming Languages
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**

**High-level languages:**
- Written closer to human language; easier to read, write, and debug
- Portable -- can run on different hardware with little modification
- Must be translated into machine code before execution
- Examples: Python, Java, C#

**Low-level languages:**
- Written closer to machine code; harder to read and write
- Directly controls hardware and memory
- Executes faster; hardware-specific (not portable)
- Examples: machine code (binary), assembly language

**The need for translators:** processors can only execute machine code; high-level code must be translated

**Compiler:**
- Translates the entire source code at once before execution
- Produces an executable file -- can be distributed and run without the translator or source code
- End users have no access to the source code (intellectual property protection)
- Shows all errors at the end (error report/file)
- Compiled code runs faster -- no need to translate at run time
- Only needs to translate once -- can run multiple times without re-translating
- Can optimise the code

**Interpreter:**
- Translates and executes code one line at a time
- Stops at the first error -- useful during development/debugging
- Does not produce a standalone executable file
- Requires the interpreter every time the program runs
- Slower to execute than compiled code

**Assembler:** NOT required for J277 (explicitly listed as not required in spec v2.4)

**Key distinctions:**
- Compiler: whole program, produces executable, all errors at end, fast to run
- Interpreter: line by line, no executable, stops at first error, useful for debugging, slower to run
- "Faster/more efficient" alone is too vague -- must qualify what is faster and why

**Marking language:**
- Accept: "Machine code does not need to be translated/compiled/interpreted" as low-level advantage
- Accept: "Direct control of hardware/memory" for low-level advantage
- Accept: "Faster execution time" for low-level -- must be qualified, not just "faster" alone
- Accept: "Can produce an executable file" // "Can be run without the translator" for compiler
- Accept: "End users have no access to the source code" in context of distribution for compiler
- Accept: "Shows all errors at the end" // "Produces an error report/file" for compiler
- Accept: "Translates only once -- can run multiple times" for compiler
- Accept: "Stops at the first error -- useful for debugging" for interpreter
- Do not accept: Descriptions of how a compiler translates stated as a benefit (e.g. "translates the whole program at once") -- mechanism not a benefit. Source: June 2024 J277/02 Q7(b) MS
- Do not accept: "More efficient" // "Faster" alone -- must be expanded
- Do not accept: "End users have no access to source code" unless clearly in context of end user distribution
- Do not accept: "The interpreter produces an executable file" -- it does not

**Not required:** Assemblers; specific compiler optimisation techniques

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Describing differences rather than answering the specific question**
   - When asked for reasons/benefits, candidates give descriptions of how translators work instead.
   - Source: June 2024 J277/02 ER Q7(a) and Q7(b) -- "Where candidates left their response as simply a discussion of the difference... it was difficult for examiners to award marks."

2. **"Faster" or "more efficient" without qualification**
   - Source: June 2024 J277/02 ER Q7(a) -- "More efficient by itself is TV (too vague)"

3. **Stating the interpreter produces an executable file**
   - The interpreter does not. This is a compiler benefit that candidates frequently misattribute.

4. **"No access to source code" without the distribution context**
   - Must be clearly about end users receiving the distributed program.
   - Source: June 2024 J277/02 Q7(b) MS -- "Do not allow 'no access to source code' unless clearly talking about end user"

### Common Mark Losses
- Giving differences when asked for reasons or benefits
- "More efficient" or "faster" without context
- Stating the interpreter produces an executable
- "No access to source code" without end user distribution context

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q1(b)(ii) | Gap-fill: high-level, interpreter, compiler, executable | 5 | Gap-fill |
| 2024 | J277/02 | Q7(a) | State two reasons to use low-level language | 2 | State |
| 2024 | J277/02 | Q7(b) | State three benefits of using a compiler | 3 | State |

**Key observations:**
- Compiler benefits is a reliable multi-mark question; three distinct benefits needed
- Gap-fill format in 2022 tested precise language; may reappear
- Low-level reasons and compiler benefits both appeared in 2024; expect recurrence

---

## Quick Reference

### High-Level vs Low-Level

| Feature | High-Level | Low-Level |
|---------|-----------|-----------|
| Readability | Easy | Hard |
| Portability | Portable | Hardware-specific |
| Translation | Must be translated | Machine code needs none |
| Speed | Slower | Faster |
| Hardware control | Indirect | Direct |

### Compiler vs Interpreter

| Feature | Compiler | Interpreter |
|---------|---------|------------|
| Translation | Whole program at once | Line by line |
| Executable | Produces one | Does not |
| Errors | All at end | Stops at first |
| Best for | Distribution | Development/debugging |
| Speed | Faster to run | Slower to run |

### Key Exam Language

**Say this:**
- "Direct control of hardware/memory" (low-level reason)
- "Does not need to be translated -- faster execution" (low-level)
- "Produces an executable file that can be distributed without the translator or source code" (compiler)
- "End users have no access to the source code" (compiler -- in context of distribution)
- "Shows all errors at the end in an error report" (compiler)
- "Stops at the first error -- programmer can fix and continue" (interpreter)

**Not this:**
- "More efficient" or "faster" alone
- "The interpreter produces an executable file"
- "No access to source code" without end user/distribution context
