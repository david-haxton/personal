# Unit 2.2.2: Data Types
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**
- **Integer** -- a whole number (positive, negative, or zero); no decimal point; e.g. age, score, count
- **Real** (also called float) -- a number with a decimal component; e.g. price, temperature, average
- **Boolean** -- can only be True or False; e.g. isLoggedIn, hasWon
- **Character** -- a single character; e.g. a grade letter, an initial
- **String** -- a sequence of zero or more characters; e.g. a name, a postcode, a password
- **Casting** -- temporarily converting a value from one data type to another; most common use: user input always arrives as a string; must be cast to integer or real before arithmetic can be performed

**Key distinctions:**
- Casting is temporary and explicit -- the programmer chooses to change the type for a specific purpose
- Real is not "a large number" -- it is a number with a decimal part
- Boolean is True or False only -- not "yes/no" unless linked to True/False values

**Marking language:**
- Accept: "Whole number" // "No decimal part" for integer
- Accept: "Number with a decimal point/part" // "Floating point number" for real
- Accept: "True or False only" for Boolean; "Accept Bool" as a data type name
- Accept: "int()" // "str()" // "float()" as casting examples in Python
- Accept: "Temporarily changing the data type" // "Converting between data types" for casting
- Do not accept: "Real number" defined as "a large number"
- Do not accept: Boolean described as "yes or no" without clarifying True/False

**Not required:** Data type sizes in memory; distinction between float and double

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Casting: knowing the syntax but not explaining why**
   - Many candidates can write `int()` or `str()` but cannot explain the reason. The reason: user input always arrives as a string; arithmetic cannot be performed on a string, so it must be cast to integer or real.
   - Source: General ER trend 2022--2024

2. **Boolean data type in selection statements**
   - Where a function returns a Boolean value, candidates do not need to write `if x == True` -- `if x` alone is valid. Many candidates did not know this.
   - Source: June 2025 J277/02 MS Q1(b)(iii) and ER -- "This use of Boolean values in selection statements also caused confusion"

3. **Choosing wrong data type for scenario**
   - A common error is using integer for a price (should be real) or string for an age (should be integer). The choice must match the data's characteristics, not just its appearance.
   - Source: June 2022 J277/02 ER Q5(a)(i)

### Common Mark Losses
- Defining real as "a large number" instead of "a number with a decimal part"
- Casting: writing `int()` without explaining why the conversion is needed
- Choosing integer instead of real for values with decimal parts (e.g. prices)
- Describing Boolean as "yes/no" without linking to True/False

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q5(a)(i) | Identify suitable data types for given fields | 2 | State |
| 2022 | J277/02 | Q5(a)(ii) | Identify Boolean field from a table | 1 | Identify |
| 2025 | J277/02 | Q1(b)(iii) | Identify data type of function return value | 1 | Identify |

**Key observations:**
- Identifying suitable data types for a given scenario is the most common format
- Boolean identification from context appeared in 2022 and 2025; reliable recurring question
- Casting has not appeared as a standalone question recently but is embedded in Section B code writing

---

## Quick Reference

### Data Types at a Glance

| Data Type | Description | Example Values | Typical Use |
|-----------|-------------|---------------|-------------|
| Integer | Whole number | 0, 42, -7 | Age, score, count |
| Real (float) | Decimal number | 3.14, -0.5, 9.99 | Price, average, temperature |
| Boolean | True or False only | True, False | isLoggedIn, hasWon |
| Character | Single character | 'A', '3', '?' | Initial, grade letter |
| String | Sequence of characters | "Alice", "AB12 3CD" | Name, postcode, password |

### Casting (Python)
- `int("5")` -- converts string "5" to integer 5
- `str(42)` -- converts integer 42 to string "42"
- `float("3.14")` -- converts string to real number
- Why: user input always arrives as a string; cast before arithmetic

### Key Exam Language

**Say this:**
- "User input always arrives as a string; casting to integer allows arithmetic to be performed" (casting)
- "True or False only" (Boolean)
- "A number with a decimal part" (real)

**Not this:**
- "Real is a large number"
- "Boolean is yes or no" without True/False
- `int()` without explaining why
