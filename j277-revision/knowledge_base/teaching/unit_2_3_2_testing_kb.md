# Unit 2.3.2: Testing
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**

**Purpose of testing:**
- To check the program works correctly and produces the right output
- To find and fix errors/bugs
- To check the program is robust (does not crash on unexpected input)
- To verify the program meets user requirements

**Types of testing:**
- **Iterative testing** -- carried out during development, module by module; allows errors to be found and fixed as they occur; each module may be tested in isolation
- **Final/terminal testing** -- carried out at the end of development on the complete program; checks before release

**Types of errors:**
- **Syntax error** -- breaks the grammatical rules of the programming language; stops the program from running or being translated; example: misspelling a keyword
- **Logic error** -- the program runs but produces incorrect or unexpected output; example: using `>` instead of `>=`

**Test data types:**
- **Normal** -- valid data within the acceptable range; program should accept it without error
- **Boundary** -- data of the correct type on the very edge of being valid; includes both the last valid value and the first invalid value; OCR mark schemes accept "boundary and normal" for a value at the valid boundary edge. Source: J277 spec v2.4 p.19; June 2025 J277/02 Q1(a) MS
- **Invalid/Erroneous** -- data that should be rejected; covers both data of the correct type but outside the valid range (invalid) and data of the wrong type (erroneous)

**Key OCR rule (confirmed 2025 ER Q1a):** OCR defines invalid and erroneous separately in the specification but **always groups them together** in examination questions as "invalid/erroneous" -- data that should be rejected.

**Marking language:**
- Accept: "Testing during development" // "Testing modules as they are completed" for iterative testing
- Accept: "Testing the complete program at the end of development" // "Testing before release" for final/terminal testing
- Accept: "Breaks the grammatical rules of the programming language" // "Stops the program from running/translating" for syntax error
- Accept: "Program runs but produces incorrect/unexpected output" for logic error
- Accept: "Data that should be accepted" for normal; "Data at the edge of the valid range" for boundary; "Data that should be rejected" for invalid/erroneous
- Do not accept: Descriptions of test types that simply repeat the name (e.g. "boundary -- testing the boundary")
- Do not accept: "Data that is not expected" alone for invalid/erroneous -- must clarify it should be rejected
- Do not accept: Examples of validation (e.g. "type check", "range check") as descriptions of invalid/erroneous test data. Source: June 2023 J277/02 Q5(a)(ii) MS
- Do not accept: "Syntax error -- gives the wrong answer" -- this describes a logic error

**Not required:** Black-box or white-box testing (accepted if offered); specific testing frameworks

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Describing test types by simply repeating their name**
   - "Boundary testing -- tests boundary values" gains no marks. Must explain what a boundary value is.
   - Source: June 2023 J277/02 ER Q5(a)(ii) -- "Do not accept descriptions that simply repeat type of test without further clarification"

2. **Confusing syntax and logic errors**
   - Syntax errors prevent the program from running; logic errors allow it to run but give wrong output. Stating "a syntax error gives the wrong answer" describes a logic error.
   - Source: June 2025 J277/02 ER Q3(a)

3. **Invalid/erroneous grouping**
   - OCR groups these together in all exam questions. Students who treat them as entirely separate categories in exam context are working against the mark scheme format.
   - Source: June 2025 J277/02 ER Q1(a) -- "questions in examinations will always group these together"

4. **Test data given as description rather than actual data**
   - When asked for test data, give actual values (e.g. 50, 105, "hello") not descriptions (e.g. "a value between 40 and 180"). Descriptions are not accepted as test data.
   - Source: June 2024 J277/02 Q6(b)(ii) MS -- "Answer must be actual data... not description of data"

### Common Mark Losses
- Describing test types by repeating the name only
- Confusing syntax errors (won't run) with logic errors (wrong output)
- "Data that is not expected" alone for invalid/erroneous -- must add "should be rejected"
- Giving descriptions instead of actual test data values
- Confusing when iterative and final testing occur in the development process

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q2(b)(ii) | Complete test plan with test data types | 3 | Complete table |
| 2023 | J277/02 | Q5(a)(i) | Purpose of testing | 2 | Open response |
| 2023 | J277/02 | Q5(a)(ii) | Name and describe two types of testing | 2 | Open response |
| 2024 | J277/02 | Q6(b)(ii) | Give actual test data values: normal, boundary, invalid | 3 | State |
| 2025 | J277/02 | Q1(a) | Test data types -- tick correct type(s) for each value | 4 | Tick table |
| 2025 | J277/02 | Q3(a) | Identify syntax error from code + give example | 2 | Identify + example |

**Key observations:**
- Test data types (normal, boundary, invalid/erroneous) appear in every series; tick-table format is reliable and recurring
- 2025 was very well answered -- topic is well taught
- Syntax vs logic error questions appeared in 2025; likely to recur
- Purpose of testing appeared in 2023 (2 marks); accessible question that rewards precision

---

## Quick Reference

### Test Data Types

| Test Data | What it Means | Example (valid range 1--100) |
|-----------|--------------|------------------------------|
| Normal | Valid data within the range | 27, 50 |
| Boundary | At the very edge of valid/invalid | 1, 100 (valid edge); 0, 101 (invalid edge) |
| Invalid/Erroneous | Should be rejected | 105 (wrong value); "Hello" (wrong type) |

### Testing Types

| Type | When | Purpose |
|------|------|---------|
| Iterative | During development, after each module | Find and fix errors as they occur |
| Final/terminal | End of development | Test the complete program before release |

### Error Types

| Error | Effect | Example |
|-------|--------|---------|
| Syntax | Program cannot run/translate | `prnt("hello")` |
| Logic | Program runs but gives wrong output | `if score > 10` instead of `>= 10` |

### Key Exam Language

**Say this:**
- "Data at the very edge of the acceptable range" (boundary)
- "Data that should be rejected" (invalid/erroneous)
- "Breaks the grammatical rules of the programming language, stops the program running" (syntax error)
- "Program runs but produces incorrect output" (logic error)
- "Testing during development, after each module is complete" (iterative)

**Not this:**
- "Boundary -- testing boundary values" -- must explain what a boundary is
- "Data that is not expected" alone -- must add "should be rejected"
- "Syntax error gives the wrong answer" -- this is a logic error
- Descriptions as test data -- give actual values
