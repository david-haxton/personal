# Unit 2.3.1: Defensive Design
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**

**Anticipating misuse:**
- A robust program considers all likely inputs -- including unexpected, incorrect, or malicious ones -- and handles them without crashing or producing incorrect output

**Authentication:**
- Confirming the identity of a user before granting access
- Typical example: username and password check at login

**Input validation -- types required:**
- **Range check** -- value falls within acceptable min and max (e.g. age between 0 and 120)
- **Presence check** -- field has not been left empty
- **Format check** -- data matches expected pattern (e.g. date in DD/MM/YYYY)
- **Length check** -- data is the correct length (e.g. password at least 8 characters)
- **Look-up table** -- value matches one from a predefined list (e.g. day must be Mon, Tue, Wed, etc.)
- **Type check** -- data is of the correct data type (e.g. an integer where one is expected)

**Maintainability:**
- **Sub-programs** -- modularises code; easier to read, test, and modify
- **Meaningful identifier names** -- variable and function names describe their purpose (e.g. `studentName` not `x`)
- **Indentation** -- makes structure of loops and selection visually clear
- **Commenting** -- explains what sections do; helps other programmers understand without tracing through code

**Key distinctions:**
- **Authentication** confirms who the user is. **Validation** checks whether the data entered is acceptable. These are different concepts.
- A password being at least 8 characters is a **length check** (validation). Checking username/password at login is **authentication**.
- "Input sanitisation" (removing special characters) is also accepted as a defensive design method.

**Marking language:**
- Accept: "Confirming the identity of a user" // "Checking the user is who they say they are" // example (username and password) for authentication
- Accept: Any sensible validation type name matched to a correct description or example
- Accept: "Input sanitisation" as anticipating misuse
- Accept: Two marks where different categories are combined (e.g. validation as expansion of anticipating misuse)
- Accept: "Makes the code easier to understand/read by other programmers" for maintainability -- must clarify why, not just "easier to read"
- Do not accept: "Authentication" and "validation" used interchangeably
- Do not accept: "Easier to read" alone for maintainability -- must explain another programmer can understand the purpose without tracing through code

**Not required:** Specific authentication protocols or encryption standards; detailed input sanitisation syntax

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Confusing authentication and validation**
   - Authentication confirms identity. Validation checks data acceptability. A username/password check is authentication. A check that a password is at least 8 characters is a length check (validation).
   - Source: June 2024 J277/02 ER Q4(b)

2. **Giving a validation type name without a description or example**
   - "Describe" questions require name AND how it works, or name AND specific example. The name alone gains no marks.
   - Source: June 2024 J277/02 ER Q4(b) -- "The describe command word then required candidates to add further detail"

3. **Using OR instead of AND in range check validation**
   - `value >= min AND value <= max` is correct. OR accepts almost every value.
   - Source: Examiner reports 2022--2025, flagged repeatedly across Section B

4. **Meaningful identifiers: vague explanation**
   - "Easier to read" is insufficient. The examiner wants to know why -- because another programmer can understand the purpose of a variable/function without tracing through the code.
   - Source: June 2024 J277/02 ER

### Common Mark Losses
- Confusing authentication (identity check) with validation (data check)
- Naming a validation type without describing how it works or giving an example
- OR instead of AND in a range check condition
- "Easier to read" alone for maintainability without explaining why
- Forgetting to close a file in file handling code

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Section B | Range check validation loop with AND condition | 5 | Write code |
| 2024 | J277/02 | Q4(b) | Describe one method of defensive design | 2 | Open response |
| 2024 | J277/02 | Section B | Validation, functions, maintainability in context | 20 | Write/complete |
| 2025 | J277/02 | Section B | Validation embedded in extended scenario | 20 | Write/complete |

**Key observations:**
- Defensive design description (name + describe one method) appeared in 2024; likely to recur
- Validation coding is tested every year in Section B -- range check with AND is the most frequent trap
- Maintainability (meaningful names, commenting) appears as Section B sub-questions

---

## Quick Reference

### Validation Types

| Type | What it Checks | Example |
|------|---------------|---------|
| Range check | Value within min--max bounds | Age between 0 and 120 |
| Presence check | Field is not empty | Username field must not be blank |
| Format check | Data matches expected pattern | Date in DD/MM/YYYY |
| Length check | Data is correct length | Password between 8 and 16 characters |
| Look-up table | Value matches accepted list | Day must be Mon, Tue, Wed, Thu, Fri, Sat, or Sun |
| Type check | Data is of correct type | Age must be an integer |

### Key Exam Language

**Say this:**
- "Confirming the identity of a user, e.g. username and password" (authentication)
- "Checks the value is within an acceptable range" + example (range check)
- `value >= min AND value <= max` (range check code)
- "Another programmer can understand the purpose without tracing through the code" (meaningful names)

**Not this:**
- "Authentication" and "validation" as the same thing
- OR instead of AND in a range check
- "Easier to read" alone for meaningful identifiers
