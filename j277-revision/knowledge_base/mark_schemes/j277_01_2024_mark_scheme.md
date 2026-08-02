# J277/01 June 2024 Mark Scheme
# Source: OCR June 2024 J277/01 Computer Systems Mark Scheme
# For use by practice.py — loaded as knowledge base context for marking

---

## Q1b — Binary and data calculations table [4 marks]

1 mark per correct row:

| Statement | Answer |
|---|---|
| The smallest denary number that can be represented by a 4-bit binary number | 0 |
| The largest denary number that can be represented by a 6-bit binary number | 63 |
| The maximum number of different colours with a colour depth of 7 bits | 128 |
| The minimum number of bits needed to represent 150 different characters | 8 |

**Guidance:**
- Row 1: 0 only. Do not accept 1.
- Row 2: 63 only (2^6 - 1). Do not accept 64.
- Row 3: 128 only (2^7). Do not accept 7.
- Row 4: 8 only (2^7 = 128 < 150, 2^8 = 256 >= 150). Do not accept 7.

---

## Q1d — Convert hexadecimal to denary [3 marks]

1 mark for method + 1 mark for correct example + 1 mark for correct answer:

**Method:**
- Multiply the left digit by 16 and add the right digit
- Convert each hex digit to its denary value, multiply the first by 16 and add the second

**Example:** Any valid 2-digit hex number e.g. 2F, A3, 1B

**Correct answer:** Must be consistent with their example e.g. 2F = (2 x 16) + 15 = 47

**Accept:**
- Any correct description of the conversion method
- Any valid worked example with correct answer

**Do not accept:**
- Method described without example
- Converting to binary as an intermediate step is acceptable if final answer is correct

**Examiner's Comments:**
Candidates often knew the method but made errors with hex digits above 9 (A=10, B=11, C=12, D=13, E=14, F=15). Common error was treating A as 1 instead of 10.

---

## Q2a-i — IPv4 and IPv6 examples [2 marks]

1 mark each:

**IPv4:** Any valid format: four groups of numbers 0-255 separated by dots e.g. 192.168.1.1, 10.0.0.1

**IPv6:** Any valid format: eight groups of four hexadecimal digits separated by colons e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334

**Accept:**
- Simplified IPv6 formats with :: notation
- Any correctly formatted example — does not need to be a real/routable address

**Do not accept:**
- Incorrect formats (e.g. only three groups for IPv4)
- IPv4 format for IPv6 or vice versa

---

## Q2a-ii — Format of a MAC address [2 marks]

1 mark each to max 2:
- 48 bits // 6 bytes long
- Expressed in hexadecimal // 12 hexadecimal digits
- Split into two parts: manufacturer identifier (first 24 bits/3 bytes) and device identifier (last 24 bits/3 bytes)
- Separated by colons or hyphens e.g. AA:BB:CC:DD:EE:FF
- Unique to each network interface card // globally unique identifier

**Do not accept:**
- "Long number" without specification of length or format
- Confusing MAC address with IP address

---

## Q2b-i — Benefits of wired connections [4 marks]

1 mark each to max 4 (or 2 marks each for 2 well-developed benefits):
- More secure // data is harder to intercept on a wired network // less susceptible to eavesdropping
- Faster speeds // higher bandwidth // more reliable speed
- More reliable connection // less interference // consistent connection
- No signal degradation over distance (within limits)
- No interference from other devices
- Lower latency

**Do not accept:**
- Cheaper (wired can be more expensive to install)
- More devices can connect (not specific to wired vs wireless)

**Examiner's Comments:**
Security and speed were the most commonly awarded marks. Candidates who said "more secure" without explaining why (harder to intercept) received 1 mark, not 2.

---

## Q2b-ii — Reasons for wireless access [3 marks]

1 mark each to max 3:
- Passengers/visitors can connect their own devices // bring your own device (BYOD) support
- Devices without ethernet ports can connect (e.g. tablets, phones, laptops)
- Greater flexibility // staff/passengers can move around while connected
- No need to install cables throughout the building // easier to extend coverage
- Can connect in areas where running cables is difficult
- Useful for temporary connections // visitors don't need cable access

**Examiner's Comments:**
Mobility and device flexibility were the most common correct answers.

---

## Q2c-ii — Benefit and drawback of star vs mesh topology [2 marks]

1 mark for benefit + 1 mark for drawback:

**Benefit of star over mesh:**
- If one cable fails, only that device is affected // other devices continue to work
- Easier to manage/add new devices // just connect to the switch
- Less cabling required than full mesh // cheaper to install
- Easier to identify faults // fault isolation is simpler
- Central switch makes management easier

**Drawback of star compared to mesh:**
- Single point of failure at the switch // if the switch fails, all devices lose connection
- If switch fails, entire network goes down
- More dependent on the central device
- Less resilient than mesh (where multiple paths exist)

**Do not accept:**
- Benefit: "faster" (not necessarily true)
- Drawback: "more cables needed" (star uses less cable than full mesh)

---

## Q2c-iii — Role of the switch [3 marks]

1 mark each to max 3:
- Connects devices together in the network // acts as the central connection point
- Receives data/frames/packets from a device
- Reads the MAC address of the destination device
- Sends the data only to the intended/specific destination device // does not broadcast to all devices
- Keeps a table of MAC addresses and which port they are connected to // MAC address table
- Reduces network traffic compared to a hub // more efficient than broadcasting

**Do not accept:**
- "Connects to the internet" (that is the router's role)
- Confusing switch with router

**Examiner's Comments:**
Candidates often described the switch as connecting devices (awarded) but fewer explained the role of reading MAC addresses and directing traffic to the correct device only.

---

## Q3a — OS functions table [4 marks]

1 mark per correct cell (2 missing functions + 2 missing tasks):

| Function | Task |
|---|---|
| Memory management | Moves data from secondary storage to RAM |
| Peripheral management | Uses drivers to communicate with hardware devices // manages input/output devices |
| File management | Allows the user to create, name and delete folders |
| User interface | Provides a means for the user to interact with the computer // displays information to the user |

**Accept for Peripheral management task:**
- Manages/controls hardware devices such as printers, keyboards
- Uses drivers to allow communication with peripherals
- Allows the computer to communicate with external devices

**Accept for User interface task:**
- Allows user to interact with the system
- Displays output to the user
- Provides a GUI/CLI for the user

**Do not accept:**
- "Manages memory" as a task for memory management (too circular/vague)
- User management as missing function (not in this table)

---

## Q3b — Utility software cloze [6 marks]

Correct answers in order:
1. Encryption
2. key
3. understood
4. Defragmentation
5. consecutive
6. speed

**Guidance:**
- Award 1 mark per correct word in the correct gap
- Accept correct capitalisation variations
- "meaningless" is acceptable for gap 3 instead of "understood" — accept any word that conveys the data cannot be read/interpreted

**Examiner note on gap 3:** OCR examiner reports consistently flag that "unreadable" is not the preferred answer. The correct phrasing is that intercepted encrypted data "cannot be understood" or is "meaningless". Accept "read" or "accessed" with caution — award if the meaning is clear.

---

## Q4 — Open Source vs Proprietary Licence [8 marks]

### Mark Band Descriptors

**Mark Band 3 — High Level (6-8 marks)**
Candidate demonstrates thorough knowledge and understanding of a wide range of considerations. Material generally accurate and detailed. Applies knowledge directly and consistently to the context. Weighs up both sides and includes reference to impact on all areas with thorough recognition of influencing factors. Well-developed line of reasoning, clear and logically structured. Information is relevant and substantiated. Answer covers all required elements (legal/ethical, benefits, drawbacks) for both open source and proprietary and includes a clear recommendation with justification. Top of band makes a clear, structured recommendation.

**Mark Band 2 — Mid Level (3-5 marks)**
Candidate demonstrates reasonable knowledge and understanding. Material generally accurate but at times underdeveloped. Applies knowledge directly to context although opportunities are missed. Reasonable attempt to discuss impact. Line of reasoning with some structure. Information in the most part relevant and supported by some evidence. Includes one or more from legal/ethical, benefits, drawbacks for open source and proprietary.

**Mark Band 1 — Low Level (1-2 marks)**
Basic knowledge with limited understanding. Material basic and contains some inaccuracies. Limited attempt to apply knowledge to context. Nothing more than an unsupported assertion. Information basic and communicated in an unstructured way. Answer limited to basic facts about open source and/or proprietary.

**0 marks:** No attempt or not worthy of credit.

### Indicative Content (not prescriptive or exhaustive)

**Proprietary — features:**
- Source code is kept private/hidden
- User pays for a licence to use the software
- Cannot be modified by users
- Sold as a finished product

**Proprietary — benefits for programmer:**
- Can charge for the software — generate revenue/profit
- Source code cannot be copied or modified by others — protects intellectual property
- Legal protection — copyright law prevents unauthorised copying
- Can control who uses the software — licensing
- Can charge for support and updates — ongoing revenue

**Proprietary — drawbacks for programmer:**
- Costs to develop and support
- Reputation risk if bugs not fixed
- Competition from similar proprietary products

**Proprietary — legal/ethical:**
- Copyright law protects the programmer's code
- Ethical to charge for work done
- May be seen as unfair if priced too high

**Open source — features:**
- Source code is freely available to view and modify
- Free to use and distribute
- Community development model
- Licences such as GPL allow use with conditions

**Open source — benefits for programmer:**
- Community contributions improve the software
- Wider adoption and use
- Reputation building within developer community
- Others may find and fix bugs

**Open source — drawbacks for programmer:**
- Cannot generate direct revenue from software sales
- Others can take the code, modify it, and release a competing product
- Less control over how the software is used or distributed
- Difficult to enforce licence conditions

**Open source — legal/ethical:**
- Code can be used by others — less legal protection
- Anyone can see the code — potential security vulnerabilities exposed
- Ethical to share software freely for community benefit

**Recommendation guidance:**
- A clear recommendation must be made and justified
- Either licence can be recommended if justification is appropriate
- Proprietary is more commonly recommended for commercial software
- "Both are suitable" without a recommendation cannot score above Mark Band 2

**Examiner's Comments:**
Candidates often identified features of each licence correctly. Many included benefits and drawbacks but within their discussion rather than explicitly labelled. Fewer candidates included a clear recommendation — this is the most common reason for being held to Mark Band 2. Stronger responses discussed each licence in turn and concluded with a clear, justified recommendation.

---

## Q5a-i — Sound sampling definition [1 mark]

**Accept:**
- B: The amplitude of the wave is measured at set intervals

**Do not accept:**
- A: (The frequency of the wave is measured — frequency is not sampled)
- C: (Digital sound wave — it is the analogue wave that is sampled)
- D: (Analogue sound wave's resolution — resolution is not the correct term)

**Examiner's Comments:**
The most common incorrect answer was A (frequency). The misconception is that sampling measures frequency. Sampling measures amplitude at set time intervals.

---

## Q5a-ii — Effect of changing bit depth [2 marks]

1 mark each to max 2:
- Higher bit depth = more bits per sample = greater range of amplitudes // more accurate representation of the sound
- Higher bit depth = larger file size // more storage space required
- Lower bit depth = fewer bits per sample = less accurate // lower quality sound
- Lower bit depth = smaller file size
- More bits per sample allows more gradations of amplitude to be measured

**Do not accept:**
- Bit depth affects sample rate (they are independent)
- "Better quality" without explaining why

---

## Q5b-i — Magnetic vs solid state storage choice [4 marks]

1 mark for correct type + up to 3 marks for justification:

**Correct type:** Solid state (SSD) — 1 mark

**Justification** (1 mark each to max 3):
- No moving parts // more reliable // less likely to break if moved
- Faster read/write speeds // better performance for music production
- Lighter and more portable
- Silent operation // no noise from spinning platters (important for recording environment)
- More durable // shock resistant
- Lower power consumption

**Accept magnetic if justification is convincing:**
- Larger capacity for the same price
- Already familiar with the technology

**Examiner's Comments:**
SSD was the expected answer. Candidates who chose magnetic could still score justification marks if their reasoning was sound. Durability, speed, and portability were the strongest justification points for SSD.

---

## Q5b-ii — Another type of secondary storage [1 mark]

**Accept:**
- Optical (CD/DVD/Blu-ray)
- USB flash drive / pen drive / memory stick
- Memory card / SD card
- HDD (if student chose SSD in Q5b-i)
- SSD (if student chose HDD in Q5b-i)

**Do not accept:**
- RAM, ROM, cache (primary storage)
- Cloud storage (not a physical secondary storage device)

---

## Q5b-iii — Smallest storage capacity [1 mark]

**Accept:**
- D: 0.0021 TB

**Guidance:**
- 2.1 GB = 2.1 GB
- 300 MB = 0.3 GB
- 200,000 KB = 200 MB = 0.2 GB
- 0.0021 TB = 2.1 GB

Wait — recalculate:
- 200,000 KB = 200,000 / 1024 MB ≈ 195 MB ≈ 0.195 GB
- 300 MB = 0.3 GB
- 2.1 GB = 2.1 GB
- 0.0021 TB = 2.1 GB

Smallest is 200,000 KB (approximately 195 MB).

**Correct answer: C — 200,000 KB**

---

## Q5b-iv — Calculate storage space [2 marks]

1 mark for correct method + 1 mark for correct answer:

**Method:** 1000 x 3 MB = 3000 MB
**Conversion:** 3000 MB / 1000 = 3 GB (using 1 GB = 1000 MB) or 3000 / 1024 ≈ 2.93 GB

**Accept:** 3 GB or 2.93 GB (depending on conversion used)

**Working must be shown.** Award method mark if working shown even if final answer is wrong.

---

## Q6a — Describe the fetch-execute cycle [2 marks]

1 mark each to max 2:
- The address of the next instruction is held in the Program Counter (PC)
- The address is copied to the MAR (Memory Address Register)
- The instruction is fetched from RAM at the address in the MAR
- The instruction is copied to the MDR (Memory Data Register)
- The PC is incremented // PC increases by 1 to point to next instruction
- The instruction is decoded by the Control Unit
- The instruction is executed by the ALU or relevant component

**Do not accept:**
- Vague descriptions without reference to specific stages or registers
- Describing only one stage for 2 marks

**Examiner's Comments:**
Many candidates described fetching and executing without mentioning decoding. The decode stage is often the missing mark.

---

## Q6b — Registers table [4 marks]

1 mark per correct row (register name + purpose):

| Register | Purpose |
|---|---|
| Program Counter (PC) | Stores the address of the next instruction to be fetched // keeps track of where the CPU is in the program |
| Memory Address Register (MAR) | Stores the address in memory of the data/instruction to be fetched or written |
| Memory Data Register (MDR) | Stores the data/instruction that has been fetched from or is to be written to memory |
| Accumulator (ACC) | Stores the result of calculations // stores data currently being processed // stores result from ALU |

**Also accept:**
- Current Instruction Register (CIR) // Instruction Register (IR): Stores the instruction currently being decoded/executed

**Guidance:**
- Do not award if the purpose is an action ("fetches", "takes", "retrieves") rather than a description of what is stored
- For PC and MAR, accept "pointer" for storing address
- Accept "memory address" and "memory data" as valid descriptions
- If a register is named correctly but purpose is wrong, do not award either mark for that row
- If the register name is wrong, do not award the purpose mark even if the purpose is correct
- BOD: accept Memory Buffer Register for MDR

**Examiner's Comments:**
Candidates often identified PC and one other register. Fewer named MAR and MDR specifically. Common misconception: program counter counts programs that have run or counts instructions being processed — this is incorrect. The PC holds the address of the next instruction.

---

## Q6c — Three characteristics affecting CPU performance [3 marks]

1 mark each to max 3:
- Clock speed
- Cache size // cache memory
- Number of cores

**Do not accept:**
- "Clock" alone (must specify speed)
- "Cache" alone (must specify size)
- "Cores" alone (must specify number)
- RAM size (not a CPU characteristic)
- Hard drive speed (not a CPU characteristic)

**Examiner's Comments:**
Most candidates identified clock speed and number of cores. Cache size was less commonly named. Vague answers like "clock" or "core" without qualification did not receive marks.

---

## Q7a — Explain why Follow Me is an embedded system [3 marks]

1 mark each to max 3:
- Has a specific/single/limited purpose // only performs the Follow Me function // dedicated to this task
- Built within a larger device (the car) // embedded in the car
- Has dedicated/specific hardware // sensors are specific to this system
- Has a microprocessor
- Built-in operating system // software stored in firmware/ROM
- Instructions/operation does not/is hard to change/update
- It is a control system // it is automated

**Do not accept:**
- "Built into something" without specifying the car or larger system
- "Built into the car" alone if that is the only point made (restates the question)

**Guidance:** BOD reference to it being "built into something reasonable". If justification is generic features without applying to the Follow Me system, max 1 for explanation.

**Examiner's Comments:**
Most candidates identified single purpose. Some identified built within a larger system. Fewer gave a third distinct point. Dedicated hardware (sensors only providing data for this system) was the strongest third point.

---

## Q7b-i — Items stored in ROM [2 marks]

1 mark each to max 2:
- Start-up instructions // BIOS // bootstrap // where to find the OS
- Firmware // program/instructions to run the Follow Me system // instructions for operation
- Example of data: maximum speed, minimum distance from car in front
- Operating System

**Guidance:**
- "Programs" alone is not enough — must specify instructions or the type of program
- Allow two marks for two examples of instructions or data relevant to the Follow Me system
  e.g. 1 mark: the maximum speed Follow Me can operate; 1 mark: the minimum distance the car in front can be

**Examiner's Comments:**
Many candidates identified start-up instructions or firmware. Some described the program/instructions for the system. Fewer gave specific examples of data stored in ROM.

---

## Q7b-ii — Items stored in RAM [3 marks]

1 mark each to max 3:
- Current distance from car in front
- Set/target distance from car in front
- Current speed of vehicle
- Current speed of vehicle in front
- Reading from sensor
- Driver actions (e.g. moving wheel, braking)
- Direction the car in front is travelling

**Do not accept:**
- "Speed" alone (must specify current or set speed, and whose speed)
- "Distance" alone (must specify from car in front)
- Start-up instructions (stored in ROM, not RAM)

**Guidance:** BOD reference to a camera taking images of what is in front.

**Examiner's Comments:**
Speed and distance were the most common correct answers. Stronger responses also identified that the speed of the car in front and the current speed of the vehicle were separate, distinct items. Some candidates also identified other data such as whether the driver has control or whether the system is currently active.

---

## Q7b-iii — Why Follow Me system does not need virtual memory [2 marks]

1 mark each to max 2:
- Only stores a small amount of data in RAM // only stores specific/few items in RAM
- Unlikely to run out of RAM // there is enough space in RAM for the data needed
- No secondary storage to use as VM
- Few/one program running at a time // no memory-intensive tasks
- Dedicated hardware is optimised for the system // RAM is designed to meet the system's requirements

**Examiner's Comments:**
Most candidates identified that VM is used when a system is short of RAM and then applied this correctly to the Follow Me system. Stronger responses also noted that embedded systems often lack secondary storage entirely, making VM impossible.
