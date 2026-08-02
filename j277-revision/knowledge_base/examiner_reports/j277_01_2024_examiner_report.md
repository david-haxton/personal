# J277/01 Computer Systems — 2024 Examiner Report

## Paper 1 Series Overview

Component 1 focuses on theoretical concepts of Computer Systems including systems architecture, memory and storage, computer networks, connections and protocols, network security, systems software, and ethical, legal, cultural and environmental concerns.

**Candidates who did well generally:**
- Applied their understanding to scenarios when given in the question
- Gave a recommendation in Question 4 and justified this decision
- Used examples to help justify or explain their points
- Planned their response to Question 4 to make sure all requirements in the question were covered

**Candidates who did less well generally:**
- Gave short responses that were ambiguous as to what was meant, for example "core" instead of "the number of cores"
- Provided points on a topic without consideration of the scenario and without linking responses to the question

---

## Question 1 — Data Representation

### 1(a) [3 marks] — Binary/denary conversion

**Question:** Complete a table converting between 8-bit binary and denary (given: 11110000, 105, 00011110).

**Examiner commentary:** Candidates were often able to correctly convert the numbers between the two forms. The conversion from binary to denary was most commonly accurate, with more candidates inaccurately converting from denary to binary.

**Common errors:** Denary-to-binary conversion was the weaker direction.

---

### 1(b) [4 marks] — Binary number properties

**Question:** Complete a table with answers about binary number properties (smallest denary from 4-bit, largest denary from 6-bit, max colours with 7-bit depth, min bits for 150 characters).

**Examiner commentary:** Candidates commonly gave the correct smallest denary number, although a common error was giving 1 instead of 0. Some candidates used 7-bit or 8-bit binary numbers for the second response or gave the next value of 64. Candidates found the third response more challenging with many giving 256 for an 8-bit binary number or giving the largest value of 127. The final response had the greatest variance of answers ranging from 1, 2 up to 16 or even 32.

**Common errors:**
- Giving 1 instead of 0 for the smallest denary number representable by 4 bits
- Using 7-bit or 8-bit ranges instead of 6-bit for the largest denary number
- Giving 256 or 127 for the maximum colours with 7-bit depth (confusing with 8-bit)
- Wide variance on minimum bits needed for 150 characters — answers ranged from 1 to 32

---

### 1(c) [1 mark] — Binary left shift

**Question:** Show the result of a left binary shift of 4 places on the binary number 00001111.

**Examiner commentary:** Candidates often gave the correct response by shifting the digits accurately. Some candidates did not shift the correct number of places, for example moving 3 places.

**Common errors:** Shifting the wrong number of places (e.g. 3 instead of 4).

---

### 1(d) [3 marks] — Hexadecimal to denary conversion

**Question:** Describe how to convert a 2-digit hexadecimal number into denary, using an example.

**Examiner commentary:** Candidates that did well on this question used the example to show how they converted a value from hexadecimal to denary. They included annotations to show what they were doing at each stage. Candidates often chose a hexadecimal value that included a letter. Some candidates chose hexadecimal values that were straightforward to convert, for example A0 where they multiplied 16 by 10 and then added 0. Some candidates chose a more complicated calculation and did not always calculate the correct result.

**What strong answers included:** A worked example with annotations at each stage, using a hex value containing a letter.

**Common errors:** Choosing a complex hex value but then calculating the result incorrectly.

---

### 1(e) [2 marks] — Binary addition

**Question:** Add two 8-bit binary numbers (01101011 + 00001111) using binary addition, showing working.

**Examiner commentary:** Most candidates attempted to show their working, commonly by including the carries in an appropriate place. Where the working was correct the answer was also often accurate. Some candidates converted the binary numbers to denary, added them and then converted the result back into denary. This method allowed them to get the answer but did not gain the working marks.

**Key examiner point:** Converting to denary and back does NOT gain the working marks — candidates must show binary addition with carries.

---

## Question 2 — Networks

### 2(a)(i) [2 marks] — Valid IP addresses

**Question:** Give one valid example of an IPv4 address and one valid example of an IPv6 address.

**Examiner commentary:** Many candidates found this question challenging with few candidates giving valid IP addresses. IPv4 was more commonly accurate, although a common error was giving numbers greater than 255. Few candidates were able to give an IPv6 address. Common errors included giving 6 groups of numbers and separating each group with a full stop.

**Common errors:**
- IPv4: Giving octets greater than 255
- IPv6: Giving only 6 groups instead of 8, separating groups with full stops instead of colons

---

### 2(a)(ii) [2 marks] — MAC address format

**Question:** Describe the format of a MAC address.

**Examiner commentary:** The most common responses given marks included identifying that it is usually in hexadecimal and that the groups are separated by colons or hyphens. Some candidates identified the two separate parts of the MAC address.

**What earned marks:** Hexadecimal format, groups separated by colons or hyphens, identifying the two parts (manufacturer ID and device ID).

---

### 2(b)(i) [4 marks] — Benefits of wired connections (applied to airport scenario)

**Question:** Describe two benefits to the airport of using wired connections in their network.

**Examiner commentary:** Candidates were often able to identify benefits of wired connections but did not include application to the airport. For example, identifying that data was more secure but then repeating this same point by saying data is less likely to be intercepted. To gain the extra marks candidates needed to consider why each point was important in the airport, for example security is important due to the sensitive or private data that is being transmitted around the airport, or the high risk data that could potentially interfere with flights. The most common benefits included the faster transmission speed and the increased security.

**Key examiner point:** Generic benefits without application to the scenario do not gain full marks. Candidates must link their point to the airport context (e.g. sensitive passenger data, flight safety data).

**Common errors:** Identifying a benefit and then restating it in different words as if it were a second point (e.g. "more secure" then "less likely to be intercepted" — this is the same point).

---

### 2(b)(ii) [3 marks] — Reasons for also allowing wireless (airport scenario)

**Question:** Explain the reasons why the airport should also allow the network to be accessed using a wireless connection.

**Examiner commentary:** Some candidates inaccurately took this as instead of wired and explained why wireless should be used instead, for example because they won't need any cables in the airport. A common response was that wireless was cheaper than wired, when there was already a wired connection so adding a wireless connection as well would be an extra cost instead of saving money. Common responses included the ability to move around and stay connected, as well as the larger number of devices that could connect. Some candidates identified that devices may not have ports that allow for a physical wired connection. The stronger responses included direct application to the airport, for example identifying the need for staff to respond to problems whilst in different areas of the airport such as tracking luggage or communicating problems.

**Key examiner point:** The question says "also allow" — this means in addition to wired, not instead of. Candidates who argued wireless is cheaper missed this nuance.

**Common errors:**
- Treating wireless as a replacement for wired rather than an addition
- Claiming wireless is cheaper (it is an additional cost in this scenario)

---

### 2(c)(i) [3 marks] — Star topology diagram

**Question:** Draw a diagram to show how five computers, a switch and two printers are connected in a star topology.

**Examiner commentary:** Many candidates were able to draw a diagram that included the five computers, the switch and the two printers. Some candidates did not label these items, instead drawing eight boxes without identifying which device each one represented. Candidates often joined these devices to the switch, with printers occasionally being connected to other computers that were then connected to the switch. Some candidates did not identify the central device, or incorrectly included an extra central device such as a router or a server. Some candidates then included extra connections that created a mesh network instead of a star topology.

**Common errors:**
- Not labelling devices
- Connecting printers to computers rather than directly to the switch
- Including extra central devices (router, server)
- Adding extra connections creating a mesh instead of star

---

### 2(c)(ii) [2 marks] — Star vs mesh topology

**Question:** Give one benefit and one drawback of using a star topology instead of a mesh topology.

**Examiner commentary:** Candidates were often able to give an appropriate benefit, most commonly that it was easier to add a new computer to the network. Candidates also commonly identified the drawback that the network is dependent on the central device.

---

### 2(c)(iii) [3 marks] — Role of the switch

**Question:** Describe the role of the switch in the star topology.

**Examiner commentary:** Candidates commonly identified that the data from each computer in the network is sent directly to the switch, as well as this data then being sent to the destination. Some candidates confused a switch with a hub and identified that the data was sent to all devices connected to it. Some of the stronger responses identified how the switch records the MAC addresses of devices connected to it and used these to identify which device the data needed to be transmitted to.

**Misconception:** A common misconception was that a switch performed the same role as a server, with candidates incorrectly identifying that the switch stored the data for devices in the network and that the switch provided services to the connected devices.

**Common errors:**
- Confusing switch with hub (sending data to all devices instead of specific destination)
- Confusing switch with server (storing data, providing services)

---

## Question 3 — Systems Software

### 3(a) [4 marks] — Operating system functions

**Question:** Complete a table of operating system functions and their tasks (given tasks: "Moves data from secondary storage to RAM" and "Allows the user to create, name and delete folders"; given functions: "Peripheral management" and "User interface").

**Examiner commentary:** Candidates were often able to identify the function of memory management and file management for the given tasks. Few candidates were able to identify a task performed by peripheral management. Candidates often rephrased "peripheral management" — for example stating that it managed the peripherals or managed the hardware without identifying what this involved. The stronger responses identified the role of device drivers to allow for communication between the computer and the peripherals. Candidates often gave a suitable task for the user interface, most commonly that it allowed the user to communicate with the computer or hardware.

**Key examiner point:** Simply rephrasing "peripheral management" as "manages peripherals" does not earn marks. Candidates need to describe a specific task (e.g. installing/using device drivers to communicate with peripherals).

---

### 3(b) [6 marks] — Utility software (fill in the blanks)

**Question:** Complete descriptions of encryption and defragmentation utility software using words from a provided list.

**Examiner commentary:** Candidates were often able to accurately identify some of the missing words. The spaces for encryption were more often accurate, with a common error being the use of a "lock" to change the data instead of a "key". Candidates often identified defragmentation accurately but the remaining spaces were more often inaccurate with "access" or "separate" often given in the next space.

**Common errors:**
- Using "lock" instead of "key" for encryption
- Placing "access" or "separate" in incorrect positions in the defragmentation description

---

## Question 4* [8 marks] — Extended response: Open source vs proprietary software

**Question:** A programmer has developed a computer game. Discuss the features, benefits and drawbacks of open source and proprietary licences, and make a recommendation. Must include: features of each licence, legal and ethical issues, benefits and drawbacks.

**Examiner commentary:** Candidates were often able to identify the features of each licence, for example if the source code was provided. Candidates often included benefits and drawbacks, for example being able to edit the program to tailor it to their needs, the potential of misuse of the program code. Candidates often covered legal and ethical issues within their benefits and drawbacks without explicitly identifying them. Fewer candidates included a recommendation for the programmer. Candidates described each in turn without identifying which one should be used. Some candidates suggested that both were suitable and it was the programmer's decision, but the question asked for a recommendation. The stronger responses discussed each licence in turn and then in the final paragraph started with a clear recommendation and justified the reasons for this by providing a summary of the points they had discussed in detail previously.

**Key examiner points:**
- The question requires a recommendation — saying "it depends on the programmer" does not satisfy this requirement
- Stronger responses structure: discuss each licence in turn, then give a clear recommendation with justified reasoning in a final paragraph
- Legal and ethical issues should be explicitly identified, not just implied within benefits/drawbacks
- Extended responses can be paragraphs, key points, or a table — but must cover all three bullet points for both licence types

---

## Question 5 — Data Representation and Storage

### 5(a)(i) [1 mark] — Sound sampling definition

**Question:** Tick one box to identify the correct description of sound sampling.

**Examiner commentary:** Some candidates were able to correctly identify that it was the amplitude that is measured at set intervals. A common error was that the frequency of the wave is measured — the frequency is a technical sound term that relates to the pitch of the wave, or the number of times the wave changes.

**Common errors:** Selecting "frequency" instead of "amplitude" — confusing the technical audio term "frequency" (pitch) with the concept of sampling rate/intervals.

---

### 5(a)(ii) [2 marks] — Effect of changing bit depth

**Question:** Explain how changing the bit depth will affect the sound file.

**Examiner commentary:** This question was answered well by many candidates who were most commonly able to identify that the file size would change. Many candidates gave this through an example that when the bit depth increases the file size also increases. Candidates also often identified that the quality of the sound would increase, or that the sound would become more accurate when compared to the sound being recorded. Some candidates incorrectly identified that the bit depth would result in more samples being taken per second.

**Misconception:** Bit depth does NOT affect the number of samples taken per second — that is the sample rate. Bit depth affects the range of values each sample can take (precision/quality).

---

### 5(b)(i) [4 marks] — Magnetic vs solid state storage (applied to musician scenario)

**Question:** Identify whether a musician should buy a magnetic or solid state secondary storage device. Justify your choice.

**Examiner commentary:** Either choice was appropriate and candidates were given marks for explaining why they had made the choice they did. There was no common choice with both often being selected. Choices were often suitably justified. Common points included the amount of data that could be stored with some candidates also linking this to the need for sound files to have a high capacity. Candidates often identified that solid state has a faster access speed than magnetic, although some responses just stated that it was faster without identifying what it was faster at. When justifying solid state, candidates often identified the robustness of the device and linked this to the musician possibly needing to move the device. Magnetic justifications often identified that although they had slower access speed than solid state this would still be sufficient. They also identified that it does have moving parts, but if the device is not being moved then the durability of solid state is also not required.

**Misconception:** A misconception is that solid state devices have more longevity than magnetic, that they have an unlimited life span and will outlast magnetic.

**Key examiner point:** Simply saying something is "faster" without specifying what is faster (access speed, transfer speed) is too vague.

---

### 5(b)(ii) [1 mark] — Another type of secondary storage

**Question:** Identify one other type of secondary storage.

**Examiner commentary:** Some candidates found this question challenging and were not able to give a different type of secondary storage, often repeating magnetic or solid state from the question. Candidates quite often did not provide a response to this question.

**Common errors:** Repeating "magnetic" or "solid state" from the question instead of giving optical storage.

---

### 5(b)(iii) [1 mark] — Smallest storage capacity

**Question:** Tick one box to identify the smallest secondary storage capacity (options: 2.1 GB, 300 MB, 200 000 KB, 0.0021 TB).

**Examiner commentary:** Some candidates were able to correctly identify the smallest capacity of 200 000 KB. 300 MB was often inaccurately selected.

**Common errors:** Selecting 300 MB instead of 200 000 KB — candidates need to convert all values to the same unit to compare accurately.

---

### 5(b)(iv) [2 marks] — Storage calculation

**Question:** Calculate the storage space in GB for 1000 recordings each averaging 3 MB. Show working.

**Examiner commentary:** Candidates were often able to gain a mark for partial working, for example by multiplying 3 and 1000 even if other parts of the working then performed incorrect calculations.

**Key examiner point:** Partial working marks are available — showing 3 × 1000 = 3000 MB earns credit even if the conversion to GB is then incorrect.

---

## Question 6 — Systems Architecture

### 6(a) [2 marks] — Fetch-execute cycle

**Question:** Describe what happens during the fetch-execute cycle.

**Examiner commentary:** Candidates often correctly identified that data is fetched from memory, or from RAM, and are then processed. Some candidates gave a more technical description including the role of the registers in this process. The stronger responses included clear references to data or instructions being processed. Some candidates inaccurately identified that information was processed, or that programs were fetched from memory.

**Key examiner point:** Use precise language — "data/instructions" are fetched, not "information" or "programs". Stronger responses reference registers (PC, MAR, MDR, CIR).

---

### 6(b) [4 marks] — CPU registers in the fetch-execute cycle

**Question:** Complete a table naming two registers used in the fetch-execute cycle and their purposes.

**Examiner commentary:** Candidates were often able to identify one or two registers that are used in the fetch-execute cycle. Fewer candidates were able to give a purpose in the fetch-execute cycle. Some candidates identified that the registers were involved in the fetching or transmission of data, for example that the MAR transmits the address to RAM.

**Misconception:** A common misconception is that the program counter keeps track of how many programs have run or counts the instructions that are being processed. The program counter holds the address of the next instruction to be fetched.

---

### 6(c) [3 marks] — CPU performance characteristics

**Question:** Give three characteristics of a CPU that can affect its performance.

**Examiner commentary:** Candidates were often able to identify at least one characteristic, most commonly the clock speed and number of cores. Some responses were not precise enough as to the characteristics, for example stating "clock" or "core" without reference to the speed of the clock, or the number of cores, which were too ambiguous.

**Key examiner point:** Precision matters — "clock speed" not just "clock"; "number of cores" not just "cores"; "cache size" not just "cache". Ambiguous single-word answers may not earn marks.

---

## Question 7 — Embedded Systems and Memory

### 7(a) [3 marks] — Why the "Follow Me" system is an embedded system

**Question:** Explain the reasons why the "Follow Me" cruise control system is an example of an embedded system.

**Examiner commentary:** Candidates were often able to identify the key features of embedded systems that were relevant to this scenario. The most common point being that the system has a single purpose. Some candidates also identified that the system is built within a larger system, being the car. Fewer candidates were able to provide a third point. Those that did most commonly identified the dedicated hardware or gave an example such as the sensors are only providing data for this system.

**What earned marks:** Single/dedicated purpose, built within a larger system (the car), dedicated hardware/sensors.

---

### 7(b)(i) [2 marks] — Items stored in ROM

**Question:** State two items that will be stored in the ROM for the "Follow Me" system.

**Examiner commentary:** Many candidates were able to identify that ROM stores the start-up instructions or gave an example of these instructions. Some candidates were also able to identify that an embedded system runs firmware, or gave a description of the program for this system being stored in the ROM.

**What earned marks:** Start-up/boot instructions, firmware, the program/instructions for the Follow Me system.

---

### 7(b)(ii) [3 marks] — Data stored in RAM

**Question:** State three items of data that will be stored in the RAM for the "Follow Me" system.

**Examiner commentary:** The most common responses related to the speed of the car and the distance between the cars. Some candidates identified that the speed of the car in front was stored as well as the current speed of that car. Some candidates identified other data that could be stored in the RAM, for example whether the driver has control, if the system is currently active, as well as data that would be needed to identify which car is being followed.

**What earned marks:** Current speed, distance to car in front, speed of car in front, system active status, driver control status, sensor data.

---

### 7(b)(iii) [2 marks] — Why virtual memory is not needed

**Question:** Explain why the "Follow Me" system does not need virtual memory.

**Examiner commentary:** Many candidates were able to identify that virtual memory is used when a system is short of RAM, and were then able to apply this to the given system — i.e. that the current system will not run out of RAM. Some candidates expanded this by also identifying that very few data items would be stored in RAM. Some of the stronger responses included an acknowledgement that the embedded system is unlikely to have secondary storage and therefore cannot create virtual memory.

**What strong answers included:**
- Virtual memory is used when RAM is full — this system stores very little data so RAM won't fill up
- The embedded system is unlikely to have secondary storage, so virtual memory cannot be created (stronger point)
