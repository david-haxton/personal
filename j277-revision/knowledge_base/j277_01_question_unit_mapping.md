# J277/01 Question-to-Unit Mapping
## Knowledge Loader Routing File

**Purpose:** Maps each past paper question to its spec unit(s) so the knowledge loader knows which knowledge base files to include per API call.

**Usage:** When a student selects a paper + question in Exam Practice Mode, load the teaching file(s) listed in `knowledge_base_files`, plus the relevant mark scheme and examiner report for that paper year.

---

## 2023 Paper (J277/01 June 2023)

| Question | Marks | Topic Summary | Unit(s) | Knowledge Base Files | Notes |
|----------|-------|---------------|---------|---------------------|-------|
| 1(a) | 1 | True statement about binary (tick box) | 1.2.4 | 1_2_4_data_storage | Binary fundamentals |
| 1(b) | 4 | Denary/binary/hex conversion table | 1.2.4 | 1_2_4_data_storage | Multi-base conversions |
| 1(c) | 1 | Identify largest file size from mixed units | 1.2.3 | 1_2_3_units | Unit conversion comparison |
| 1(d) | 1 | Identify two equal file sizes (tick box) | 1.2.3 | 1_2_3_units | Unit equivalence |
| 1(e) | 2 | Binary addition with carries | 1.2.4 | 1_2_4_data_storage | Show working required |
| 1(f) | 2 | Identify binary shift applied | 1.2.4 | 1_2_4_data_storage | Direction + places needed |
| 2(a)(i) | 4 | Protocol matching table (4 tasks) | 1.3.2 | 1_3_2_protocols_layers | HTTP, HTTPS, FTP, POP/IMAP |
| 2(a)(ii) | 2 | Why protocols have layers | 1.3.2 | 1_3_2_protocols_layers | Benefits of layers |
| 2(b)(i) | 1 | One other LAN characteristic | 1.3.1 | 1_3_1_networks_topologies | Not geographical area (given) |
| 2(b)(ii) | 4 | Benefits of adding wireless to home LAN | 1.3.1, 1.3.2 | 1_3_1_networks_topologies, 1_3_2_protocols_layers | Multi-unit: applied to home scenario |
| 2(b)(iii) | 2 | Drawbacks of adding wireless | 1.3.1, 1.3.2 | 1_3_1_networks_topologies, 1_3_2_protocols_layers | Multi-unit: applied to home scenario |
| 3(a) | 5 | Character set gap-fill completion | 1.2.4 | 1_2_4_data_storage | ASCII, unique codes, sequential |
| 3(b)(i) | 1 | Define metadata in an image file | 1.2.4 | 1_2_4_data_storage | Image metadata |
| 3(b)(ii) | 2 | Decode binary data to colour grid | 1.2.4 | 1_2_4_data_storage | Colour depth + pixel mapping |
| 3(b)(iii) | 1 | Max colours in 4-bit colour depth | 1.2.4 | 1_2_4_data_storage | 2^4 = 16 |
| 3(b)(iv) | 2 | Effects of increasing colour depth | 1.2.4 | 1_2_4_data_storage | Quality + file size |
| 3(c)(i) | 3 | Compression for text document + justify | 1.2.5 | 1_2_5_compression | Lossless + justification |
| 3(c)(ii) | 3 | Compression for image file + justify | 1.2.5 | 1_2_5_compression | Lossy + justification |
| 4(a) | 4 | Threats vs prevention methods (tick table) | **1.4** | -- | **OUT OF SCOPE** (Security) |
| 4(b) | 3 | Name + describe a threat | **1.4** | -- | **OUT OF SCOPE** (Security) |
| 5(a)(i) | 2 | Why primary AND secondary storage needed | 1.2.1, 1.2.2 | 1_2_1_primary_storage, 1_2_2_secondary_storage | Multi-unit: both sides required |
| 5(a)(ii) | 2 | Example secondary storage device + data | 1.2.2 | 1_2_2_secondary_storage | Device (not type) + context |
| 5(a)(iii) | 4 | Virtual memory true/false correction table | 1.2.1 | 1_2_1_primary_storage | VM process detail |
| 5(b) | 1 | Need for utility software | **1.5** | -- | **OUT OF SCOPE** (Systems software) |
| 5(c)(i) | 3 | Identify client + justify (artist scenario) | 1.3.1 | 1_3_1_networks_topologies | Client-server applied |
| 5(c)(ii) | 3 | Identify server + justify (artist scenario) | 1.3.1 | 1_3_1_networks_topologies | Client-server applied |
| 5(d)(i) | 4 | Benefits of proprietary software | **1.5** | -- | **OUT OF SCOPE** (Systems software) |
| 5(d)(ii) | 2 | Benefit of open source to users | **1.5** | -- | **OUT OF SCOPE** (Systems software) |
| 6 | 8 | Discuss facial recognition impacts | **1.6** | -- | **OUT OF SCOPE** (Ethical/legal) |
| 7 | 3 | Embedded system in car + explain | 1.1.3 | 1_1_3_embedded_systems | Example + characteristics |

### 2023 In-Scope Summary

| Unit | Questions | Marks |
|------|-----------|-------|
| 1.1.3 Embedded Systems | 7 | 3 |
| 1.2.1 Primary Storage | 5(a)(i), 5(a)(iii) | 6 |
| 1.2.2 Secondary Storage | 5(a)(i), 5(a)(ii) | 4 |
| 1.2.3 Units | 1(c), 1(d) | 2 |
| 1.2.4 Data Storage | 1(a-b), 1(e-f), 3(a), 3(b)(i-iv) | 18 |
| 1.2.5 Compression | 3(c)(i-ii) | 6 |
| 1.3.1 Networks/Topologies | 2(b)(i-iii), 5(c)(i-ii) | 13 |
| 1.3.2 Protocols/Layers | 2(a)(i-ii), 2(b)(ii-iii) | 12 |
| **In scope total** | | **58 / 80** |
| **Out of scope (1.4-1.6)** | 4(a-b), 5(b), 5(d)(i-ii), 6 | **22 / 80** |

---

## 2024 Paper (J277/01 June 2024)

| Question | Marks | Topic Summary | Unit(s) | Knowledge Base Files | Notes |
|----------|-------|---------------|---------|---------------------|-------|
| 1(a) | 3 | Binary/denary conversion table | 1.2.4 | 1_2_4_data_storage | 8-bit binary to/from denary |
| 1(b) | 4 | Range/colour depth/char set statements | 1.2.4 | 1_2_4_data_storage | Mixed concepts |
| 1(c) | 1 | Left binary shift 4 places | 1.2.4 | 1_2_4_data_storage | Shift application |
| 1(d) | 3 | Describe hex to denary conversion + example | 1.2.4 | 1_2_4_data_storage | Method description |
| 1(e) | 2 | Binary addition with carries | 1.2.4 | 1_2_4_data_storage | Show working required |
| 2(a)(i) | 2 | Give valid IPv4 and IPv6 examples | 1.3.2 | 1_3_2_protocols_layers | Address format |
| 2(a)(ii) | 2 | Describe MAC address format | 1.3.2 | 1_3_2_protocols_layers | Hexadecimal, pairs, separators |
| 2(b)(i) | 4 | Benefits of wired connections (airport) | 1.3.1, 1.3.2 | 1_3_1_networks_topologies, 1_3_2_protocols_layers | Multi-unit: applied to airport |
| 2(b)(ii) | 3 | Why also allow wireless (airport) | 1.3.1, 1.3.2 | 1_3_1_networks_topologies, 1_3_2_protocols_layers | Multi-unit: applied to airport |
| 2(c)(i) | 3 | Draw star topology diagram | 1.3.1 | 1_3_1_networks_topologies | 5 PCs, 1 switch, 2 printers |
| 2(c)(ii) | 2 | Star vs mesh: benefit + drawback | 1.3.1 | 1_3_1_networks_topologies | Topology comparison |
| 2(c)(iii) | 3 | Role of switch in star topology | 1.3.1 | 1_3_1_networks_topologies | MAC table, directed traffic |
| 3(a) | 4 | OS functions table completion | **1.5** | -- | **OUT OF SCOPE** (Systems software) |
| 3(b) | 6 | Encryption + defragmentation gap-fill | **1.4/1.5** | -- | **OUT OF SCOPE** (Security/Systems software) |
| 4 | 8 | Discuss open source vs proprietary (game) | **1.5/1.6** | -- | **OUT OF SCOPE** (Software/Ethical) |
| 5(a)(i) | 1 | Sound sampling description (tick box) | 1.2.4 | 1_2_4_data_storage | Sample rate definition |
| 5(a)(ii) | 2 | Effect of changing bit depth on sound file | 1.2.4 | 1_2_4_data_storage | Quality + file size |
| 5(b)(i) | 4 | Magnetic vs solid state for musician + justify | 1.2.2 | 1_2_2_secondary_storage | Applied to musician scenario |
| 5(b)(ii) | 1 | One other type of secondary storage | 1.2.2 | 1_2_2_secondary_storage | Must be third type (optical) |
| 5(b)(iii) | 1 | Identify smallest capacity (mixed units) | 1.2.3 | 1_2_3_units | Unit conversion comparison |
| 5(b)(iv) | 2 | Calculate storage for 1000 x 3MB files | 1.2.3 | 1_2_3_units | Show working, answer in GB |
| 6(a) | 2 | Describe fetch-execute cycle | 1.1.1 | 1_1_1_cpu_architecture | FDE stages |
| 6(b) | 4 | Name 2 registers + purpose | 1.1.1 | 1_1_1_cpu_architecture | Register table completion |
| 6(c) | 3 | Three CPU performance characteristics | 1.1.2 | 1_1_2_cpu_performance | Full terms required |
| 7(a) | 3 | Why Follow Me system is embedded | 1.1.3 | 1_1_3_embedded_systems | Characteristics in context |
| 7(b)(i) | 2 | Items stored in ROM (Follow Me) | 1.2.1 | 1_2_1_primary_storage | ROM purpose applied |
| 7(b)(ii) | 3 | Items stored in RAM (Follow Me) | 1.2.1 | 1_2_1_primary_storage | Currently running data applied |
| 7(b)(iii) | 2 | Why no virtual memory needed | 1.2.1 | 1_2_1_primary_storage | VM in embedded context |

### 2024 In-Scope Summary

| Unit | Questions | Marks |
|------|-----------|-------|
| 1.1.1 CPU Architecture | 6(a), 6(b) | 6 |
| 1.1.2 CPU Performance | 6(c) | 3 |
| 1.1.3 Embedded Systems | 7(a) | 3 |
| 1.2.1 Primary Storage | 7(b)(i-iii) | 7 |
| 1.2.2 Secondary Storage | 5(b)(i-ii) | 5 |
| 1.2.3 Units | 5(b)(iii-iv) | 3 |
| 1.2.4 Data Storage | 1(a-e), 5(a)(i-ii) | 16 |
| 1.3.1 Networks/Topologies | 2(b)(i-ii), 2(c)(i-iii) | 15 |
| 1.3.2 Protocols/Layers | 2(a)(i-ii), 2(b)(i-ii) | 11 |
| **In scope total** | | **62 / 80** |
| **Out of scope (1.4-1.6)** | 3(a-b), 4 | **18 / 80** |

---

## Cross-Paper Analysis

### Marks by Unit (In-Scope Only)

| Unit | 2023 | 2024 | Total | Weight |
|------|------|------|-------|--------|
| 1.1.1 CPU Architecture | 0 | 6 | 6 | 5% |
| 1.1.2 CPU Performance | 0 | 3 | 3 | 2.5% |
| 1.1.3 Embedded Systems | 3 | 3 | 6 | 5% |
| 1.2.1 Primary Storage | 6 | 7 | 13 | 11% |
| 1.2.2 Secondary Storage | 4 | 5 | 9 | 7.5% |
| 1.2.3 Units | 2 | 3 | 5 | 4% |
| 1.2.4 Data Storage | 18 | 16 | 34 | 28% |
| 1.2.5 Compression | 6 | 0 | 6 | 5% |
| 1.3.1 Networks/Topologies | 13 | 15 | 28 | 23% |
| 1.3.2 Protocols/Layers | 12 | 11 | 23 | 19% |
| **Total in-scope** | **58** | **62** | **120** | **100%** |

### Multi-Unit Questions (Loader Must Include Multiple Teaching Files)

| Paper | Question | Units | Files Needed |
|-------|----------|-------|-------------|
| 2023 | 2(b)(ii) | 1.3.1 + 1.3.2 | 1_3_1_networks_topologies + 1_3_2_protocols_layers |
| 2023 | 2(b)(iii) | 1.3.1 + 1.3.2 | 1_3_1_networks_topologies + 1_3_2_protocols_layers |
| 2023 | 5(a)(i) | 1.2.1 + 1.2.2 | 1_2_1_primary_storage + 1_2_2_secondary_storage |
| 2024 | 2(b)(i) | 1.3.1 + 1.3.2 | 1_3_1_networks_topologies + 1_3_2_protocols_layers |
| 2024 | 2(b)(ii) | 1.3.1 + 1.3.2 | 1_3_1_networks_topologies + 1_3_2_protocols_layers |

### Out-of-Scope Questions (UI Should Flag to Students)

| Paper | Questions | Units | Topic |
|-------|-----------|-------|-------|
| 2023 | 4(a), 4(b) | 1.4 | Security |
| 2023 | 5(b), 5(d)(i), 5(d)(ii) | 1.5 | Systems software |
| 2023 | 6 | 1.6 | Ethical/legal/environmental |
| 2024 | 3(a) | 1.5 | Systems software |
| 2024 | 3(b) | 1.4/1.5 | Security + systems software |
| 2024 | 4 | 1.5/1.6 | Software + ethical/legal |

---

## Key Observations

1. **1.2.4 (Data Storage) dominates** -- 34 marks across both papers (28% of in-scope content). Heaviest use, most varied question types. Quiz Mode should weight this unit accordingly.

2. **1.3.1 + 1.3.2 together account for 42%** of in-scope marks. Wired vs wireless questions always span both units. The loader must handle multi-file loading cleanly.

3. **1.1.1 and 1.1.2 only appeared in 2024** -- no standalone questions in 2023. Students may underestimate these topics.

4. **1.2.5 (Compression) only appeared in 2023** -- zero marks in 2024. Still on spec, still needs quiz coverage.

5. **~25% of each paper is out of scope** (units 1.4-1.6). The UI needs a clear message when students select these questions.

6. **No 1.1.1 questions in 2023** -- CPU architecture was not directly examined. Could indicate rotation or could appear heavily in future papers.

---

## Knowledge Loader Logic

```
EXAM PRACTICE MODE:
  Input: paper_year, question_number

  1. Look up (paper_year, question_number) in mapping
  2. If unit is out of scope:
     -> Return message: "This question covers [topic] which is not yet supported by this tool."
  3. Load files:
     a. mark_schemes/j277_01_{year}_mark_scheme.md (relevant question section)
     b. examiner_reports/j277_01_{year}_examiner_report.md (relevant question section)
     c. For each file in knowledge_base_files:
        teaching/{file}.md
  4. For multi-unit questions, load ALL listed teaching files

QUIZ MODE:
  Input: selected_unit (e.g. "1.2.4")

  1. Load: teaching/{unit_file}.md
  2. Load: spec/j277_spec_1_1_to_1_3.md (relevant section)
  3. Optionally load examiner report sections for misconception awareness
```
