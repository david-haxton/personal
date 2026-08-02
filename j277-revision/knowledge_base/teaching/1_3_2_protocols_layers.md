# Unit 1.3.2: Wired and Wireless Networks, Protocols and Layers
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

### 1. Modes of Connection

**Students must know:**
- **Wired connections** use physical cables (e.g. **Ethernet**) to transmit data between devices
- **Wireless connections** use radio waves to transmit data without physical cables (e.g. **Wi-Fi**, **Bluetooth**)
- Each connection type has distinct benefits and drawbacks that make them suitable for different scenarios

**Key distinction:** Wired connections offer faster, more reliable data transmission but limit device mobility; wireless connections allow movement and easier device addition but can be slower and less secure.

**Marking language:**
- Accept: "Ethernet is a wired connection standard" / "Wi-Fi uses radio waves to transmit data wirelessly"
- Accept: Comparative statements like "wired is faster than wireless" / "wireless allows devices to move around"
- Do not accept: Vague statements like "wired is better" without explaining why or in what context
- Do not accept: "Wireless is always slower" (depends on technology generation and implementation)

**Not required:** Understanding how Ethernet, Wi-Fi and Bluetooth protocols work at a technical level

---

### 2. Encryption

**Students must know:**
- **Encryption** is the process of encoding data so it cannot be understood if intercepted during transmission
- Encryption secures data across network connections by making intercepted data meaningless without the decryption key
- Encrypted data can still be intercepted but appears as scrambled, unreadable information to unauthorised users

**CRITICAL MISCONCEPTION:** Encryption does NOT prevent data being intercepted - it makes intercepted data meaningless/impossible to understand

**Marking language:**
- Accept: "Makes data meaningless if intercepted" / "Makes data impossible to understand without the key"
- Accept: "Protects sensitive/personal data from being stolen or misused"
- Do not accept: "Stops data being intercepted" / "Prevents data being read" (too vague - data can be read but will be meaningless)
- Do not accept: "Keeps data safe" without explaining how

**Not required:** Specific encryption algorithms or technical implementation details

---

### 3. IP Addressing and MAC Addressing

**Students must know:**
- **IP address** identifies a device on a network and is used to route data across networks including the internet
- **IPv4 address** format: four groups of numbers (0-255) separated by full stops, e.g. 192.168.1.1
- **IPv6 address** format: eight groups of hexadecimal digits separated by colons, e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- **MAC address** is a unique hardware identifier permanently assigned to a device's network interface card (NIC)
- **MAC address** format: typically six pairs of hexadecimal digits separated by colons or hyphens, e.g. 00:1A:2B:3C:4D:5E
- MAC addresses are used for communication within a local network (LAN)

**Marking language - IPv4:**
- Accept: Any address with four numbers between 0-255 separated by full stops (e.g. 192.168.0.1, 10.0.0.255)
- Do not accept: Numbers greater than 255 (e.g. 258.0.0.3)
- Do not accept: More or fewer than four groups (e.g. 56.1.2.66.1 has five groups)
- Do not accept: Missing a digit in any group (e.g. 192.154.21. - incomplete)

**Marking language - IPv6:**
- Accept: Eight groups of hexadecimal digits separated by colons
- Do not accept: Six groups of numbers (common error)
- Do not accept: Groups separated by full stops instead of colons (common error)

**Marking language - MAC address:**
- Accept: "Written in hexadecimal" / "Usually six pairs/groups"
- Accept: "Separated by colons or hyphens" / "Has two parts - manufacturer ID and device ID"
- Do not accept: Statements that don't describe the format (e.g. "it's unique")

**Not required:** Differences between static/dynamic or public/private IP addresses

---

### 4. Standards

**Students must know:**
- A **standard** is an agreed set of rules/specifications for a particular technology or process
- Standards provide rules for areas of computing to ensure compatibility and interoperability
- Standards allow hardware and software from different manufacturers to work together
- Examples include Ethernet (wired network standard), Wi-Fi (wireless network standard)

**Marking language:**
- Accept: "Provides rules for how something should work" / "Allows devices from different manufacturers to communicate"
- Accept: "Ensures compatibility" / "Means devices can work together"
- Do not accept: "It's a type of connection" (confusing standard with protocol)
- Do not accept: Vague statements without explaining the benefit (e.g. "makes things better")

**Not required:** Knowledge of individual standards or their technical specifications

---

### 5. Common Protocols

**Students must know:**
- A **protocol** is a set of rules for transferring data between devices
- Different types of protocols are used for different purposes
- Basic purpose and key features of each protocol:

| Protocol | Full Name | Purpose | Key Features |
|----------|-----------|---------|--------------|
| **TCP/IP** | Transmission Control Protocol/Internet Protocol | Handles transmission and routing of data across networks | Splits data into packets, ensures reliable delivery |
| **HTTP** | Hyper Text Transfer Protocol | Requests and transfers web pages from web servers | Unsecured, used for viewing websites |
| **HTTPS** | Hyper Text Transfer Protocol Secure | Securely requests and transfers web pages | Encrypted version of HTTP, essential for sensitive data (e.g. passwords, banking) |
| **FTP** | File Transfer Protocol | Transfers/downloads files between computers and servers | Used for uploading/downloading documents, images, etc. |
| **POP** | Post Office Protocol | Retrieves/downloads emails from a mail server to a device | Downloads emails and typically deletes them from server |
| **IMAP** | Internet Message Access Protocol | Accesses and manages emails stored on a mail server | Emails stay on server, can be accessed from multiple devices |
| **SMTP** | Simple Mail Transfer Protocol | Sends/transmits emails from client to server or between servers | Used for outgoing mail |

**CRITICAL EXAM PATTERN:** Protocol matching questions appear every year - students must memorise which protocol does what

**Common errors:**
- Using SMTP for checking emails (SMTP sends, POP/IMAP receive)
- Forgetting the 'S' in HTTPS for secure transactions
- Confusing POP and IMAP (both for receiving emails but work differently)
- Using FTP for non-file transfers when HTTP/HTTPS would be acceptable

**Marking language:**
- Accept: Protocol abbreviation OR full name (e.g. "FTP" or "File Transfer Protocol")
- Accept: "HTTP or HTTPS" for downloading documents (both acceptable in 2022-2023 mark schemes)
- Accept: "IMAP or POP" for checking emails (both acceptable, though they work differently)
- Do not accept: SMTP for receiving/checking emails (only for sending)
- Do not accept: HTTP (without S) for entering passwords or sensitive data (must be HTTPS)

**Not required:** Technical details of how protocols function

---

### 6. The Concept of Layers

**Students must know:**
- Protocols are organised into **layers**, with each layer performing a specific function
- Layers work independently - one layer can be changed without affecting others
- Benefits of using layers in protocols:
  - Each layer is **independent** / layers are not reliant on other layers
  - One layer can be **changed without affecting others** / layers are self-contained
  - **Separates tasks** so they can be developed independently
  - Developers can **focus on/specialise in one layer**
  - Allows **standards** to be developed for individual layers
  - Manufacturers can develop **hardware/software to fit into one particular layer**
  - Groups together **similar protocols**

**CRITICAL EXAM WEAKNESS:** Students often understand what layers are but cannot explain WHY they are used

**Marking language:**
- Accept: Any of the benefits listed above expressed in student's own words
- Accept: "One layer can function without needing other layers"
- Accept: "Allows for compatibility between different manufacturers"
- Do not accept: "Makes it easier" or "Makes it faster" without explaining how/why
- Do not accept: Descriptions of what layers do without explaining the benefit

**Teaching example:** The specification references the 4-layer TCP/IP model (Application, Transport, Internet, Network Access layers)

**Not required:** Names and functions of each TCP/IP layer

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022-2025)

1. **"Encryption stops data being intercepted"**
   - Encryption does NOT prevent interception. Data can still be intercepted and read, but encrypted data will be meaningless/impossible to understand without the decryption key.
   - Source: June 2022 J277/01 examiner report - "A common misunderstanding was that encryption stops data being intercepted. The data can still be intercepted, but when opened it will be meaningless."

2. **"SMTP is used for checking/receiving emails"**
   - SMTP sends emails. POP or IMAP are used for receiving/checking emails in an inbox.
   - Source: June 2022, 2023 J277/01 examiner reports - "A range of protocols were given including SMTP for email" when the task was checking emails.

3. **"The user receives the IP address from the DNS"**
   - The IP address is returned to the user's computer/browser, not to the user directly. The user does not see or receive the IP address.
   - Source: June 2025 J277/01 examiner report

4. **"IPv6 addresses have six groups separated by full stops"**
   - IPv6 addresses have eight groups of hexadecimal digits separated by colons.
   - Source: June 2024 J277/01 examiner report - "Common errors including giving 6 groups of numbers and separating each group with a full stop"

5. **"IPv4 numbers can be greater than 255"**
   - Each group in an IPv4 address must be between 0-255.
   - Source: June 2024 J277/01 examiner report - "a common error was giving numbers greater than 255"

6. **"Students can explain what layers are but not why they're used"**
   - Focus on benefits (independence, ability to change one without affecting others, specialisation, compatibility).
   - Source: June 2022, 2023 J277/01 examiner reports - "Candidates were often able to show an understanding of layers but could not say why layers are used"

7. **"Forgetting the 'S' in HTTPS for secure access"**
   - HTTPS (not HTTP) must be specified for secure transactions involving passwords or sensitive data.
   - Source: June 2022 J277/01 examiner report - "some candidates did miss the required 's' to indicate it was being accessed securely"

### Common Mark Losses

- **Imprecise language about encryption:** Saying data "cannot be read" instead of "cannot be understood" or "will be meaningless"
- **Protocol confusion:** Getting send/receive email protocols mixed up (SMTP vs POP/IMAP)
- **IP address format errors:** Numbers > 255, wrong number of groups, incorrect separators
- **MAC address descriptions:** Describing what it does rather than its format (hexadecimal, separated by colons/hyphens)
- **Layers benefits:** Describing what layers are instead of explaining why they're beneficial
- **Missing context:** Not applying answers to the scenario (e.g. for wired vs wireless, explaining a generic benefit without linking to the specific situation)
- **URL/DNS confusion:** Stating URL is sent to web server instead of DNS

### Question Patterns (2022-2025)

- **Protocol identification questions** appear EVERY year 2022-2025, typically 4 marks matching 4 protocols to 4 tasks (viewing webpage, secure login, downloading file, checking email). Format: table completion. Frequency: very high (annual)
- **Layers benefits questions** appeared June 2022 and June 2023 (2 marks each), format "Give two reasons why protocols have layers". Students struggle to explain WHY not WHAT. Frequency: medium
- **IP addressing questions** - June 2024: give examples of IPv4 and IPv6 (2 marks); June 2025: identify valid/invalid IPv4 addresses in tick box format (4 marks). Format varies between examples and validity checking. Frequency: high
- **MAC address format** - June 2024: describe MAC address format (2 marks). Format: description question. Frequency: low-medium
- **Encryption** - June 2022: give two reasons for using encryption (2 marks), applied to library network scenario. Frequency: low
- **Wired vs wireless** - June 2024: why allow wireless connections in addition to wired (3 marks), applied to airport scenario requiring context. Frequency: low
- **DNS/URL conversion** - June 2022: gap-fill completing description of accessing websites (7 marks); June 2025: describe steps to convert URL to IP (4 marks). Frequency: medium
- **Standards** - June 2022: explain why Ethernet is a standard (2 marks). Frequency: low
- **Coverage gaps:** No questions on Bluetooth specifically, or TCP/IP protocol details (only mentioned in protocol lists)

---

## Quick Reference

### Protocol Matching (High-Frequency Exam Content)

**For web browsing:**
- Viewing a webpage: HTTP or HTTPS
- Secure login (username/password): HTTPS only
- Downloading a document: FTP, HTTP, or HTTPS all acceptable

**For email:**
- Sending an email: SMTP
- Checking emails/inbox: POP or IMAP
- Note: Never SMTP for receiving

### IP Address Quick Check

**IPv4 - MUST have:**
- Four groups only
- Each group: 0-255
- Separated by full stops (.)
- Example: 192.168.1.1 (valid)
- Invalid: 258.0.0.3 (> 255)
- Invalid: 56.1.2.66.1 (five groups)

**IPv6 - MUST have:**
- Eight groups
- Hexadecimal digits (0-9, A-F)
- Separated by colons (:)
- Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (valid)

### Key Exam Language

**For encryption questions - say this:**
- "Makes data meaningless if intercepted"
- "Makes data impossible to understand without the key"
- "Protects sensitive data from being stolen or misused"

**For encryption questions - NOT this:**
- "Stops data being intercepted" (incorrect)
- "Prevents hacking" (incorrect)
- "Keeps data safe" (too vague)

**For layers questions - say this:**
- "Each layer is independent"
- "One layer can be changed without affecting the others"
- "Allows developers to specialise in one layer"
- "Allows manufacturers to create hardware/software for a specific layer"

**For layers questions - NOT this:**
- "Makes it easier" (too vague)
- "Organises the protocol" (describes what, not why)

**For wired vs wireless comparisons:**
- Wired: "Faster/more reliable/more secure / limited mobility"
- Wireless: "Allows movement / easier to add devices / more devices can connect / some devices don't have wired ports"
- Always apply to the scenario given

### Standards Quick Points

- Standards = agreed rules/specifications
- Main benefit: allows different manufacturers' products to work together
- Ensures compatibility/interoperability
- Example: Ethernet (wired), Wi-Fi (wireless)
