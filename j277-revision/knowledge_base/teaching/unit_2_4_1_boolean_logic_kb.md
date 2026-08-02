# Unit 2.4.1: Boolean Logic
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**
- The three Boolean operators and their gate names:
  - **AND** (Conjunction) -- output is 1 only when ALL inputs are 1
  - **OR** (Disjunction) -- output is 1 when AT LEAST ONE input is 1
  - **NOT** (Negation) -- inverts the single input; 0 becomes 1, 1 becomes 0
- The truth table for each individual gate
- How to complete or create truth tables for expressions combining multiple gates
- How to recognise each gate symbol and draw simple logic diagrams
- How to create, complete, or edit a logic diagram for a given scenario
- How to work with more than one gate in a single logic diagram

**Truth Tables:**

AND: output 1 only when both inputs are 1 (0,0->0; 0,1->0; 1,0->0; 1,1->1)
OR: output 1 when at least one input is 1 (0,0->0; 0,1->1; 1,0->1; 1,1->1)
NOT: inverts the input (0->1; 1->0)

**Number of rows:** 2^n, where n = number of distinct input variables
- 2 inputs: 4 rows; 3 inputs: 8 rows

**Alternatives accepted:** T/F or True/False instead of 1/0; "V" for OR

**Key distinctions:**
- The circle on the output of the NOT gate is essential -- without it, the shape is just a triangle (a buffer)
- AND and OR gates do NOT have circles -- adding one produces NAND or NOR (not on J277 spec)
- Examiners mark the shape of gates and ignore annotation -- shape must be clearly correct
- Intermediate columns in multi-gate truth tables allow partial credit even if the final column has an error

**Marking language:**
- Accept: T/F or True/False as alternatives to 1/0
- Accept: "V" notation for OR; any other consistent valid notation
- Accept: Logic diagrams with clearly correct gate shapes -- annotation ignored by examiners
- Accept: Intermediate columns in truth tables for multi-gate expressions
- Do not accept: NOT gate drawn without the circle on the output
- Do not accept: AND or OR gates drawn with a circle (produces NAND/NOR -- not on spec)
- Do not accept: "Shows all possible combinations" alone as the purpose of a truth table -- must link output to each specific input

**Not required:** NAND, NOR, XOR, XNOR; Boolean algebra simplification; Karnaugh maps; De Morgan's laws

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **NOT gate drawn without the circle**
   - The circle on the output of the NOT gate is what distinguishes it from a buffer. Without it, no mark.
   - Source: June 2025 J277/02 ER Q5(a) -- "the circle on the NOT gate is crucial (as otherwise a triangle with no circle is simply a buffer)"

2. **AND/OR gates drawn with circles (producing NAND/NOR)**
   - Source: June 2025 J277/02 ER Q5(a) -- "AND and OR gates do not need circles, or they would instead be NAND or NOR gates"

3. **Truth table purpose stated without linking output to inputs**
   - "Shows all possible combinations of inputs and outputs" only gains the first mark -- it does not make clear the output is linked to each specific input combination.
   - Source: June 2022 J277/02 ER Q2(a)(ii)

4. **Incorrect number of rows calculated**
   - Students count gates instead of distinct input variables. Formula: 2^n where n = number of inputs.
   - Source: June 2022 J277/02 ER Q2(a)(iii)

5. **Not using intermediate columns for multi-gate expressions**
   - Working through an intermediate column (e.g. B OR C before the final AND with A) ensures accuracy and allows partial marks.

### Common Mark Losses
- NOT gate without the circle
- AND or OR gate with a circle (NAND/NOR)
- Truth table purpose: "shows all possible combinations" without linking output to specific inputs
- Wrong number of rows: counting gates not input variables
- Multi-gate expressions: no intermediate columns, then errors in final column
- Truth table input rows not in systematic binary counting order

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q2(a)(i) | Evaluate logic circuit output for given inputs | 1 | Apply |
| 2022 | J277/02 | Q2(a)(ii) | Describe the purpose of a truth table | 2 | Open response |
| 2022 | J277/02 | Q2(a)(iii) | State number of rows for 3-input expression | 1 | State |
| 2023 | J277/02 | Q4(b) | Identify logic gate from truth table (OR and AND) | 2 | Identify |
| 2024 | J277/02 | Q6 | Complete truth table for A AND (B OR C) | 4 | Table completion |
| 2025 | J277/02 | Q5(a) | Draw a logic diagram from a real-world scenario | 4 | Draw |

**Key observations:**
- Boolean logic appears in every series across truth tables, gate identification, and logic diagram drawing
- Logic diagram drawing (2025 Q5a) was the highest-performing question in 2025
- Gate identification from truth tables appeared in 2023; reliable recurring format
- Truth table purpose (2022) was poorly answered -- reliable discriminating question
- Multi-gate truth table completion (4 marks) is a substantial question type

---

## Quick Reference

### Gates at a Glance

| Gate | Name | Output rule | Shape feature |
|------|------|------------|--------------|
| AND | Conjunction | 1 only when ALL inputs are 1 | D-shape, flat back, no circle |
| OR | Disjunction | 1 when AT LEAST ONE input is 1 | Curved back and front, no circle |
| NOT | Negation | Inverts input (0->1, 1->0) | Triangle with circle on output |

### Rows Formula

| Inputs | Rows |
|--------|------|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

Formula: 2^n (n = distinct input variables)

### Example: A AND (B OR C) -- intermediate column approach

| A | B | C | B OR C | A AND (B OR C) |
|---|---|---|--------|----------------|
| 0 | 0 | 0 |   0    |       0        |
| 0 | 0 | 1 |   1    |       0        |
| 0 | 1 | 0 |   1    |       0        |
| 0 | 1 | 1 |   1    |       0        |
| 1 | 0 | 0 |   0    |       0        |
| 1 | 0 | 1 |   1    |       1        |
| 1 | 1 | 0 |   1    |       1        |
| 1 | 1 | 1 |   1    |       1        |

### Key Exam Language

**Say this:**
- "Shows all possible permutations of inputs and the associated output for each" (purpose of truth table)
- "The circle on the NOT gate output is essential"
- "2^n rows where n is the number of distinct input variables"

**Not this:**
- NOT gate without the circle
- AND or OR gate with a circle
- "Shows all possible combinations" -- must link output to each specific input
