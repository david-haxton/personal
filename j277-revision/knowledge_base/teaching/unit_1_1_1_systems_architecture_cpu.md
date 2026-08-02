# Unit 1.1.1: Architecture of the CPU
## OCR J277 GCSE Computer Science — Knowledge Base File

---

## Specification Requirements

### 1. The purpose of the CPU: The fetch-execute cycle

**Students must know:**
- The CPU (Central Processing Unit) processes instructions and data
- The CPU carries out the fetch-decode-execute (FDE) cycle repeatedly
- **Fetch:** data/instructions are fetched from memory/RAM/primary storage
- **Decode:** the Control Unit decodes the instruction (splits into opcode and operand)
- **Execute:** the instruction is carried out/processed, including any arithmetic/logic calculations performed by the ALU
- The FDE cycle is a continuous, repeating process

**Not required:** Knowledge of passing of data between registers in each stage (per specification).

**Marking language:**
- Accept: "data/instructions are fetched from memory/RAM/primary storage"
- Accept: reasonable alternatives for "executed" (e.g. "carried out")
- Do not accept: "information is processed" or "programs are fetched from memory"

### 2. Common CPU components and their function

**Students must know:**
- **ALU (Arithmetic Logic Unit):** performs mathematical calculations and logical operations (AND, OR, NOT)
- **CU (Control Unit):** controls and coordinates activities within the CPU; decodes instructions; directs timing and control signals
- **Cache:** located on the CPU; faster than RAM but slower than registers; stores frequently used data/instructions
- **Registers:** very fast memory locations within the CPU; temporarily store data or addresses during processing

**Key distinction:** The specification requires knowledge of the role/purpose of each component — not detailed internal workings. Cache sits in a speed hierarchy: registers (fastest) > cache > RAM (slowest of the three).

### 3. Von Neumann architecture

**Students must know:**
- Von Neumann architecture: program instructions and data are both stored in the same memory (RAM)
- **Program Counter (PC):** stores the address of the next instruction to be fetched; increments during each FDE cycle
- **MAR (Memory Address Register):** stores the address of the data/instruction to be fetched from memory, or the address where data is to be stored
- **MDR (Memory Data Register):** stores the data/instruction that has been fetched from memory, or data to be written to memory
- **Accumulator (ACC):** stores the result of calculations performed by the ALU

**Critical distinction — address vs data:**

| Register | Stores | Type |
|----------|--------|------|
| Program Counter (PC) | Address of the next instruction | ADDRESS |
| MAR | Address of data/instruction to be fetched or stored | ADDRESS |
| MDR | The actual data/instruction fetched from or written to memory | DATA |
| Accumulator (ACC) | The result of calculations from the ALU | DATA |

**Marking language:**
- Accept: "stores", "holds", "points to/at" for PC and MAR
- Do not accept: action verbs — "fetches", "takes", "retrieves" — for register purposes. Registers **store**, they do not fetch
- Accept: CIR (Current Instruction Register) as a valid register
- If the register name is incorrect, do not mark the paired purpose

**Not required:** Contrast with Harvard architecture (beyond spec). Students do not need to know Harvard architecture.

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022–2025)

1. **"The Program Counter counts programs/instructions"**
   - Wrong. The PC stores the **address** of the next instruction to be fetched.
   - Source: June 2024 J277/01 examiner report — "A common misconception is that the program counter keeps track of how many programs have run or counts the instructions that are being processed."

2. **Confusing "stores" with actions**
   - Students write that registers "fetch" or "retrieve" data. Registers **store** data or addresses.
   - Source: June 2024 J277/01 MS — "Careful that the purpose is not an action such as fetches, takes, retrieves."

3. **Data vs address confusion**
   - Students say the MAR or PC stores "data" when they store an **address**. The accumulator stores the "result of calculations" not "the calculations."
   - Source: June 2025 J277/01 examiner report — "Some candidates inaccurately identified the MAR or the PC as storing data instead of the address of the data."

4. **Confusing components with registers**
   - Students list ALU or CU as registers. ALU and CU are **components** (they process/control). Registers are **storage locations** (PC, MAR, MDR, ACC).
   - Source: June 2025 J277/01 examiner report.

5. **Vague language in FDE descriptions**
   - Students write "information is processed" or "programs are fetched" instead of "data/instructions are fetched from memory."
   - Source: June 2024 J277/01 examiner report — "Some candidates inaccurately identified that information was processed, or that programs were fetched from memory."

6. **Register mix-ups in table questions**
   - Students give MAR where they mean PC, then cannot use MAR later in the same table.
   - Source: June 2022 J277/01 examiner report — "Common errors included giving MAR for the first definition in place of the PC and then following on with the MDR for the third row because the MAR had already been given by the candidate."

### Common Mark Losses

- Using action verbs instead of "stores" for register purposes
- Naming a register incorrectly, losing the paired purpose mark
- Imprecise language: "the PC stores instructions" (wrong — it stores the **address**)
- Saying the accumulator "stores calculations" instead of "the result of calculations"
- Writing "it is the brain of the computer" for CPU purpose without further explanation

### Question Patterns (2022–2025)

- 1.1.1 appears in every paper except possibly 2023
- Table completion is the dominant format for register/component questions (2–4 marks)
- FDE cycle "describe" questions typically worth 2 marks
- Cache has not been examined as a standalone question (2022–2025) but remains on spec
- Mark allocations range from 2–4 marks per sub-question; occasionally 6-mark extended response

---

## Quick Reference

### FDE Cycle Summary
- **Fetch:** address in PC → copied to MAR → instruction fetched from RAM → stored in MDR → PC increments
- **Decode:** CU decodes/interprets the instruction
- **Execute:** instruction carried out; ALU performs calculations if needed; result stored in accumulator

### Components vs Registers
- **Components** (do things): ALU (calculates), CU (controls/coordinates)
- **Storage** (store things): Cache (frequently used data), Registers (data/addresses during processing)
- **Named registers:** PC, MAR, MDR, Accumulator — these are the only four required

### Key Exam Language
- Say "data/instructions" not "programs" or "information"
- Say registers "store" not "fetch" or "retrieve"
- Distinguish "address" from "data" for every register
- Say "result of calculations" not "calculations" for the accumulator
