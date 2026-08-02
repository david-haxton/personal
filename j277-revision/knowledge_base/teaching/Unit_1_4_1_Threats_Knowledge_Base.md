# Unit 1.4.1: Threats to Computer Systems and Networks
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

### Forms of attack: Malware

**Students must know:**
- **Malware** is malicious software designed to damage, disrupt or gain unauthorised access to a computer system
- Types of malware include **virus**, **worm**, **trojan**, **spyware**, and **ransomware**
- A **virus** is software that replicates and spreads, typically attached to a file or program; it can fill disk space, delete or corrupt data, or allow unauthorised access
- A **worm** is software that replicates across a network without needing to attach to a file; it uses up bandwidth
- A **trojan** is malware disguised as legitimate software; once installed it acts as a virus (e.g. deleting files, allowing unauthorised access)
- **Spyware** is software that monitors and records user activity (e.g. keystrokes, browsing habits) without the user's knowledge; it can be used to steal personal data
- **Ransomware** encrypts, corrupts, or locks access to data; the user cannot access their data without paying a fee or meeting demands
- A **keylogger** is a specific type of spyware that records keystrokes to capture passwords and personal data

**Marking language:**
- Accept: "Software that replicates/spreads" for virus
- Accept: "Fills disk space" // "Deletes/corrupts data" // "Allows unauthorised access" as effects of virus/malware
- Accept: "Malware disguised as legitimate software" for trojan
- Accept: "Encrypts/corrupts/locks access to data" for ransomware
- Accept: Any feasible action that the malware/virus etc. can carry out
- Do not accept: "Ransom" on its own for ransomware without reference to it being paid
- Do not accept: Keylogger as a separate threat from spyware (it is a specific type of spyware)

**Not required:** Detailed knowledge of how malware code functions at a technical level; specific real-world malware names or case studies

### Forms of attack: Social engineering

**Students must know:**
- **Social engineering** uses deception to manipulate users into giving away personal data or access credentials
- People are the **'weak point'** in security systems -- social engineering exploits human behaviour rather than technical vulnerabilities
- **Phishing** involves fake emails sent to a person, often containing a link to a fake website, to trick them into providing personal data
- **Pharming** uses software that redirects a user to a fake website; the person enters personal data believing it is a legitimate site
- **Shoulder surfing** involves watching a person entering a password or other sensitive information and then using it to access their account

**Marking language:**
- Accept: "Social engineering" as the named threat, with naming and description of phishing/pharming/shoulder surfing in the description
- Accept: "Using deception to manipulate users ... to gain personal data"
- Accept: "Fake emails sent to person" // "Click on link from fake email" for phishing
- Accept: "Software that redirects user to fake website" // "Use of a fake website" for pharming
- Accept: "Watching a person entering a password ... and using it to access an account" for shoulder surfing

**Not required:** Knowledge of specific phishing techniques beyond the general principle; knowledge of vishing (voice phishing) or smishing (SMS phishing) unless used as valid examples of social engineering

### Forms of attack: Brute-force attacks

**Students must know:**
- A **brute-force attack** is where every possible combination of characters is tried systematically until the correct password or key is found
- The purpose is to gain unauthorised access to a system, account, or encrypted data
- Longer and more complex passwords take significantly longer to crack using brute force

**Marking language:**
- Accept: "Trying every possible combination of characters/passwords"
- Accept: "Systematic trial of all possible passwords"
- Do not accept: Vague descriptions such as "guessing passwords" without reference to trying all/every combination

**Not required:** Knowledge of specific brute-force tools or software; understanding of hash tables or rainbow tables

### Forms of attack: Denial of service attacks

**Students must know:**
- A **denial of service (DoS)** attack floods a server with multiple requests simultaneously
- A **distributed denial of service (DDoS)** attack uses multiple computers to send these requests
- The server receives more requests than it can process, using all available bandwidth
- The server cannot respond to legitimate requests, crashes, denies access, or slows access to a network
- The purpose is to prevent legitimate users from accessing the service or network

**Key distinction:** A DoS/DDoS attack targets a **server**, not an individual's personal device. The effect is to prevent the server from responding to legitimate requests.

**Marking language:**
- Accept: "Multiple requests sent to a server (simultaneously)" // "Server is flooded with requests"
- Accept: "More requests than the server can process" // "Uses all of the bandwidth available"
- Accept: "Server cannot respond" // "Server crashes/denies access" // "Stops access to a network" // "Slows access to a network"
- Do not accept: Descriptions that suggest the attack targets an individual's device rather than a server

**Not required:** Knowledge of specific DoS/DDoS tools, botnets, or attack vectors beyond the general principle

### Forms of attack: Data interception and theft

**Students must know:**
- **Data interception** is the unauthorised capturing of data as it is being transmitted between devices or across a network
- Data can be intercepted during transmission over a network, including the internet
- The purpose is to steal personal, financial, or sensitive data
- Data interception occurs **in transit** -- while data is being transferred between computers

**Key distinction:** Data interception happens during **transmission**, not while data is stored. This means prevention methods that protect access to a computer system (e.g. firewalls) do not prevent data interception during transmission across the internet.

**Marking language:**
- Accept: "Unauthorised capturing/stealing of data during transmission"
- Accept: "Intercepting data as it travels across a network"

**Not required:** Detailed knowledge of packet sniffing, man-in-the-middle attacks, or specific interception techniques

### Forms of attack: The concept of SQL injection

**Students must know:**
- **SQL injection** involves entering malicious SQL code into input fields (e.g. login forms, search boxes) on a website or application
- The malicious code is executed by the database, allowing the attacker to access, modify, or delete data
- The purpose is to gain unauthorised access to data stored in a database, bypass authentication, or manipulate database records
- SQL injection exploits poorly validated input fields that do not check or sanitise user input

**Marking language:**
- Accept: "Entering malicious SQL code into input fields"
- Accept: "Code is executed by the database"
- Accept: "Gain unauthorised access to data" // "Bypass login" // "Modify/delete database records"

**Not required:** Knowledge of specific SQL commands or syntax used in injection attacks; ability to write SQL injection code

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022-2025)

1. **"A DDoS attack targets an individual's device"**
   - DDoS attacks target a server, not an individual's personal device. The effect is that the server cannot respond to legitimate requests, preventing users from accessing the service.
   - Source: June 2023 J277/01 examiner report -- "some responses described it as being an attack on an individual's device instead of a server"

2. **"A keylogger is a different threat from spyware"**
   - A keylogger is a specific type of spyware. If a question lists spyware as a given threat, naming a keylogger as a different threat is a repeat and will not gain credit.
   - Source: June 2023 J277/01 examiner report -- "Some responses gave a keylogger which was a repeat of spyware because it is a specific type of spyware"

3. **Describing how to prevent a threat instead of describing the threat itself**
   - When asked to describe a threat, students must explain what the threat is and how the attack works -- not how to stop it.
   - Source: June 2023 J277/01 examiner report -- "Some responses described how to prevent the threat instead of describing the threat itself"

4. **"A firewall or penetration testing can stop data interception"**
   - Firewalls and penetration testing prevent access to a computer system, but if data is being transferred between computers (e.g. on the internet) there is no firewall to stop the interception. Encryption is the appropriate prevention for data interception.
   - Source: June 2023 J277/01 examiner report -- explicitly flagged as a misconception

5. **Giving "ransom" on its own when describing ransomware**
   - The mark scheme requires reference to paying a fee/money to regain access to data. Simply stating "ransom" without explaining the payment demand is insufficient.
   - Source: June 2022, June 2023 J277/01 mark schemes -- "Ransomware -- MP3 cannot be awarded for 'ransom' on its own without reference to it being paid"

6. **Confusing the threat name with a vague description**
   - If no threat name is given, examiners will read the description for the name. If the threat is vague, only a matching description will be awarded. A clearly wrong threat name will not receive follow-through marks.
   - Source: June 2022, June 2023 J277/01 mark scheme guidance -- "If threat is clearly wrong do not FT"

### Common Mark Losses

- Describing prevention methods when the question asks for a description of the threat
- Naming a keylogger as a separate threat when spyware is already listed in the question
- Failing to name the threat before describing it (1 mark is typically allocated for the threat name)
- Giving vague descriptions such as "it damages the computer" without specifying how (e.g. deletes files, encrypts data, steals personal information)
- Describing DDoS as targeting a personal device rather than a server
- Writing "ransom" without explaining the demand for payment to regain access

### Question Patterns (2022-2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/01 | Q4(a) | Threat-prevention matching (spyware, brute-force, data interception, SQL injection) | 4 | Tick box grid |
| 2022 | J277/01 | Q4(b) | Name and describe one threat not in Q4(a) | 3 | Open response |
| 2023 | J277/01 | Q4(a) | Threat-prevention matching (spyware, brute-force, data interception, SQL injection) | 4 | Tick box grid |
| 2023 | J277/01 | Q4(b) | Name and describe one threat not in Q4(a) | 3 | Open response |
| 2024 | J277/01 | -- | No direct 1.4.1 question | -- | -- |
| 2025 | J277/01 | -- | No direct 1.4.1 question (cloud drawbacks in Q4(d) touched on threats tangentially) | -- | -- |

**Key observations:**
- 1.4.1 appeared as a dedicated question in 2022 and 2023 with an identical structure (Q4), but was absent from the 2024 and 2025 papers
- The 2022 and 2023 papers used the same tick-box matching format for threat-prevention pairing, followed by an open response asking students to name and describe a threat not already listed
- Typical mark allocation: 4 marks for matching + 3 marks for naming/describing = 7 marks total
- The "name and describe" format awards 1 mark for the threat name and up to 2 marks for the description
- Questions frequently combine 1.4.1 (threats) and 1.4.2 (prevention) in a single question block
- The absence from 2024 and 2025 papers makes this topic statistically more likely to appear in future papers

**Coverage gap:** No past paper questions have directly tested the concept of SQL injection as a standalone question -- it has only appeared as one row in a matching grid. Brute-force attacks have similarly only appeared in matching grids. These are potential areas for standalone questions in future papers.

---

## Quick Reference

### Threats at a Glance

| Threat | How it Works | Purpose |
|--------|-------------|---------|
| Virus | Replicates/spreads, attaches to files | Delete/corrupt data, fill disk space |
| Worm | Replicates across a network | Uses up bandwidth |
| Trojan | Disguised as legitimate software | Once installed, acts as virus |
| Spyware | Monitors user activity without knowledge | Steal personal data |
| Ransomware | Encrypts/locks access to data | Demands payment to restore access |
| Phishing | Fake emails with links to fake websites | Trick user into giving personal data |
| Pharming | Redirects user to fake website | Capture personal data entered on fake site |
| Shoulder surfing | Watching someone enter a password | Use stolen credentials to access account |
| Brute-force | Tries every possible password combination | Gain unauthorised access |
| DoS/DDoS | Floods server with requests | Prevent legitimate access to service |
| Data interception | Captures data during transmission | Steal data in transit |
| SQL injection | Malicious SQL code in input fields | Access/modify/delete database data |

### Key Exam Language

**Say this:**
- "Software that replicates and spreads" (virus)
- "Malware disguised as legitimate software" (trojan)
- "Encrypts/locks access to data and demands payment" (ransomware)
- "Using deception to manipulate users to gain personal data" (social engineering)
- "Fake emails sent to trick users into providing personal data" (phishing)
- "Multiple requests flood a server simultaneously" (DDoS)
- "Malicious SQL code entered into input fields" (SQL injection)

**Not this:**
- "It damages the computer" (too vague -- specify how)
- "It hacks into the system" (too vague -- specify the method)
- "It asks for a ransom" (must reference payment to regain access to data)
- "It guesses passwords" (must reference trying every/all combinations for brute-force)
- "It attacks the user's computer" (DDoS targets a server, not an individual device)

### Threat Categories

**Malware-based threats (software):** virus, worm, trojan, spyware, ransomware
**Human-exploiting threats (social engineering):** phishing, pharming, shoulder surfing
**Access-based threats:** brute-force attack, SQL injection
**Network-based threats:** denial of service (DoS/DDoS), data interception and theft
