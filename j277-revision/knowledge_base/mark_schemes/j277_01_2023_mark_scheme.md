# J277/01 June 2023 Mark Scheme
# Source: OCR June 2023 J277/01 Computer Systems Mark Scheme
# For use by practice.py — loaded as knowledge base context for marking

---

## Q1 — Sound Sampling Cloze [6 marks]

Correct answers in order:
1. analogue
2. digital
3. Sampling
4. sample rate
5. unique
6. higher

**Guidance:**
- Award 1 mark per correct word in the correct gap
- Accept correct answers regardless of capitalisation
- Do not accept answers not from the word bank

**Examiner's Comments:**
Candidates commonly identified analogue and digital correctly. Sample rate was well known. Bit depth was commonly confused with sample rate. The final gap (higher) was often answered incorrectly with "smaller".

---

## Q1b-i — Metadata [1 mark]

**Accept:**
- Data about the data (in the file)
- Data that describes the image/file
- Information stored about the image e.g. dimensions, file size, colour depth, date created

**Do not accept:**
- Data about the image (without specifying it is data about the data/file)
- "Information about the image" without qualification
- "Info about the image" — too vague

**Guidance:** The key distinction is "data about data" or "data about the file". Simply "information about the image" is not precise enough.

---

## Q1b-iii — Maximum colours from 4-bit colour depth [1 mark]

**Accept:**
- 16

**Do not accept:**
- Any other value
- 4 (common error — confusing bits with colours)

---

## Q1b-iv — Effects of increasing colour depth to 2 bytes [2 marks]

1 mark each to max 2:
- More colours can be represented // greater range of colours // more accurate colour representation
- Larger file size // more storage space required // file size increases
- Better quality image // more realistic image
- Slower to transmit // takes longer to download/upload

**Do not accept:**
- Better resolution (resolution relates to pixels, not colour depth)
- Higher sample rate (relates to sound, not images)

---

## Q1c-i — Compression for text document [3 marks]

**Type of compression:** Lossless — 1 mark

**Justification** — 1 mark each to max 2:
- No data is lost // all original data can be recovered // exact reproduction of original
- Text files cannot lose data without becoming unreadable // losing characters would corrupt the text
- Lossless compression still reduces file size
- Need to be able to reduce the file size as much as possible without losing any data

**Do not accept:**
- Lossy for text
- "Keeps quality" without explaining what would be lost

**Examiner's Comments:**
Most candidates correctly identified lossless. Justification marks were often dropped by candidates who stated only that "no data is lost" without explaining why this matters for text.

---

## Q1c-ii — Compression for image file [3 marks]

**Type of compression:** Lossy — 1 mark

**Justification** — 1 mark each to max 2:
- Some data can be removed without a noticeable difference to the image // some loss of quality is acceptable for images
- Achieves greater reduction in file size than lossless
- The human eye cannot detect small differences in colour // slight loss of quality is imperceptible
- Student needs to reduce file size as much as possible — lossy achieves greater compression

**Do not accept:**
- Lossless for images (unless justified with acceptable reasoning about needing to preserve exact data)
- "Better quality" as a justification for lossy

---

## Q2a-i — Protocols table [4 marks]

1 mark per correct row:

| Task | Protocol |
|---|---|
| Requesting to view a news webpage | HTTP |
| Entering username/password to access bank account | HTTPS |
| Downloading a text document from a web server | FTP |
| Checking for new emails | IMAP // POP3 // POP |

**Do not accept:**
- HTTP for bank account (must be HTTPS)
- SMTP for checking emails (SMTP is for sending, not receiving)

**Examiner's Comments:**
HTTP and HTTPS were well known. FTP was less well known. IMAP/POP3 was commonly confused with SMTP.

---

## Q2a-ii — Reasons for protocol layers [2 marks]

1 mark each to max 2:
- Each layer can be developed/updated independently // changes to one layer do not affect others
- Different layers can be created by different developers/manufacturers
- Easier to troubleshoot // easier to identify which layer has a problem
- Allows different hardware/software to communicate // interoperability between different systems
- Simplifies the design of communication systems // breaks complex process into manageable parts
- Each layer only needs to communicate with layers directly above and below it

---

## Q2b-i — Characteristic of a LAN [1 mark]

**Accept:**
- Uses privately owned hardware // hardware is owned by the organisation
- Covers a small geographical area (already given — do not accept as additional)
- High speed connections // faster than WAN
- Easier to manage/maintain than WAN
- Lower cost than WAN
- Connected using cables/wireless within a building or site

**Do not accept:**
- Uses the internet
- Can connect worldwide

---

## Q2b-ii — Benefits of wireless connections [4 marks]

1 mark each to max 4:
- Devices can connect without cables // no need for physical cables
- Greater mobility // can move around while connected // can connect from different rooms
- Easier to add new devices // no need to run new cables
- Devices without ethernet ports can connect (e.g. tablets, phones)
- Cheaper installation // no need to install cables through walls
- Flexible working // can work from anywhere within range
- Easier to set up/configure for temporary users/guests

**Do not accept:**
- Faster (wireless is generally slower than wired)
- More secure (wireless is generally less secure than wired)

**Examiner's Comments:**
Mobility and no cables were common correct answers. Candidates often repeated the same point in different words. Only one mark awarded per distinct benefit.

---

## Q2b-iii — Drawbacks of wireless connections [2 marks]

1 mark each to max 2:
- Less secure // data can be intercepted more easily // susceptible to eavesdropping
- Slower speeds // lower bandwidth than wired
- Signal can be interrupted/blocked by walls and interference
- Limited range // signal weakens over distance
- Subject to interference from other wireless devices
- Less reliable connection

**Do not accept:**
- More expensive (wireless is generally cheaper to install)
- Cannot use without cables (routers still need wired connections)

---

## Q4a — Threats and prevention methods [4 marks]

1 mark per correct row:

| Threat | Anti-malware | Penetration testing | Encryption | Firewall |
|---|---|---|---|---|
| Spyware | tick | (tick) | | (tick) |
| Brute-force attack | | (tick) | | tick |
| Data interception | | | tick | |
| SQL injection | | tick | | (tick) |

**Key guidance:**
- (tick) = acceptable but not the primary answer
- Primary answers: Spyware = Anti-malware; Brute-force = Firewall; Data interception = Encryption; SQL injection = Penetration testing
- Award the mark if the primary answer is ticked. Also award if acceptable alternative is ticked.
- Do NOT award if only incorrect answers are ticked

**Critical examiner note:** A firewall and penetration testing do NOT prevent data interception. Encryption is the only correct answer for data interception. This is the most commonly missed mark in this question. Examiner reports specifically flag that candidates who tick firewall for data interception are incorrect.

---

## Q4b — Name and describe a threat [3 marks]

1 mark for naming a valid threat (not Spyware, Brute Force, Data Interception, or SQL Injection):
- Phishing // Pharming // Vishing // Smishing
- Ransomware
- Virus // Worm // Trojan // Malware (general)
- Denial of Service (DoS) // Distributed Denial of Service (DDoS)
- Social engineering (general)
- Keylogging
- Man-in-the-middle (accept as description of data interception if named differently)

2 marks for description (1 mark each to max 2):
Description must relate to the named threat. Examples:

**Phishing:** Fraudulent emails/messages that appear to be from legitimate sources // tricks users into revealing personal information // contains links to fake websites

**Ransomware:** Malware that encrypts files // demands payment to decrypt // prevents access to data

**Virus:** Attaches itself to legitimate files // replicates and spreads // can corrupt or delete data

**DoS:** Floods a server/network with requests // overwhelms the system // makes it unavailable to legitimate users

**Social engineering:** Manipulates people into revealing confidential information // exploits human trust rather than technical vulnerabilities

---

## Q5a-i — Why a computer needs both primary and secondary storage [2 marks]

1 mark each to max 2:
- Primary storage (RAM) is needed to store data/programs currently in use // RAM is needed for the CPU to access data quickly
- Secondary storage is needed to store data/programs permanently // secondary storage is non-volatile // data is retained when power is off
- RAM is volatile so data would be lost when powered off without secondary storage
- Secondary storage stores larger amounts of data than RAM // RAM capacity is limited

**Do not accept:**
- Just "RAM is faster" without explaining the need for both
- Just "hard drive stores more" without explaining why both are needed

---

## Q5a-ii — Example secondary storage device and data [2 marks]

1 mark for device + 1 mark for appropriate data:

**Accept as devices:** HDD, SSD, optical drive (CD/DVD/Blu-ray), USB flash drive, memory card

**Accept as data:** Any data that would reasonably be stored on that device:
- HDD/SSD: images, software, operating system, documents
- USB: files, images, documents for transfer
- Optical: software, video, music

**Do not accept:**
- RAM, ROM, cache as secondary storage devices
- Vague answers like "files" without any qualification

---

## Q5b — Need for utility software [1 mark]

**Accept:**
- To maintain/optimise the performance of the computer system
- To help manage/protect the computer
- Examples: to defragment the hard drive, to compress files, to scan for malware, to encrypt data, to back up data

**Do not accept:**
- "To run programs" (that is the OS)
- "To make the computer work" (too vague)

---

## Q5c-i — Identify client computer [3 marks]

1 mark for identification + 2 marks for justification:

**Client:** The artist's computer

**Justification** (1 mark each to max 2):
- The artist's computer requests/sends the images to the server
- The artist's computer initiates the connection // makes the request
- The client requests a service from the server
- The artist's computer is the one uploading/sending data

**Do not accept:**
- The website as the client
- Identification without justification

---

## Q5c-ii — Identify server computer [3 marks]

1 mark for identification + 2 marks for justification:

**Server:** The web server // the computer hosting the website

**Justification** (1 mark each to max 2):
- The web server stores and serves the website/images
- The server responds to requests from clients
- The server provides the service (hosting/displaying the images)
- The server stores the uploaded images and makes them available

---

## Q5d-i — Benefits of proprietary software to developer [4 marks]

1 mark each to max 4 (2 benefits x 2 marks each: 1 for point + 1 for development):

**Benefits:**
- Developer retains control of the source code // source code is kept private // others cannot copy or modify it — prevents competition
- Developer can charge for the software // generate revenue // profit from sales
- Developer can control who uses the software // licensing restricts use
- Legal protection // copyright is maintained // can take legal action against unauthorised copying
- Support and updates can be charged for // ongoing revenue stream
- Developer can control the quality // prevents others from releasing poor versions

**Examiner note:** 4 marks for 2 well-developed points, or 4 undeveloped points. Award judgement based on quality of explanation.

---

## Q5d-ii — Benefit of open source to users [2 marks]

1 mark for benefit + 1 mark for development:
- Free to use // no purchase cost — saves money for users
- Can view and modify the source code // can tailor the software to their needs
- Community support // many developers contribute improvements
- Transparency // users can check for security vulnerabilities in the code
- No vendor lock-in // not dependent on a single company

---

## Q6 — Facial Recognition: Ethical, Privacy and Legal Impacts [8 marks]

### Mark Band Descriptors

**Mark Band 3 — High Level (6-8 marks)**
The candidate demonstrates thorough knowledge and understanding of a wide range of considerations. Material is generally accurate and detailed. Applies knowledge directly and consistently to the context. Weighs up both sides of the discussion and includes reference to the impact on all areas with thorough recognition of influencing factors. Well-developed line of reasoning, clear and logically structured. Information is relevant and substantiated.

**Mark Band 2 — Mid Level (3-5 marks)**
Candidate demonstrates reasonable knowledge and understanding of a range of considerations. Material generally accurate but at times underdeveloped. Applies knowledge directly to the context although one or two opportunities are missed. Makes a reasonable attempt to discuss impact, most showing reasonable recognition of influencing factors. Line of reasoning presented with some structure. Information in the most part relevant and supported by some evidence.

**Mark Band 1 — Low Level (1-2 marks)**
Candidate demonstrates basic knowledge of considerations with limited understanding. Material is basic and contains some inaccuracies. Makes a limited attempt to apply knowledge to the context. Provides nothing more than an unsupported assertion. Information is basic and communicated in an unstructured way. Information supported by limited evidence and the relationship to the evidence may not be clear.

**0 marks:** No attempt to answer or response not worthy of credit.

### Indicative Content (not prescriptive or exhaustive)

**Legal issues:**
- DPA needs to be followed or company could be fined e.g. customers must be informed the system is used, data held for specified time/reasons, data kept secure
- Centre is private property so customers can choose not to enter
- Can be used to identify people committing crimes e.g. theft, used as evidence, ensure the correct people are caught

**Ethical issues:**
- Users feel safer because they know any actions are being monitored and help/action will be taken if needed
- If users have not done anything then there is no reason to be tracked/recorded so should not impact them
- Users feel unsafe because they are being watched
- Users may be unaware they are being recorded — need to be informed, give consent
- Users do not know where the videos/data about them and their movements is stored/how it is used — DPA reference

**Privacy issues:**
- Users may feel it is an invasion of privacy
- Users are in a public place and can be legally recorded by anyone anyway
- Users may feel like they are being watched all the time
- Users have not given their permission to be tracked
- Users may not know the system exists
- Data about movements/behaviour could be shared or misused

**Examiner's Comments:**
The question required a balanced discussion of positive and negative impacts. Some responses gave strongly negative arguments with little consideration of positive impacts. Some candidates focused on CCTV cameras already in place — the question is about the upgrade to facial recognition, not the CCTV itself. More successful responses considered ethical, privacy and legal issues one at a time and identified positive and negative impacts for each. Less successful responses focused on people not wanting to be watched rather than the specific impacts of facial recognition.

---

## Q7 — Embedded System in a Car [3 marks]

1 mark for example + 1 mark each to max 2 for explanation:

**Accept as examples:**
Auto lights, auto window wipers, sat nav/GPS, air conditioning/climate control, radio/entertainment system, lane assist, engine management system, auto-park, cruise control, auto-brake, dashcam

**Do not accept:** Parking sensors (given in question)

**Explanation** (1 mark each to max 2):
- Limited/specific functions // by example e.g. the system only checks the light and turns lights on/off
- Dedicated microprocessor // by example e.g. there is a microprocessor that is only checking the lights
- Hard to change function // by example e.g. the user cannot make the light system do any other role
- Built within a larger device (the car) — accept but do not award if the student just says "built into the car" as this is in the question

**Do not award:** "Built into the car/larger machine" if that is the only explanation — this is given in the question.

**Guidance:** If justification is generic features of an embedded system without applying to the example, max 1 for explanation. Allow anything that could reasonably be in a car. If the example is unclear, read the explanation for context.
