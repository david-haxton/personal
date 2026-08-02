# Unit 2.1.3: Searching and Sorting Algorithms
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

**Students must know:**

**Searching algorithms:**
- **Linear search** -- checks each element in sequence from the start until the target is found or the end of the list is reached; works on unsorted and sorted data
- **Binary search** -- finds the midpoint of a sorted list, compares the target to the midpoint value, discards the half that cannot contain the target, repeats on the remaining half; pre-requisite: data must be sorted

**Sorting algorithms:**
- **Bubble sort** -- repeatedly compares adjacent pairs of values and swaps them if they are in the wrong order; repeats passes until a complete pass with no swaps occurs; largest values move to the end of the list first
- **Insertion sort** -- builds a sorted partition at the start of the list; takes each new element from the unsorted portion and inserts it into the correct position in the sorted partition; starts from the second element
- **Merge sort** -- splits the list repeatedly until each element is a list of one; merges pairs of lists in sorted order, repeating until one sorted list remains; the merging process itself produces the sorted output

**Key distinctions:**
- Binary search pre-requisite: data **must be sorted**
- In merge sort: the merging process creates the sorted list -- there is no separate sorting step after merging
- Insertion sort is **not** completed in a single pass
- Students are NOT required to memorise the code or pseudocode for these algorithms

**Marking language:**
- Accept: "Data must be sorted/in order" for binary search pre-requisite
- Accept: "Compares adjacent pairs and swaps if in the wrong order" for bubble sort
- Accept: "Inserts values into a sorted partition" // "Builds a sorted section from the left" for insertion sort
- Accept: "Splits into individual items then merges in order" for merge sort
- Accept: "More efficient/faster than bubble sort" for insertion sort, with reference to fewer comparisons; Big O notation also accepted
- Do not accept: "Completes in one iteration/pass" for insertion sort
- Do not accept: Showing the final sorted list only for merge sort without correct intermediate steps -- zero marks
- Do not accept: An alternative sorting algorithm shown in place of the requested one, even if the final output is correct

**Not required:** Big O notation (accepted if offered but not required); memorising code or pseudocode for any algorithm

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022--2025)

1. **Merge sort: sorting the merged lists rather than understanding that merging produces the sorted output**
   - Many candidates showed merged lists that were out of order and then sorted them as a second step. This is wrong -- in merge sort, each merge operation produces a sorted list.
   - Source: June 2022 J277/02 ER Q3(a) -- "Many candidates showed merged lists which were out of order to start with, and then sorted these merged lists. This is highly inefficient and not what the standard merge sort algorithm describes."

2. **Insertion sort described as completing in one iteration**
   - Source: June 2023 J277/02 ER Q3(c) -- "Do not accept 'completes in one iteration' for insertion sort"

3. **Confusing insertion sort and bubble sort descriptions**
   - Bubble sort: compares/swaps adjacent pairs, largest values move to the end first
   - Insertion sort: builds sorted partition from the left, inserts each element into correct position

### Common Mark Losses
- Binary search: forgetting the pre-requisite that data must be sorted
- Merge sort: sorting merged lists instead of understanding merging produces the sorted output
- Showing only the final sorted list for a step-by-step algorithm question -- zero marks
- Insertion sort: stating it completes in one pass
- Using the wrong algorithm when a specific one is named in the question

### Question Patterns (2022--2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/02 | Q3(a) | Merge sort -- show steps on a data set of 8 values | 4 | Show working |
| 2023 | J277/02 | Q3(c)(i) | Insertion sort vs bubble sort -- describe one difference | 2 | Open response |
| 2023 | J277/02 | Q3(c)(ii) | Insertion sort vs bubble sort -- describe two similarities | 2 | Open response |
| 2024 | J277/02 | Q4(c)(i) | Binary search -- show steps on a 7-item data set | 3 | Show working |
| 2024 | J277/02 | Q4(c)(ii) | Binary search -- state one pre-requisite | 1 | State |
| 2024 | J277/02 | Q4(c)(iii) | Identify merge sort from description | 1 | Tick box |
| 2025 | J277/02 | Q1(b) | Insertion sort, bubble sort, array -- tick descriptions | 3 | Tick box |
| 2025 | J277/02 | Q1(c) | Linear search -- name algorithm and identify stop condition | 2 | Identify + state |

**Key observations:**
- Binary search pre-requisite is a reliable 1-mark question appearing across multiple years
- Merge sort step-by-step appeared in 2022; algorithm identification via tick-box recurs reliably
- Insertion sort vs bubble sort comparison appeared in 2023; likely to recur in similar form

---

## Quick Reference

### Algorithms at a Glance

| Algorithm | Type | Pre-requisite | How it Works | Key Fact |
|-----------|------|---------------|--------------|----------|
| Linear search | Search | None | Checks each element in order from the start | Works on unsorted data |
| Binary search | Search | Data must be sorted | Halves the search space by comparing to midpoint | Much faster on large sorted lists |
| Bubble sort | Sort | None | Compares/swaps adjacent pairs; repeats until no swaps | Largest values move to end first |
| Insertion sort | Sort | None | Inserts each element into correct position in sorted partition | Faster than bubble sort on average |
| Merge sort | Sort | None | Splits to individual items; merges pairs in sorted order | Merging produces the sorted output |

### Key Exam Language

**Say this:**
- "Data must be sorted before a binary search can be applied" (pre-requisite)
- "Compares adjacent pairs and swaps if in the wrong order" (bubble sort)
- "The merging process produces the sorted list" (merge sort)
- "Builds a sorted partition from the left, inserting each element into the correct position" (insertion sort)

**Not this:**
- "Completes in one pass" for insertion sort
- "Sorted the merged lists after merging" -- the merging produces the sorted output
- Showing only the final sorted list for step-by-step questions
