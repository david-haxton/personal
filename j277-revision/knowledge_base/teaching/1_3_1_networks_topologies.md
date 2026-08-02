# Unit 1.3.1: Networks and Topologies
## OCR J277 GCSE Computer Science -- Knowledge Base File

---

## Specification Requirements

### 1. Types of Network: LAN (Local Area Network)

**Students must know:**
- A **Local Area Network (LAN)** is a network covering a small geographical area, typically within a single building or site
- LANs connect computers and devices in a limited space such as a home, school, or office building
- LANs use dedicated hardware that is owned and managed by the organisation
- LANs do not use external infrastructure or third-party hardware
- LANs typically use MAC addresses for device communication within the network
- Common examples: school network, home network, office building network

**Key distinction:** LANs are NOT defined by the number of devices connected. A LAN with 100 computers is still a LAN, and a WAN with 5 computers is still a WAN. The difference is geographical distance and ownership of hardware.

**Marking language:**
- Accept: "Small geographical location", "single building", "no use of external infrastructure", "all hardware owned/managed by the organisation", "dedicated hardware not shared with other businesses"
- Do not accept: "connects a small number of computers" (number of devices is irrelevant)
- Do not accept: "faster than a WAN" (without explanation of why - depends on many factors)

**Not required:** Specific technical details of LAN protocols beyond the specification scope.

---

### 2. Types of Network: WAN (Wide Area Network)

**Students must know:**
- A **Wide Area Network (WAN)** is a network covering a large geographical area, connecting multiple sites across cities, countries, or continents
- WANs typically use external infrastructure provided by third-party telecommunications companies
- WANs connect LANs together, forming networks of networks
- The Internet is the largest example of a WAN
- Common examples: a company with offices in London and Manchester connected together, international bank networks

**Key distinction:** WANs are NOT defined by number of devices. The defining characteristics are: geographical distance between sites and use of external/third-party infrastructure.

**Marking language:**
- Accept: "Large geographical area", "connects networks together", "uses external/third-party infrastructure", "hardware not owned by single organisation"
- Do not accept: "connects a large number of computers" (number is irrelevant)
- Do not accept: "slower than a LAN" (without context - depends on infrastructure)

**Not required:** Technical details of WAN protocols such as MPLS, Frame Relay, or specific telecoms technologies.

---

### 3. Factors that Affect the Performance of Networks

**Students must know:**
- **Number of devices connected** - more devices sharing bandwidth reduces available bandwidth per device, causing slower data transmission
- **Bandwidth** - the maximum amount of data that can be transmitted in a fixed amount of time; higher bandwidth allows faster data transfer
- Additional factors include: network topology, transmission media, hardware quality, interference (wireless), and network traffic/congestion

**Students must understand:**
- How each factor affects performance in practice: more users = slower speeds, higher bandwidth = faster transfers
- The relationship between these factors: adding devices effectively reduces available bandwidth per device

**Marking language:**
- Accept: "Number of devices/users/computers connected", "bandwidth", "amount of data being transmitted", "quality of hardware", "type of transmission media"
- Do not accept: Definitions of bandwidth without explaining HOW it affects performance
- Do not accept: Generic "network speed" without explaining what affects it

**Not required:** Precise calculations of bandwidth requirements or detailed knowledge of bandwidth measurements beyond basic understanding.

---

### 4. The Different Roles of Computers in a Client-Server Network

**Students must know:**
- In a **client-server network**, computers have different roles:
  - **Server**: A powerful computer that provides services and resources to other computers (clients). Servers run all the time and manage access to shared resources like files, printers, and applications
  - **Client**: A computer that requests services or resources from the server. Clients rely on the server to provide access to files and services
- Servers provide centralised management and control over the network
- Servers handle security, user authentication, and access permissions
- Examples: file server (stores files), web server (hosts web pages), email server (manages email), print server (manages printers)

**Students must understand:**
- Servers are always on and waiting for requests from clients
- Clients cannot directly access resources on other clients - they must go through the server
- This provides better security and easier management compared to peer-to-peer

**Marking language:**
- Accept: "Server provides services/resources", "client requests services from server", "centralised control", "server manages access/security"
- Do not accept: "Server stores all the data" (oversimplification - clients can store local data too)
- Do not accept: "Client is less powerful" (not always true - clients can be powerful workstations)

**Not required:** Detailed knowledge of server operating systems or specific server hardware specifications.

---

### 5. The Different Roles of Computers in a Peer-to-Peer Network

**Students must know:**
- In a **peer-to-peer network**, all computers have equal status - there is no dedicated server
- Each computer can act as both client and server, sharing and accessing resources directly with other computers
- Each computer stores its own files and manages its own security
- No centralised control or management
- Suitable for small networks (typically fewer than 10 devices)

**Students must understand:**
- Computers can access resources directly from other computers without going through a central server
- Decentralised nature means: easier to set up, cheaper (no server needed), but harder to manage security and backups
- If one computer is switched off, its files become unavailable to other users

**Marking language:**
- Accept: "All computers are equal", "no dedicated server", "each computer can share and access files directly", "decentralised"
- Do not accept: "Cannot share files" (incorrect - peer-to-peer specifically allows file sharing)
- Do not accept: "No security" (there is security, but it's managed individually not centrally)

**Not required:** Technical implementation details of peer-to-peer protocols or file-sharing systems.

---

### 6. Hardware Needed to Connect Stand-Alone Computers into a LAN: Wireless Access Points

**Students must know:**
- A **Wireless Access Point (WAP)** allows devices to connect to a wired network wirelessly using Wi-Fi
- WAPs create a wireless network by transmitting and receiving radio signals
- Devices connect to the WAP using Wi-Fi, and the WAP connects to the wired network via Ethernet cable
- WAPs extend network coverage to areas where cabling is impractical
- WAPs may include security features like encryption and authentication

**Students must understand:**
- WAPs act as a bridge between wireless devices and the wired network
- Multiple WAPs can be used to cover larger areas
- WAPs do not provide routing - they simply provide wireless access to an existing network

**Marking language:**
- Accept: "Allows wireless connections to the network", "creates a Wi-Fi network", "transmits/receives radio signals", "connects wireless devices to wired network"
- Do not accept: Confusing WAPs with routers (WAPs don't route between networks)

**Not required:** Technical specifications of Wi-Fi standards (802.11n, ac, etc.) or detailed frequency information.

---

### 7. Hardware Needed to Connect Stand-Alone Computers into a LAN: Routers

**Students must know:**
- A **router** connects different networks together and directs data between them
- Routers determine the best path for data to travel from source to destination
- Routers use IP addresses to identify devices and route data to the correct network
- Routers separate network traffic to improve performance and security
- Home routers typically combine multiple functions: routing, switching, WAP, and modem

**Students must understand:**
- Routers operate at a higher level than switches - they work with IP addresses not MAC addresses
- Routers can connect a LAN to a WAN (e.g., home network to the Internet)
- Routers provide a gateway between different networks

**Marking language:**
- Accept: "Connects networks together", "directs data between networks", "uses IP addresses", "finds best path for data"
- Do not accept: "Connects devices in a network" (that's a switch - routers connect networks, not individual devices)

**Not required:** Detailed knowledge of routing protocols (RIP, OSPF, BGP) or routing tables beyond basic understanding.

---

### 8. Hardware Needed to Connect Stand-Alone Computers into a LAN: Switches

**Students must know:**
- A **switch** connects multiple devices together within a LAN, allowing them to communicate
- Switches receive data from devices and direct it to the correct destination device
- Switches maintain a MAC address table that records which devices are connected to which ports
- When a switch receives data, it checks the destination MAC address and sends the data only to the correct port
- If the MAC address is not in the table, the switch sends the data to all devices (like a hub)

**Students must understand:**
- Switches are more intelligent than hubs - they direct data only to the intended recipient, not all devices
- Switches learn MAC addresses automatically as devices communicate
- Switches reduce network collisions and improve performance compared to hubs

**Key distinction:** Switches direct network traffic; they do NOT store data for devices or provide services like a server does.

**Marking language:**
- Accept: "Connects devices in the network", "receives data from all devices", "directs data to destination", "maintains MAC address table", "uses MAC addresses"
- Do not accept: "Stores data for devices" (switches do not store files or provide services - this confuses switches with servers)
- Do not accept: "Sends data to all devices" (that's a hub, not a switch - unless the MAC address is unknown)

**Not required:** Technical details of switching methods (store-and-forward, cut-through) or VLAN configuration.

---

### 9. Hardware Needed to Connect Stand-Alone Computers into a LAN: NIC (Network Interface Controller/Card)

**Students must know:**
- A **Network Interface Controller (NIC)** or **Network Interface Card** is hardware that allows a computer to connect to a network
- Every device on a network needs a NIC to send and receive data
- NICs can be wired (Ethernet port) or wireless (Wi-Fi adapter)
- Each NIC has a unique **MAC address** that identifies the device on the network
- NICs convert data from the computer into a format suitable for transmission over the network

**Students must understand:**
- NICs are essential - without a NIC, a computer cannot connect to a network
- NICs handle the physical connection and data transmission at the hardware level
- Modern devices often have NICs built into the motherboard

**Marking language:**
- Accept: "Allows computer to connect to network", "has unique MAC address", "sends and receives data", "required for network connection"
- Do not accept: Confusing NIC with other network hardware like switches or routers

**Not required:** Technical specifications of NIC chipsets or detailed knowledge of network interface standards beyond basic understanding.

---

### 10. Hardware Needed to Connect Stand-Alone Computers into a LAN: Transmission Media

**Students must know:**
- **Transmission media** is the physical medium that carries data between devices in a network
- Common types:
  - **Wired (Ethernet cable)**: Uses copper cables or fibre optic cables to transmit data as electrical signals or light
  - **Wireless (Wi-Fi, Bluetooth)**: Uses radio waves to transmit data through the air
- Different transmission media have different characteristics: speed, reliability, cost, installation difficulty

**Students must understand:**
- Wired connections are generally faster and more reliable but require physical cabling
- Wireless connections offer mobility and easier installation but can be affected by interference
- Choice of transmission media depends on requirements: distance, speed needed, environment, budget

**Marking language:**
- Accept: "Physical medium carrying data", "copper cable/Ethernet", "fibre optic cable", "radio waves/wireless", "connects devices together"
- Do not accept: Confusing transmission media with network protocols

**Not required:** Detailed technical specifications of cable categories (Cat5e, Cat6, Cat7) or wireless standards beyond basic understanding. Knowledge of how Ethernet, Wi-Fi, and Bluetooth protocols work is NOT required.

---

### 11. The Internet as a Worldwide Collection of Computer Networks: DNS (Domain Name Server)

**Students must know:**
- **DNS (Domain Name Service/Server)** is a system that converts user-friendly domain names (e.g., www.bbc.co.uk) into IP addresses (e.g., 151.101.192.81)
- DNS is made up of multiple **Domain Name Servers** distributed worldwide
- When a user enters a URL in a web browser, the browser sends a request to a DNS to find the matching IP address
- If the DNS has the IP address, it returns it to the browser; the browser then requests the web page from that IP address

**Students must understand:**
- Humans use domain names because they're easier to remember than IP addresses
- Computers use IP addresses to locate and communicate with other computers
- DNS acts as a "phone book" for the Internet, translating names to addresses

**Marking language:**
- Accept: "Converts domain name to IP address", "converts URL to IP address", "made up of Domain Name Servers", "acts like a directory/phone book"
- Do not accept: "DNS is a single server" (it's a distributed system of many servers)

**Not required:** Technical details of DNS hierarchy (root servers, TLD servers) or DNS record types (A, AAAA, MX, CNAME).

---

### 12. The Internet as a Worldwide Collection of Computer Networks: Hosting

**Students must know:**
- **Hosting** is the service of storing website files and data on a server so they can be accessed over the Internet
- Website files are stored on **web servers** that are connected to the Internet 24/7
- When users request a website, the web server sends the files to their browser
- **Hosting providers** manage the web servers and provide services like storage space, bandwidth, and technical support

**Students must understand:**
- Websites need to be hosted on a server to be accessible on the Internet
- Without hosting, website files would only exist on the developer's local computer
- Different hosting options exist: shared hosting (multiple websites on one server), dedicated hosting (one website per server), cloud hosting (distributed across multiple servers)

**Marking language:**
- Accept: "Storing website files on a server", "making websites accessible on the Internet", "web server stores website files"
- Do not accept: Confusing hosting with domain registration (different services)

**Not required:** Detailed knowledge of hosting technologies, server management, or specific hosting companies.

---

### 13. The Internet as a Worldwide Collection of Computer Networks: The Cloud

**Students must know:**
- **The Cloud** refers to remote service provision over the Internet, including storage, software, and processing power
- Instead of storing files locally or running software on a local computer, users access these services via the Internet
- Common cloud services:
  - **Cloud storage**: Storing files on remote servers (e.g., Google Drive, Dropbox, iCloud)
  - **Cloud software**: Running applications through a web browser (e.g., Google Docs, Microsoft 365 Online)
  - **Cloud processing**: Using remote computing power for tasks like rendering or data analysis

**Students must understand:**
- The Cloud allows access to data and software from any device with Internet connection
- Data and software are stored on remote servers managed by cloud service providers
- Users typically pay subscription fees or get free limited storage

**Advantages of the Cloud:**
- Access files and software from any device anywhere with Internet connection
- Automatic backups and updates managed by provider
- No need to purchase expensive hardware or software licenses
- Scalable - can easily increase storage or processing power as needed

**Disadvantages of the Cloud:**
- Requires reliable Internet connection - cannot access data offline
- Data security and privacy concerns - data stored on third-party servers
- Ongoing subscription costs can be expensive over time
- Reliance on service provider - if they have problems, users cannot access data

**Marking language:**
- Accept: "Remote service provision", "storage/software/processing over the Internet", "files stored on remote servers", "accessed via Internet"
- Do not accept: "Stored in the sky" or vague references to "the cloud" without explaining it's remote servers

**Not required:** Technical infrastructure of cloud computing (data centres, virtualisation) or specific cloud service models (IaaS, PaaS, SaaS).

---

### 14. The Internet as a Worldwide Collection of Computer Networks: Web Servers and Clients

**Students must know:**
- A **web server** is a computer that stores and provides (serves) web pages to users over the Internet
- Web servers run 24/7, waiting for requests from clients
- Common examples of services provided by servers: web server provides web pages, file server provides file storage/retrieval, print server manages printing
- A **client** is a computer that requests services from a server
- Clients use web browsers to request and display web pages from web servers

**Students must understand:**
- The client-server model for web access: client requests a page, server responds with the page
- Servers provide services; clients request/use those services
- Multiple clients can request services from the same server simultaneously

**Marking language:**
- Accept: "Web server stores/provides web pages", "client requests web pages", "server provides services", "client uses services from server"
- Do not accept: Confusing web servers with other server types without explanation

**Not required:** Technical details of HTTP requests/responses, server-side scripting, or web server software (Apache, Nginx).

---

### 15. Star Network Topology

**Students must know:**
- In a **star topology**, all devices are connected to a central device (switch or hub)
- Each device has its own cable connecting directly to the central device
- Data transmitted from one device must pass through the central device to reach another device
- If the central device fails, the entire network fails (single point of failure)
- If one device or cable fails, only that device loses connection - the rest of the network continues working

**Advantages of Star Topology:**
- Easy to add new devices - simply connect them to the central device
- Easy to identify faults - each device has its own cable
- If one device fails, the network continues working
- Faster data transmission - direct path through central device
- Fewer data collisions compared to bus topology
- Central device can monitor/control transmissions

**Disadvantages of Star Topology:**
- Requires more cabling than bus topology (one cable per device)
- Central device is a single point of failure - if it fails, entire network fails
- Additional cost of central device (switch/hub)
- Performance depends on central device capacity

**Marking language:**
- Accept: "All devices connected to central device/switch", "each device has own cable to centre", "single point of failure", "if central device fails, network fails"
- Do not accept: Diagrams showing devices connected to each other (that's mesh, not star)
- Do not accept: Including a server as the central device (star topology uses switch/hub, not a server)

**Not required:** Knowledge of bus topology (not in specification), detailed switch configuration.

---

### 16. Mesh Network Topology

**Students must know:**
- In a **mesh topology**, devices are connected to one or more other devices, creating multiple paths between devices
- **Full mesh**: Every device is connected to every other device
- **Partial mesh**: Some devices are connected to multiple devices, but not all devices are connected to every other device
- No central management device - all devices are equal/decentralised
- Multiple routes/paths exist between any two devices

**Advantages of Mesh Topology:**
- No single point of failure - if one connection breaks, data can take an alternative route
- More robust structure due to multiple paths
- Can be set up over larger areas - devices can act as repeaters
- Easier to add or remove devices without impacting network
- More scalable - can support more devices
- Reduced latency - fewer collisions due to multiple paths

**Disadvantages of Mesh Topology:**
- Large number of connections/wires required, especially in full mesh
- Impractical due to redundant connections
- Difficult to find errors due to multiple routes where problems could occur
- Reduced central management/control/oversight of network
- Less secure - more routes/points for data interception/attack
- Uses more power - more devices involved in each transmission

**Key distinction:** Mesh topology describes the physical connections between devices (hardware), NOT how the network software operates (e.g., client-server). Do not confuse mesh topology with client-server network management.

**Marking language:**
- Accept: "All devices connected to one or more devices", "multiple routes/paths between devices", "no central device/switch", "decentralised", "all devices equal"
- Do not accept: "No central server" (mesh is about connections, not server/client roles - this confuses topology with network management)
- Do not accept: Explanations about how software/services are managed (that's client-server vs peer-to-peer, not topology)

**Not required:** Technical implementation of mesh routing protocols or detailed knowledge of mesh network algorithms.

---

## Examiner Intelligence

### Recurring Misconceptions (flagged in examiner reports 2022-2025)

1. **"LANs are for small numbers of computers, WANs are for large numbers of computers"**
   - LANs and WANs are NOT defined by number of computers. A WAN can have fewer devices than a LAN. The differences are the geographical distance between devices and the hardware used to connect them.
   - Source: June 2025 J277/01 examiner report; June 2024 J277/01 examiner report

2. **"Mesh topology uses a central server"**
   - Mesh topology is about physical connections between devices (hardware), not how the network software operates. A mesh network can operate as either client-server or peer-to-peer - these are separate concepts. Do not confuse topology (connection layout) with network management (software/services).
   - Source: June 2025 J277/01 examiner report

3. **"A switch stores data for devices and provides services like a server"**
   - A switch connects devices and directs network traffic using MAC addresses. It does NOT store files for devices or provide services. Switches handle traffic routing; servers provide services (file storage, web pages, etc.).
   - Source: June 2024 J277/01 examiner report

4. **"A switch sends data to all devices connected to it"**
   - A switch maintains a MAC address table and sends data only to the destination device. This is different from a hub, which broadcasts to all devices. A switch only broadcasts if the destination MAC address is not in its table.
   - Source: June 2024 J277/01 examiner report

5. **"Star topology diagrams showing devices connected directly to other devices, or including multiple central devices"**
   - In a star topology, ALL devices must connect directly to ONE central device (switch or hub). No device should connect to another device. Common errors include adding extra central devices (router, server) or creating mesh-style connections.
   - Source: June 2024 J277/01 examiner report

6. **"Bandwidth is how fast data travels"**
   - Bandwidth is the maximum amount of data that can be transmitted in a fixed amount of time. Candidates must explain HOW bandwidth affects performance, not just define it. For example: "Higher bandwidth allows more data to be transferred per second, resulting in faster download speeds."
   - Source: Common examiner expectation across June 2022-2025 J277/01 papers (no single report flags this explicitly, but bandwidth definition without performance link is consistently penalised in mark schemes)

7. **"Star topology is better/faster than mesh topology" (without justification)**
   - Transmission speed depends on many factors (transmission media, bandwidth, hardware quality), not just topology. Do not accept generic "faster/slower" claims without explanation or context.
   - Source: June 2025 J277/01 mark scheme

### Common Mark Losses

- Giving benefits of LANs instead of characteristics of LANs (e.g., "cheaper" is a benefit, not a characteristic)
- Defining bandwidth without explaining how it affects network performance
- Confusing routers with switches - routers connect networks, switches connect devices within a network
- Not labelling diagrams of star topologies - examiners cannot award marks if devices are not identified
- Including printers connected to computers rather than to the central switch in star topology diagrams
- Contradictory statements in answers (e.g., saying both "LAN covers small area" and "LAN covers large area")
- Confusing wireless access points (WAPs) with routers
- Describing DNS as a single server rather than a distributed system of servers
- Vague answers like "makes network better" without specific explanations

### Question Patterns (2022-2025)

- **LAN vs WAN characteristics**: Frequently tested (appeared June 2023, June 2024, June 2025). Typically 1-2 marks for identifying differences. Examiners want characteristics (geographical area, hardware ownership), not benefits.
- **Network topologies (star vs mesh)**: Very common topic. Questions include:
  - Drawing star topology diagrams (3 marks) - June 2024
  - Comparing benefits/drawbacks of star vs mesh (2-4 marks) - June 2024, June 2025
  - Describing how data is transmitted in star topology (2 marks)
  - Describing what mesh topology means (2 marks) - June 2025
- **Switch role in star topology**: Appeared multiple times (June 2024 - 3 marks). Expects understanding of MAC address tables and directed data transmission.
- **Client-server vs peer-to-peer**: Less frequent but appeared in recent assessments. Usually asks for comparison of specific aspects (security, file management) - typically 4 marks.
- **Network hardware (router, switch, NIC, WAP)**: Individual hardware tasks sometimes tested but less common as standalone questions. More likely to appear embedded in scenario-based questions.
- **DNS function**: Commonly appears in gap-fill exercises or completion questions (June 2022 - 7 marks total including other concepts). Expects understanding of URL to IP address conversion.
- **Performance factors**: Occasionally tested (2 marks). Expects two factors with explanations of how they affect performance.
- **Cloud advantages/disadvantages**: Specification requirement but limited past paper coverage 2022-2025. Likely future topic.

**Coverage gaps (2022-2025):**
- No standalone questions on transmission media
- Limited questions on network hardware (routers, NICs, WAPs) beyond switch role
- No questions specifically on hosting
- Limited questions on cloud computing advantages/disadvantages

---

## Quick Reference

### LAN vs WAN

| Characteristic | LAN (Local Area Network) | WAN (Wide Area Network) |
|----------------|--------------------------|-------------------------|
| **Geographical Area** | Small area - single building/site | Large area - cities/countries |
| **Hardware Ownership** | Owned/managed by organisation | Uses third-party/external infrastructure |
| **Infrastructure** | Dedicated internal hardware | Shared external infrastructure |
| **Examples** | School network, office network, home network | Internet, company with multiple offices across cities |

### Network Hardware Quick Guide

| Hardware | Purpose | Key Detail |
|----------|---------|------------|
| **Switch** | Connects devices in a LAN | Uses MAC addresses, directs traffic to specific devices |
| **Router** | Connects networks together | Uses IP addresses, routes between LAN and WAN |
| **WAP** | Provides wireless access | Creates Wi-Fi network, connects wireless devices to wired network |
| **NIC** | Connects device to network | Every networked device needs one, has unique MAC address |

### Topology Comparison

| Feature | Star Topology | Mesh Topology |
|---------|---------------|---------------|
| **Central Device** | Yes - switch/hub | No - decentralised |
| **Single Point of Failure** | Yes - central device | No - multiple paths |
| **Easy to Add Devices** | Yes | Yes |
| **Cost** | Requires central device + cables | Many cables/connections needed |
| **Fault Identification** | Easy - each device has own cable | Difficult - multiple routes |

### Client-Server vs Peer-to-Peer

| Aspect | Client-Server | Peer-to-Peer |
|--------|---------------|--------------|
| **Computer Roles** | Different - servers and clients | Equal - all computers the same |
| **Central Management** | Yes - server manages access | No - each computer manages itself |
| **Security** | Centralised - easier to manage | Decentralised - harder to manage |
| **File Storage** | Server stores shared files | Each computer stores own files |
| **Best For** | Medium to large networks | Small networks (< 10 devices) |

### Key Exam Language

**When describing LANs, say:**
- "Small geographical area" NOT "small number of computers"
- "Single building/site"
- "Uses dedicated/owned hardware"
- "No external infrastructure"

**When describing WANs, say:**
- "Large geographical area"
- "Uses external/third-party infrastructure"
- "Connects networks together"

**When describing mesh topology, say:**
- "Devices connected to one or more other devices"
- "Multiple routes/paths between devices"
- "No central device" or "decentralised"
- AVOID: "No central server" (confuses topology with network management)

**When describing switch role, say:**
- "Receives data from devices"
- "Directs data to destination device"
- "Uses MAC address table"
- AVOID: "Stores data for devices" (switches don't store files)

---

**END OF KNOWLEDGE BASE FILE**
