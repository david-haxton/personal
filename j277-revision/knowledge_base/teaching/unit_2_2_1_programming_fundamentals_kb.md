# Unit 2.2.1: Programming Fundamentals
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**
- The use of **variables** (values that can change) and **constants** (values that do not change)
- **Operators:**
  - Arithmetic: + (addition), - (subtraction), * (multiplication), / (division), MOD (remainder), DIV (integer/quotient division), ^ (exponentiation)
  - Comparison: == (equal to), != (not equal to), < (less than), <= (less than or equal to), > (greater than), >= (greater than or equal to)
  - Boolean: AND, OR, NOT
- The use of **inputs**, **outputs**, and **assignments**
- The three programming constructs:
  - **Sequence** -- instructions executed in order
  - **Selection** -- IF/ELIF/ELSE branching
  - **Iteration** -- count-controlled loops (FOR) and condition-controlled loops (WHILE)

**Key distinctions:**
- FOR loop is count-controlled (runs a set number of times)
- WHILE loop is condition-controlled (runs while a condition is true)
- IF is selection, not iteration
- In Python (as taught at KCS): use camelCase naming -- `studentName`, `totalScore`, `isValid`

**Marking language:**
- Accept: Any consistent high-level language or OCR Exam Reference Language
- Accept: "Selection" for if/elif/else; "Iteration" for for/while
- Do not accept: Examples alone as a description of a construct (e.g. writing "IF" instead of "selection") -- must name the construct. Source: June 2023 J277/02 Q3(c)(v) MS; June 2025 J277/02 Q2(b)(ii) MS

**Not required:** Operators beyond those listed; bitwise operators

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Using OR instead of AND in range check validation**
   - This is the most persistent logic error across all years. A range check requires AND: `value >= 1 AND value <= 10`. Using OR accepts almost every value.
   - Note: In a WHILE loop, the continuation condition uses OR -- students confuse the two.
   - Source: Examiner reports 2022--2025, flagged repeatedly

2. **Boolean data type confusion**
   - Where Boolean values are used in selection, there is no need to compare to True or False explicitly (e.g. `if x` is valid as well as `if x == True`). Many candidates struggled with this.
   - Source: June 2025 J277/02 MS Q1(b)(iii) -- "Accept Bool"

### Common Mark Losses
- OR instead of AND in a range check condition
- Confusing FOR (count-controlled) and WHILE (condition-controlled)
- Not using camelCase for variable names (KCS requirement)
- Using `=` instead of `==` for comparison

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q1 | Programming constructs -- if, for, while as selection/iteration | 3 | Table tick |
| 2022 | J277/02 | Q1(b)(i) | Purpose of * and / arithmetic operators | 2 | State |
| 2024 | J277/02 | Q1 | if, for, while -- identify as selection or iteration | 3 | Tick box (AO1) |
| 2025 | J277/02 | Q1(a) | Test data types including algorithm with AND condition | 3 | Complete |
| 2025 | J277/02 | Q1(b) | Identify Boolean operator from algorithm | 1 | Identify |
| 2025 | J277/02 | Q2(b)(ii) | Name two other programming constructs used in program | 2 | Open response (AO3) |

**Key observations:**
- Constructs classification (selection/iteration) is a reliable format across multiple years
- Arithmetic operators tested in 2022; Boolean operators in 2025 -- both likely to recur
- AND/OR logic in conditions is tested every year, most often embedded in Section B

---

## Quick Reference

### Operators

| Category | Operators |
|----------|-----------|
| Arithmetic | + - * / MOD DIV ^ |
| Comparison | == != < <= > >= |
| Boolean | AND OR NOT |

### Constructs

| Construct | Keywords | Type |
|-----------|----------|------|
| Sequence | (none -- just ordered statements) | -- |
| Selection | if, elif, else | Conditional branching |
| Iteration (count) | for | Count-controlled loop |
| Iteration (condition) | while | Condition-controlled loop |

### Key Exam Language

**Say this:**
- "FOR loop is count-controlled -- runs a set number of times"
- "WHILE loop is condition-controlled -- runs while a condition is true"
- "AND in a range check: value >= min AND value <= max"

**Not this:**
- OR instead of AND in a range check
- "If" classified as iteration
- snake_case variable names -- always camelCase at KCS
