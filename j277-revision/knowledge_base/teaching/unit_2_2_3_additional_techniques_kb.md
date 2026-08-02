# Unit 2.2.3: Additional Programming Techniques
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**

**String manipulation:**
- Concatenation -- joining strings (Python: `+`; OCR ERL: `+`)
- Slicing/substring -- extracting part of a string (Python: `string[start:end]`; OCR ERL: `substring(string, start, length)`)
- String length (Python: `len(string)`; OCR ERL: `string.length`)
- Upper/lower case (Python: `.upper()`, `.lower()`; OCR ERL: `.upper`, `.lower`)

**File handling -- four operations required:**
- **Open** -- open a file
- **Read** -- read data from the file (line by line)
- **Write** -- write data to the file
- **Close** -- close the file after use

**Arrays:**
- **1D array** -- fixed-length list; 0-indexed; all elements same data type
- **2D array** -- grid (rows and columns); first index is row, second is column; used to emulate database tables
- Arrays are fixed-length (static) in OCR ERL -- unlike Python lists which are dynamic

**Sub-programs:**
- **Function** -- returns a value; uses parameters and a return statement
- **Procedure** -- does not return a value; used for tasks
- **Local variable** -- accessible only within the sub-program
- **Global variable** -- accessible throughout the whole program

**SQL:**
- `SELECT` -- which fields/columns to display
- `FROM` -- which table
- `WHERE` -- filter rows by condition

**Random number generation:** students must be able to create and use random numbers.

**Key distinctions:**
- A function returns a value; a procedure does not -- using the wrong type loses marks
- Local variables are preferred for maintainability; global variables should only be used when necessary
- File handling: the four-step sequence (open, read/write, close) must be complete -- missing close is a common error
- 2D arrays: first index is row, second is column -- reversing these is a common error
- In Python (KCS): camelCase naming throughout -- `studentName`, `totalScore`

**Marking language:**
- Accept: Python OR OCR Exam Reference Language for all code answers
- Accept: Python list as equivalent to an array where fixed-length is not specified
- Accept: `len()` for string length (Python); `.length` (OCR ERL)
- Accept: `string[start:end]` (Python) OR `substring(string, start, length)` (OCR ERL) for slicing
- Accept: "A named block of code that returns a value" for function; "does not return a value" for procedure
- Note: Full marks for SQL require all three clauses (SELECT, FROM, WHERE) to be correct. No explicit Do not accept wording for SQL found in OCR mark schemes (2022--2025). Source: June 2024 J277/02 Q9(d) MS
- Do not accept: Functions that do not include a return statement when a return value is required
- Do not accept: File handling code that opens but does not close the file

**Not required:** Records or SQL beyond SELECT, FROM, WHERE in depth

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Functions written without parameters or return values**
   - Candidates who had practical programming experience performed significantly better. A function must accept parameters and return a value; a procedure does not return.
   - Source: June 2023 J277/02 ER -- general Section B observation

2. **File handling: forgetting to close the file**
   - The four-step sequence (open, read/write, close) must be complete.
   - Source: June 2023 J277/02 ER -- "understanding the steps needed to write data to a text file was a differentiator between high and low performers"

3. **2D array: confusing row and column index order**
   - First index is row, second is column. `grid[column, row]` instead of `grid[row, column]` is wrong.
   - Source: June 2023 J277/02 ER -- "accessing data from a 2D array was identified as a key differentiating skill"

4. **SQL: missing FROM or WHERE**
   - Students who know SELECT often omit FROM entirely. WHERE is required when filtering rows.
   - Source: June 2024 J277/02 ER Q9(d)

5. **String slicing off-by-one errors**
   - Python uses exclusive end index (`string[0:3]` gives 3 characters); OCR ERL uses start position and length (`substring(str, 0, 3)` gives 3 characters from position 0). Students mix these up.

### Common Mark Losses
- Writing a procedure when a function with return value is required
- File handling: open and read/write present but close missing
- 2D array: accessing [column, row] instead of [row, column]
- SQL: missing FROM or WHERE clause
- String slicing: off-by-one index errors
- Local/global scope: using global where local is appropriate
- camelCase: using snake_case (`student_name`) instead of camelCase (`studentName`) -- required at KCS

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q2(c)(i) | Create function with parameters and return value | 4 | Write code |
| 2023 | J277/02 | Section B | Functions, arrays, file handling in extended scenario | 20 | Write/complete |
| 2024 | J277/02 | Q9(d) | SQL -- complete SELECT/FROM/WHERE statement | 4 | Complete code |
| 2024 | J277/02 | Section B | Extended programming scenario | 20 | Write/complete |
| 2025 | J277/02 | Section B | Extended programming scenario | 20 | Write/complete |

**Key observations:**
- Section B (20 marks) tests functions, arrays, file handling, and validation in combination every year
- Practical programming experience in lessons is the single biggest differentiator in Section B performance
- SQL appeared as a 4-mark Section A question in 2024; may recur

---

## Quick Reference

### File Handling (OCR ERL)
```
myFile = open("data.txt")
line = myFile.readLine()
myFile.writeLine("new entry")
myFile.close()
```

### Array Syntax (OCR ERL)
```
array scores[5]          // 1D: 5 elements, indices 0-4
scores[0] = 10

array grid[3,4]          // 2D: 3 rows, 4 columns
grid[1,2] = 7            // row 1, column 2
```

### Function vs Procedure (OCR ERL)
```
function double(n)
    return n * 2
endfunction

procedure greet(name)
    print("Hello " + name)
endprocedure
```

### SQL
```
SELECT firstName, surname
FROM tblStudents
WHERE yearGroup = 11
```

### Key Exam Language

**Say this:**
- "A function returns a value; a procedure does not" (sub-programs)
- "First index is the row, second is the column" (2D array)
- "Open, read/write, then close" (file handling sequence)

**Not this:**
- A procedure when a function (with return value) is required
- File handling without the close step
- `grid[column, row]` -- first index is always the row
- snake_case -- always camelCase at KCS
