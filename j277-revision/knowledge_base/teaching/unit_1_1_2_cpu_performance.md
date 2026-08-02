# Unit 1.1.2: CPU Performance
## OCR J277 GCSE Computer Science — Knowledge Base File

---

## Specification Requirements

### How common characteristics of CPUs affect their performance

**Students must know:**
- The three common CPU characteristics that affect performance: **clock speed**, **cache size**, and **number of cores**
- What each characteristic is and how it works
- How changing any of these characteristics affects system performance, individually or in combination

**Marking language:**
- Accept: "clock speed", "cache size", "number of cores"
- Do not accept: "clock", "cache", "speed", or "cores" on their own — too ambiguous (June 2024 J277/01 MS)

**Not required:**
- Technical specifications of CPU models, manufacturers, or product lines
- Mathematical calculations of performance improvements
- Advanced concepts like hyperthreading, thermal design power, or instruction sets

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022–2025)

1. **Incomplete or ambiguous terminology**
   - Students write "clock", "core", "cache", or "speed" without specifying the full characteristic.
   - Correction: always use the complete term — "clock speed", "number of cores", "cache size".
   - Source: June 2024 J277/01 examiner report — "Some responses were not precise enough as to the characteristics, for example stating 'clock' or 'core' without reference to the speed of the clock, or the number of cores, which were too ambiguous."

2. **Vague explanation of effects**
   - Students say "it's faster" or "performance increases" without specifying *what* improves or *why*.
   - Correction: always state the mechanism — e.g. "more instructions can be processed per second" (clock speed), "less data needs to be fetched from slower RAM" (cache size), "multiple instructions can be processed simultaneously" (cores).

3. **Assuming more cores always means proportionally faster**
   - Students imply that doubling the number of cores doubles performance.
   - Correction: multiple cores only help if the software supports multi-threading. Not all tasks can be split across cores.

### Common Mark Losses

- Using single ambiguous words instead of full characteristic names
- Failing to specify what is affected or why when describing impact
- Confusing CPU characteristics with other performance factors (e.g. RAM amount, storage speed)
- Naming the characteristic without explaining its effect on performance

### Question Patterns (2022–2025)

- Directly examined in 2024 (Q6(c), 3 marks — "Give three characteristics"); not identified as standalone questions in 2022–2023
- Typical format: identify/give three characteristics, 1 mark each
- Usually appears near CPU architecture questions (1.1.1)

---

## Quick Reference

### The Three CPU Performance Characteristics

| Characteristic | What it is | Effect of increasing it |
|---|---|---|
| **Clock speed** | Number of fetch-execute cycles per second, measured in hertz (GHz) | More instructions processed per second |
| **Cache size** | Amount of fast memory on the CPU storing frequently used data/instructions | Less need to fetch from slower RAM, reducing wait time |
| **Number of cores** | Independent processing units within the CPU, each able to run instructions | More instructions processed simultaneously (if software supports multi-threading) |

### Key Exam Language

- Say "clock speed" not "clock" or "speed"
- Say "cache size" not "cache"
- Say "number of cores" not "cores"
- When explaining effects, always state *what* improves and *why* — never just "it's faster"

### Combined Effects

- The three characteristics work together to determine overall performance — no single factor guarantees speed
- A CPU with high clock speed but small cache may still bottleneck on memory access
- Multiple cores only improve performance if the software can utilise them (multi-threading); single-threaded tasks gain no benefit from extra cores
