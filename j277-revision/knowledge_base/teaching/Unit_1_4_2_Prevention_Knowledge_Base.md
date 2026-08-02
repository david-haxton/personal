# Unit 1.4.2: Identifying and Preventing Vulnerabilities
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

### Common prevention methods: Penetration testing

**Students must know:**
- **Penetration testing** involves employing someone to deliberately try to hack into or attack a computer system or network
- The purpose is to identify weaknesses and vulnerabilities in the system before a malicious attacker finds them
- The results are used to improve and strengthen security measures
- Penetration testing simulates real-world attacks in a controlled and authorised way

**Key distinction:** Penetration testing identifies vulnerabilities but does not fix them directly. It is a diagnostic tool, not a prevention tool in itself -- the results must then be acted upon.

**Marking language:**
- Accept: "Employing someone to try to hack into the system" // "Simulating an attack to find weaknesses"
- Accept: "Identify vulnerabilities before a real attacker does"
- Do not accept: Penetration testing as a method to prevent data interception (it prevents access to systems, not interception of data in transit)

**Not required:** Knowledge of specific penetration testing tools, methodologies, or certifications

### Common prevention methods: Anti-malware software

**Students must know:**
- **Anti-malware software** scans a computer system for known malware (viruses, worms, trojans, spyware, etc.) and removes or quarantines any threats found
- It works by comparing files and programs against a database of known malware signatures
- Anti-malware software needs to be kept up to date so that its database includes the latest known threats
- It can run scheduled scans or provide real-time protection by monitoring files as they are opened or downloaded

**Marking language:**
- Accept: "Scans for malware and removes it" // "Detects and quarantines viruses/malware"
- Accept: "Compares files against a database of known threats"
- Accept: "Anti-virus" as equivalent to anti-malware
- Accept: "Anti-spyware" as a specific type of anti-malware
- Do not accept: Vague descriptions such as "protects the computer" without specifying how

**Not required:** Knowledge of specific anti-malware products or heuristic analysis techniques

### Common prevention methods: Firewalls

**Students must know:**
- A **firewall** monitors and controls incoming and outgoing network traffic based on a set of security rules
- It acts as a barrier between a trusted internal network and an untrusted external network (e.g. the internet)
- Firewalls can block unauthorised access to or from a network
- A firewall examines data packets and determines whether to allow or block them based on the rules

**Key distinction:** A firewall prevents unauthorised access to a computer system or network. It does NOT prevent data interception during transmission across the internet -- once data leaves the network, a firewall cannot protect it.

**Marking language:**
- Accept: "Monitors/controls incoming and outgoing traffic" // "Blocks unauthorised access"
- Accept: "Acts as a barrier between the network and the internet"
- Accept: "Examines data packets and allows/blocks based on rules"
- Do not accept: Firewall as a method to prevent data interception (this is a documented misconception)

**Not required:** Knowledge of specific firewall configurations, hardware vs software firewalls, or port management

### Common prevention methods: User access levels

**Students must know:**
- **User access levels** restrict what different users can see, access, or modify on a system or network
- Different users are given different levels of permission (e.g. read-only, read-write, administrator)
- This limits the damage that can be caused if one account is compromised, because the attacker only has access to what that user is permitted to see
- Access levels are managed by network administrators

**Marking language:**
- Accept: "Restricting what users can access/see/modify" // "Different permissions for different users"
- Accept: "Limits damage if an account is compromised"
- Accept: "Access rights" as equivalent terminology

**Not required:** Knowledge of specific access control models (e.g. role-based access control, discretionary access control)

### Common prevention methods: Passwords

**Students must know:**
- **Passwords** are used to authenticate a user's identity before granting access to a system, account, or data
- Strong passwords are long, complex, and use a mix of uppercase letters, lowercase letters, numbers, and special characters
- Passwords should be changed regularly and not reused across multiple accounts
- Weak or commonly used passwords are vulnerable to brute-force attacks

**Marking language:**
- Accept: "Used to verify/authenticate a user's identity" // "Prevent unauthorised access to an account"
- Accept: "Strong passwords use a mix of characters and are longer"
- Accept: "Limits brute-force attacks by increasing the number of possible combinations"

**Not required:** Knowledge of specific password hashing algorithms; multi-factor authentication is beyond core spec but may be accepted as valid if mentioned

### Common prevention methods: Encryption

**Students must know:**
- **Encryption** changes data using a key so that if the data is intercepted, it cannot be understood
- Encrypted data is scrambled/encoded/turned into cypher text using an algorithm and a key
- Only someone with the correct key can decrypt and read the original data
- Encryption does NOT stop data from being intercepted -- the data can still be captured and the file can still be opened, but the contents will be meaningless without the key

**Key distinction:** Encryption does not prevent interception. Encrypted data can be intercepted and the datafile can be opened. However, the data will be meaningless and not make any sense. The data is still there, but mixed up by the key and the encryption algorithm.

**Marking language:**
- Accept: "Jumble / mix-up / encode / scramble / cypher data"
- Accept: "Encrypt / decrypt using an algorithm / key"
- Accept: "Make it meaningless (if intercepted / unauthorised access)" // "It cannot be understood / used (if intercepted / unauthorised access)"
- Do not accept: "It cannot be read" or "It cannot be accessed" for the effect of encryption (data can still be read/accessed, it just cannot be understood)
- Do not accept: "Encryption stops data being intercepted" (it does not)

**Not required:** Knowledge of specific encryption algorithms (e.g. AES, RSA); understanding of symmetric vs asymmetric encryption

### Common prevention methods: Physical security

**Students must know:**
- **Physical security** involves measures to physically prevent unauthorised access to computer systems and hardware
- Examples include: locked doors, CCTV, security guards, biometric access (e.g. fingerprint scanners), security cables/locks on devices, secure server rooms
- Physical security protects against physical threats such as theft, damage, or tampering with hardware

**Marking language:**
- Accept: "Locked doors" // "CCTV" // "Security guards" // "Biometric access" // "Security cables"
- Accept: Any reasonable physical method that prevents unauthorised physical access
- Do not accept: Software-based methods (e.g. firewalls, passwords, anti-malware) when the question specifically asks for physical security

**Not required:** Knowledge of specific physical security standards or certifications

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022-2025)

1. **"A firewall can stop data interception"**
   - A firewall prevents access to a computer system, but if data is being transferred between computers (e.g. on the internet) there is no firewall to stop the interception. Encryption is the appropriate prevention for data interception.
   - Source: June 2023 J277/01 examiner report -- explicitly flagged as a misconception; repeated in June 2022 J277/01 examiner report

2. **"Penetration testing can stop data interception"**
   - Like firewalls, penetration testing prevents access to a computer system by identifying vulnerabilities. It does not protect data during transmission between computers.
   - Source: June 2023 J277/01 examiner report -- flagged alongside the firewall misconception

3. **"Encryption stops data from being intercepted"**
   - Encryption does not stop data from being intercepted and does not stop the data being read. The transmission of encrypted data can be intercepted and the datafile can be opened. However, the datafile will be meaningless and not make any sense. The data is still there, but mixed up by the key and the encryption algorithm.
   - Source: June 2025 J277/01 examiner report -- explicitly flagged as a misconception

4. **"Encryption uses a lock to change data"**
   - Encryption uses a key (not a lock). This was a common incorrect response in the 2024 gap-fill question on utility software.
   - Source: June 2024 J277/01 examiner report -- "a common error being the use of a lock to change the data instead of a key"

5. **Giving software-based methods when asked for physical security**
   - When asked specifically for physical security methods, students sometimes give software-based methods (e.g. firewalls, passwords, anti-malware) instead of physical measures (e.g. locked doors, CCTV, guards).
   - Source: June 2022 J277/01 examiner report -- "Some candidates gave software-based security methods in response to this question instead of physical"

6. **Weak descriptions of firewalls and encryption compared to anti-malware**
   - Descriptions of anti-malware, anti-spyware, and anti-virus software were often stronger than descriptions of firewalls and encryption. Students should practise describing all prevention methods with equal precision.
   - Source: June 2022 J277/01 examiner report -- "The descriptions of anti-malware, anti-spyware and anti-viruses were often stronger than those that gave firewalls and encryption"

7. **Ticking only one prevention method per threat in matching questions**
   - Some threats can be prevented by more than one method. When the question says "tick one or more boxes", students must consider all applicable methods, not just one per row.
   - Source: June 2023 J277/01 examiner report -- "Some candidates did not take note of these instructions and only ticked one box for each row, commonly missing another appropriate method"

### Common Mark Losses

- Giving software-based methods when the question asks for physical security (or vice versa)
- Stating encryption "stops" or "prevents" interception rather than making intercepted data meaningless
- Vague descriptions such as "protects the computer" without specifying the mechanism
- Only ticking one prevention method in matching grids when multiple apply
- Saying "lock" instead of "key" when describing how encryption works
- Failing to link the prevention method to the specific threat it addresses
- Describing what a threat is rather than how to prevent it (the reverse of a common 1.4.1 error)

### Question Patterns (2022-2025)

| Year | Paper | Question | Topic Focus | Marks | Format |
|------|-------|----------|-------------|-------|--------|
| 2022 | J277/01 | Q4(a) | Threat-prevention matching (anti-malware, penetration testing, encryption, firewall) | 4 | Tick box grid |
| 2022 | J277/01 | Q5(a) | Identify two physical security methods | 2 | Open response |
| 2022 | J277/01 | Q5(b) | Identify and describe two software-based security methods | 6 | Open response |
| 2023 | J277/01 | Q4(a) | Threat-prevention matching (anti-malware, penetration testing, encryption, firewall) | 4 | Tick box grid |
| 2024 | J277/01 | Q3(b) | Encryption and defragmentation gap-fill (utility software context) | 6 | Gap-fill |
| 2025 | J277/01 | Q2(b)(ii) | Describe encryption (3 marks) | 3 | Open response |
| 2025 | J277/01 | Q4(d) | Cloud drawbacks -- security/interception mentioned tangentially | 5 | Open response |
| 2025 | J277/01 | Q4(f) | DPA compliance steps -- security measures as part of data protection | 4 | Open response |

**Key observations:**
- Prevention methods appear in every paper from 2022-2025, though the format and context varies significantly
- 2022 and 2023 used identical tick-box matching grids combining 1.4.1 and 1.4.2 in one question
- 2022 also had a dedicated split question separating physical (Q5a, 2 marks) from software-based (Q5b, 6 marks) prevention methods
- 2024 and 2025 tested encryption within a utility software context (1.5.2) rather than directly within network security, but the content overlaps with 1.4.2
- Physical security has only been directly tested once (June 2022 Q5a, 2 marks)
- User access levels and passwords have not appeared as standalone questions in any paper (2022-2025) -- they have only appeared indirectly in DPA/cloud contexts
- The threat-prevention matching grid has been the dominant format for combined 1.4.1/1.4.2 assessment

**Coverage gaps:** User access levels, passwords, and physical security have very limited direct past paper coverage. These are potential areas for standalone questions in future papers.

### Threat-Prevention Matching Reference (from 2022/2023 mark schemes)

| Threat | Anti-malware | Penetration testing | Encryption | Firewall |
|--------|-------------|-------------------|------------|----------|
| Spyware | Yes | (Optional) | -- | -- |
| Brute-force attack | -- | (Optional) | -- | Yes |
| Data interception | -- | -- | Yes | -- |
| SQL injection | -- | Yes | -- | (Optional) |

Note: (Optional) means the tick can be present or not -- it is not required but is accepted.

---

## Quick Reference

### Prevention Methods at a Glance

| Method | What it Does | Which Threats it Addresses |
|--------|-------------|--------------------------|
| Penetration testing | Simulates attacks to find vulnerabilities | All (identifies weaknesses before attackers do) |
| Anti-malware software | Scans for and removes malware | Viruses, worms, trojans, spyware, ransomware |
| Firewalls | Monitors/blocks unauthorised network traffic | Unauthorised access, DoS attacks, SQL injection |
| User access levels | Restricts what users can see/modify | Limits damage from compromised accounts |
| Passwords | Authenticates user identity | Brute-force attacks, unauthorised access |
| Encryption | Scrambles data using a key | Data interception (data meaningless without key) |
| Physical security | Physically prevents access to hardware | Theft, damage, tampering |

### Key Exam Language

**Say this:**
- "Scans for malware and removes/quarantines it" (anti-malware)
- "Monitors and controls incoming and outgoing network traffic" (firewall)
- "Employing someone to try to hack into the system to find weaknesses" (penetration testing)
- "Restricts what different users can access/modify" (user access levels)
- "Authenticates/verifies a user's identity" (passwords)
- "Changes/scrambles data using a key so it cannot be understood if intercepted" (encryption)
- "Locked doors / CCTV / security guards / biometric access" (physical security)

**Not this:**
- "Protects the computer" (too vague -- specify the mechanism)
- "Encryption stops data being intercepted" (it does not -- data can still be intercepted)
- "Encryption means data cannot be read" (it can be read, it just cannot be understood)
- "A lock is used to change the data" (encryption uses a key, not a lock)
- "Firewall stops data interception" (firewalls protect access to systems, not data in transit)

### Physical vs Software-Based Security

**Physical security methods:**
- Locked doors / keypads / key cards
- CCTV cameras
- Security guards
- Biometric access (fingerprint, retina scan)
- Security cables / locks on devices
- Secure server rooms

**Software-based security methods:**
- Anti-malware software
- Firewalls
- Encryption
- Passwords
- User access levels

**Remember:** Penetration testing is neither physical nor software -- it is a process/service that tests both.
