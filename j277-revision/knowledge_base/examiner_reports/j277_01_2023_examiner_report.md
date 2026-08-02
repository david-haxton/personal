# J277/01 Computer Systems — 2023 Examiner Report

## Paper 1 Series Overview

This is the second year that the new J277 specification has been assessed. Component 1 focuses on theoretical concepts of Computer Systems including systems architecture, memory and storage, computer networks, connections and protocols, network security, systems software, and ethical, legal, cultural and environmental concerns.

**Candidates who did well generally:**
- Provided expansions on their answers to explain why their answer met the criteria
- Checked their mathematical answers to binary questions, for example by checking that their binary addition gave the correct response
- Considered both the positive and negative sides of the use of AI in CCTV, giving a balanced response that covered perspectives from different groups of people the technology would impact

**Candidates who did less well generally:**
- Gave single word responses, for example "faster" or "cheaper" without identifying what was faster, what it was faster at, what was cheaper
- Answered the quality of extended response question from one side, for example entirely negatively, or did not consider the use of AI and focused purely on CCTV in general
- Gave choices but did not justify them in context, for example why lossless compression was most appropriate in that context, instead describing how lossless compression is performed

---

## Question 1 — Data Representation

### 1(a) [1 mark] — True statement about binary

**Question:** Tick one box to identify the true statement about binary (options about binary digits, left-most bit, switches, smallest whole number in 8 bits).

**Examiner commentary:** Many responses identified that the third statement was true (binary is used because computers are made of switches that can only be on or off). Statement 1 was incorrect because binary digits cannot include the value 2. Statement 2 was incorrect because the left-most bit is the largest value. Statement 4 was most commonly given as an incorrect choice — the smallest whole number that can be stored in 8 bits is the number 0, not the number 1.

**Common errors:** Selecting statement 4 (smallest whole number is 1 instead of 0).

---

### 1(b) [4 marks] — Number base conversions

**Question:** Complete a table converting between denary, 8-bit binary and hexadecimal (given values: 00000111/7, 49/31, 01100110/66, 244/11110100).

**Examiner commentary:** Many responses accurately converted the 8-bit binary to denary. The binary conversion was often correctly converted. However, some candidates did not include the required 0s at the start to make the answer an 8-bit binary number as required. The conversion of the third binary number to denary was more challenging. A range of responses were often seen including 114, and conversion to hexadecimal. The final conversion to hexadecimal was often given inaccurately, for example E4 or F2 being given instead.

**Common errors:**
- Not padding binary answers to 8 bits (e.g. writing 110001 instead of 00110001)
- Incorrect denary conversion of 01100110 (common wrong answer: 114)
- Incorrect hexadecimal conversion of 244 (common wrong answers: E4, F2)

---

### 1(c) [1 mark] — Largest file size

**Question:** Tick one box to identify the largest file size (options: 2 000 000 bytes, 2300 KB, 200 MB, 0.1 GB).

**Examiner commentary:** Many candidates identified 200 MB as the correct response. 2300 KB was commonly given as an incorrect response.

**Common errors:** Selecting 2300 KB — candidates need to convert all values to the same unit to compare.

---

### 1(d) [1 mark] — Equal file sizes

**Question:** Tick two boxes to identify two file sizes that are equal (options: 4 500 000 bytes, 450 KB, 4.5 MB, 0.45 GB).

**Examiner commentary:** Many candidates identified the two correct answers. Correct responses often had working at the side of the answer. There was a range of incorrect answers given where different combinations were selected.

**Key examiner point:** Showing working alongside the answer helps candidates verify their conversions.

---

### 1(e) [2 marks] — Binary addition

**Question:** Complete the binary addition of two 8-bit binary numbers (01110001 + 10011110), showing working.

**Examiner commentary:** Some responses converted each binary number to denary, added these, and then converted them back to binary. This allowed them to access the final answer mark, but not the mark for showing their working. The mark for showing working out required candidates to show how the data was carried. Some responses correctly identified the inclusion of an overflow. The overflow was not required for the mark this time but is good practice.

**Key examiner point:** Converting to denary and back does NOT gain the working marks — candidates must show binary addition with carries. Incorrect answers must be clearly crossed out; overwriting a 1 with a 0 (or vice versa) makes it impossible to identify the intended answer.

---

### 1(f) [2 marks] — Identify binary shift

**Question:** Identify the binary shift applied to 10110000 to get 10000000.

**Examiner commentary:** This question was often answered well. For full marks, candidates needed to accurately identify that it was a left 3-place shift. Some responses only gave the direction (i.e. left) and did not note the number of marks (2) that can identify the level of response required.

**Key examiner point:** Both the direction AND number of places are needed for full marks. Use the mark allocation as a guide — 2 marks means two pieces of information are needed.

---

## Question 2 — Networks and Protocols

### 2(a)(i) [4 marks] — Protocols for tasks

**Question:** Complete a table identifying the most appropriate protocol for each task (requesting a webpage, accessing a bank account, downloading a text document, checking emails).

**Examiner commentary:** Many candidates demonstrated an understanding of common protocols. The most common correct responses were giving HTTP and HTTPS as protocols for the first two tasks. Responses to the last two tasks were more commonly inaccurate. A range of protocols were given including SMTP for email.

**Common errors:** Incorrect protocols for file download (FTP) and email (IMAP/POP).

---

### 2(a)(ii) [2 marks] — Reasons for protocol layers

**Question:** Give two reasons why protocols have layers.

**Examiner commentary:** Candidates were often able to show an understanding of layers but could not say why layers are used. The most common responses referred to the need for independence between layers, and that it provides the ability to change one layer without having to change or impact on any other layers.

---

### 2(b)(i) [1 mark] — Characteristic of a LAN

**Question:** Give one other characteristic of a LAN (given: set up over a small geographical area).

**Examiner commentary:** Candidates often gave a benefit of a LAN instead of a characteristic. This was often in comparison to a WAN. Examples included that it is cheaper, or that you can share devices and transfer data. Some responses identified the use of owner-owned hardware, or that third-party hardware was not required.

**Key examiner point:** A characteristic describes what a LAN is, not what it can do. "Cheaper than a WAN" is a benefit, not a characteristic. Acceptable characteristics include: uses own hardware/infrastructure, does not require third-party connections.

---

### 2(b)(ii) [4 marks] — Benefits of including wireless connections

**Question:** Describe the benefits of the student changing their home LAN to include wireless connections.

**Examiner commentary:** Candidates were often able to explain the benefits of including wireless connections. Common answers included the ability to be mobile and move around the home and allowing a wider range of devices to connect to the network. Some candidates extended their answers by explaining or justifying the wider range of devices, for example by stating mobile phones do not have wired ports. Some responses answered the question as though it was excluding wired connections altogether and that the wires were being replaced; this did not answer the question asked which was the benefits of including wireless — as well as wired.

**Key examiner point:** The question says "include" wireless — meaning in addition to wired, not replacing it. Answers that treat wireless as a replacement miss the question.

---

### 2(b)(iii) [2 marks] — Drawbacks of including wireless

**Question:** State two drawbacks of changing their home LAN to include wireless connections.

**Examiner commentary:** Candidates often demonstrated a good understanding of the drawbacks of wireless connections. Common responses included lower bandwidth and possible interference from other devices and/or objects. Some candidates stated that wireless connections could be slower but did not give enough information to explain what was slower.

**Key examiner point:** Saying wireless is "not as fast" or "slower" without specifying what is slower does not earn marks. Candidates must refer to the transmission speed, data transfer rate, or similar specific term. This is a recurring issue across both the 2023 and 2024 papers — precision of language matters.

---

## Question 3 — Data Representation (Characters and Images)

### 3(a) [5 marks] — Character sets (fill in the blanks)

**Question:** Complete a description of how computers represent characters in binary, using given terms. Includes working out the ASCII code for 'L' given 'F' = 70.

**Examiner commentary:** Many responses accurately identified that a character set stores all the characters. Some candidates identified each character as being given an identical code or a repeated code — this is incorrect. The code for L was often given accurately. The number of bits for each character had a range of responses given, commonly 256 bits for each character. The specification for J277 states that in the exam ASCII will be described as having 8 bits to avoid confusion between ASCII and extended-ASCII, which are not differentiated in the specification.

**Common errors:**
- Using "identical" or "repeated" instead of "unique"/"different" for binary codes
- Giving 256 bits per character instead of 8 bits

---

### 3(b)(i) [1 mark] — Definition of metadata

**Question:** State what is meant by metadata in an image file.

**Examiner commentary:** Many responses correctly defined metadata as the data about the image, or the data about the file. Some candidates used "information" (e.g. the information about the file), which was not precise enough — but they often carried on with an example that supported their statement and demonstrated their understanding.

**Misconception:** A common misconception was that metadata identifies the colour of each pixel in the image. Metadata describes properties of the file (dimensions, colour depth, file size), not the pixel data itself.

---

### 3(b)(ii) [2 marks] — Binary data to image

**Question:** Given binary data and a colour table, write the colour name in each pixel of a 3×4 grid.

**Examiner commentary:** This was completed accurately by many candidates who were able to match the codes and colours. The instructions stated that the image starts in the top left, but some candidates started in the bottom right instead. Some responses did not use the colours provided in the question and created their own colour scheme, commonly just using black and white.

**Common errors:** Starting from the bottom right instead of the top left; ignoring the provided colour table.

---

### 3(b)(iii) [1 mark] — Maximum colours in 4-bit depth

**Question:** State the maximum number of different colours that can be represented in 4 bits.

**Examiner commentary:** A common error was giving four colours, or in some cases only one or two colours. The correct answer is 16 (2⁴).

---

### 3(b)(iv) [2 marks] — Effect of increasing colour depth

**Question:** State two effects of increasing the colour depth to 2 bytes.

**Examiner commentary:** Candidates commonly identified that the file size will increase with an increase in colour depth. Some responses also identified that this increase would allow the image to use more colours.

**Misconception:** A common misconception is that colour depth increases the resolution of the image. Resolution refers to the number of pixels, not the number of bits per pixel. Increasing colour depth increases the range of colours available, not the resolution.

---

### 3(c)(i) [3 marks] — Compression type for text

**Question:** Identify the most suitable type of compression for a text document. Justify your choice.

**Examiner commentary:** Lossless compression was often correctly identified as the type of compression used for text. Some candidates justified this in context either by explaining why lossless is required for text files, or by explaining why lossy was not appropriate.

---

### 3(c)(ii) [3 marks] — Compression type for images

**Question:** Identify the most suitable type of compression for an image file. Justify your choice.

**Examiner commentary:** Many candidates correctly identified that lossy is the most appropriate. Lossless could be used but is not as appropriate in this scenario. Candidates who stated lossy compression were often able to describe how the loss of data would not be noticed, and some responses also identified that the file size could be decreased more. Candidates that gave lossless were able to gain marks for the justification. However, often candidates could not justify it appropriately, for example by describing how it would be compressed instead of why this was appropriate.

**Key examiner point:** The question asks to justify the choice — explaining how compression works does not answer why it is appropriate for this scenario. Candidates must link their answer to the context.

---

## Question 4 — Network Security

### 4(a) [4 marks] — Matching threats to prevention methods

**Question:** Tick one or more boxes to identify methods that can help prevent each threat (spyware, brute-force attack, data interception, SQL injection vs anti-malware, penetration testing, encryption, firewall).

**Examiner commentary:** For each threat there was one method that was most appropriate. Some threats had other suitable responses. Some candidates did not take note of the instructions and only ticked one box for each row, commonly missing another appropriate method.

**Misconception:** A common misconception was that a firewall and penetration testing could stop data interception. Both of these methods would prevent access to a computer system, but if data is being transferred between computers (for example on the internet) then there will be no firewall to stop the interception. Encryption is the appropriate method for data interception.

---

### 4(b) [3 marks] — Name and describe another threat

**Question:** Name and describe one threat to a computer system not given in 4(a).

**Examiner commentary:** The most common responses were denial of service or virus. Some responses gave a keylogger which was a repeat of spyware because it is a specific type of spyware. DDoS was often described appropriately, although some responses described it as being an attack on an individual's device instead of a server. Virus was also often described appropriately with the possible effects of deleting or corrupting files. Some responses described how to prevent the threat instead of describing the threat itself.

**Common errors:**
- Giving keylogger (a type of spyware, already listed in 4a)
- Describing DDoS as attacking an individual device rather than a server
- Describing prevention methods instead of the threat itself

---

## Question 5 — Storage, Systems Software and Licensing

### 5(a)(i) [2 marks] — Why both primary and secondary storage are needed

**Question:** Explain why a computer needs both primary and secondary storage.

**Examiner commentary:** Some candidates found this question challenging and often gave examples of each type of storage instead of answering why both are required. Some candidates were able to accurately describe the purpose of primary storage as storing currently running data and software.

**Misconception:** A common misconception was that secondary storage is used when primary storage is full, or that it is only used as a backup. Secondary storage is needed because primary storage (RAM) is volatile — data is lost when power is removed.

---

### 5(a)(ii) [2 marks] — Secondary storage device and example data

**Question:** Give one example of a secondary storage device and an example of data stored on it.

**Examiner commentary:** Some responses identified a type of storage media (for example magnetic) instead of identifying a device (for example hard drive). Some responses gave RAM or ROM as a secondary storage device — these are incorrect. The example data varied but many responses were able to identify the storage of files, images or software.

**Key examiner point:** "Magnetic" is a type of storage, not a device. Acceptable devices include: hard disk drive, SSD, USB flash drive, CD/DVD/Blu-ray. RAM and ROM are primary storage.

---

### 5(a)(iii) [4 marks] — Virtual memory true/false statements

**Question:** Identify true/false statements about virtual memory and rewrite false statements to make them true.

**Examiner commentary:** Candidates commonly identified the third statement ("VM is needed when RAM is full, or nearly full") as being true. The first statement was often correctly altered to identify that secondary storage was used. The second statement was sometimes changed correctly to RAM, but at other times was changed to secondary storage. The final statement was often changed to "primary storage," which was not enough because primary storage would include ROM and cache, therefore not being precise enough to describe how VM works.

**Key examiner point:** Precision matters — "primary storage" is too broad when discussing virtual memory. The correct term is "RAM" specifically, not primary storage generally.

---

### 5(b) [1 mark] — Need for utility software

**Question:** State the need for utility software in a computer.

**Examiner commentary:** Some candidates gave an example of utility software and described the purpose of that software instead of utility software in general. For example, a candidate gave defragmentation or file management as the need.

**Key examiner point:** The question asks about the need for utility software in general (to maintain/optimise the computer system), not the purpose of a specific utility.

---

### 5(c)(i) [3 marks] — Identify the client computer

**Question:** The artist uploads images to a website. Identify the client computer and justify your choice.

**Examiner commentary:** Many responses identified the artist's computer as being the one that is acting as a client. Fewer responses were able to justify this — for example they described a different scenario, such as downloading the images to view the website, instead of the given scenario of the client uploading the files.

**Key examiner point:** The justification must relate to the scenario described in the question (uploading files to a server), not a generic description of client-server.

---

### 5(c)(ii) [3 marks] — Identify the server computer

**Question:** Identify the server computer and justify your choice.

**Examiner commentary:** Fewer candidates were able to accurately identify the server in this scenario. Many candidates identified the website as a server — a website is not a computer. Some candidates who identified the webserver were also able to justify their choice by identifying the actions it was performing in the scenario.

**Key examiner point:** A website is not a server — the web server (a physical or virtual computer) is the server. Candidates must distinguish between the service (website) and the hardware (server).

---

### 5(d)(i) [4 marks] — Benefits to developer of proprietary software

**Question:** Describe two benefits to the artist and programmer of releasing the software as proprietary.

**Examiner commentary:** A common error was describing the benefits to the users, for example they know the software has not been tampered with and that there is lots of support. The most common correct responses included the ability to earn money from selling the software and retaining control due to no-one else being able to access the source code.

**Key examiner point:** The question asks for benefits to the developer, not to users. Read the question carefully.

---

### 5(d)(ii) [2 marks] — Benefits to users of open source software

**Question:** Describe one benefit to the users of releasing the software as open source.

**Examiner commentary:** Many candidates were able to accurately identify that the source code comes with the software, and this allows the user to edit it to meet their needs.

---

## Question 6* [8 marks] — Extended response: AI facial recognition in CCTV

**Question:** A shopping centre's CCTV is being upgraded to include facial recognition. Discuss the positive and negative impacts including ethical issues, privacy issues, and legal issues.

**Examiner commentary:** Some responses gave strongly negative arguments with little, if any, consideration for the positive impacts. Some candidates also chose to focus on the introduction of CCTV cameras, where the question states there are already CCTV cameras and the discussion is about the upgrade to facial recognition. The more successful responses considered the ethical, privacy and legal issues one at a time and identified the positive and negative impacts (where applicable) for each of these three sections. These responses were usually well structured and had a balanced discussion before leading to justified conclusions. Some successful responses included bullet points and table structures to help the candidates structure their response. Some of the less successful responses focused on people not wanting to be watched by CCTV cameras, or that people would misuse the CCTV cameras — the CCTV cameras were already in existence and therefore this was irrelevant to the context of the question. More successful responses considered the storage of the tracked videos and how this could lead to data privacy issues, and discussed how shops could use the stored data to analyse customer movement patterns.

**Key examiner points:**
- The question is about the upgrade to facial recognition, NOT about CCTV in general — CCTV is already present
- Responses must be balanced — covering both positive and negative impacts
- Structure the response around the three bullet points (ethical, privacy, legal) for clarity
- A justified conclusion strengthens the response
- Bullet points and tables are acceptable formats for extended responses

---

## Question 7 [3 marks] — Embedded systems in a car

**Question:** Identify one other embedded system in a car (given: parking sensors) and explain why it is an embedded system.

**Examiner commentary:** There were a range of possible systems, the most common being GPS or satellite navigation systems. Other common responses included automated lights, automated wipers, and parking sensors. The most common explanation was that the system has a single (or limited) purpose, but few candidates expanded beyond this. Some candidates repeated that it was built into the car but this was provided in the question. Some candidates provided examples of embedded systems such as a washing machine, a microwave and a fridge/freezer — this was not appropriate to the context of the question.

**Common errors:**
- Repeating "built into the car" which was already stated in the question
- Giving examples of embedded systems outside cars (washing machines, microwaves) — must be in context
- Only stating "single purpose" without further expansion (e.g. dedicated hardware, no general-purpose OS)
