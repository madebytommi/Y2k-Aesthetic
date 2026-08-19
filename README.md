# CYBER FREQUENCY 2000 // NEO-GENESIS UNDERGROUND SOUND LABS

[![Y2K Ready](https://img.shields.io/badge/Y2K-COMPLIANT%202000-00f0ff?style=for-the-badge&logo=retroarch&logoColor=000000)](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/)
[![Grid System](https://img.shields.io/badge/LAYOUT-960%20GRID%20SYSTEM-ff007f?style=for-the-badge)](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/css/grid960.css)
[![Audio Mastering](https://img.shields.io/badge/MASTERING-24--BIT%20%2F%2096kHz-ccff00?style=for-the-badge&logoColor=000000)](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/)
[![Optimized For](https://img.shields.io/badge/DISPLAY-1024x768%2032--BIT-7928ca?style=for-the-badge)](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/)

> **"Direct neural transmission from the Y2K digital frontier."**  
> Synthesizing hyper-kinetic acid trance, futuristic drum & bass, and liquid chrome breakbeats for decentralized warehouse collectives worldwide.

---

## ⚡ Overview

**CYBER FREQUENCY 2000** is an authentic retro-futuristic web experience paying homage to late-1990s and early-2000s cyberculture, electronic rave subcultures, and classic web design paradigms. 

Built around the legendary **960 Grid System**, the project blends period-accurate aesthetics—such as CRT scanlines, 3D chrome typography, holographic jewel-case CD artwork, rotating chrome starbursts, and 88x31 web badges—with clean semantic HTML5, modern CSS3 animations, and reactive vanilla JavaScript.

---

## 🌐 Architecture & 960 Grid System

The page layout is engineered around the classic **12-column 960 Grid System** (`css/grid960.css`), providing strict structural balance and nostalgic proportions while maintaining modern fluid fallbacks for smaller viewports.

```
+-----------------------------------------------------------------------------------+
|                              960px Total Container                                |
|  [col_1] [col_2] [col_3] [col_4] [col_5] [col_6] [col_7] [col_8] ... [col_12]     |
|  <---- 60px column width ----> <--- 20px gutter (10px margin on each side) --->  |
+-----------------------------------------------------------------------------------+
```

### Grid Highlights
- **12 Column Divisions**: Columns span from `.grid_1` (60px) to `.grid_12` (940px).
- **Prefix & Suffix Offsets**: Spacing modifiers (`.prefix_2`, `.suffix_2`) for centered terminal windows.
- **Alpha & Omega Resets**: `.alpha` strips left margin for first-in-row elements; `.omega` strips right margin for last-in-row elements.
- **Fluid & Responsive Fallbacks**: Adapts gracefully to tablet (`max-width: 991px`) and mobile screens (`max-width: 768px`) with full-width stack handling.

---

## 🔮 Key Features & Components

### 1. Marquee Ticker HUD
- Dynamic real-time system clock with year, month, date, time, and millisecond counter (`2000.01.01 // 00:00:00.00 EST`).
- Simulated live ping latency monitor fluctuating in real time.
- Quantum SSL encryption status and broadcast frequency banners (`144.00 MHz Argon Frequency`).

### 2. Cyberpunk Navigation & Hero Dossier
- Metallic brand emblem with continuously rotating 3D spiky chrome star (`assets/images/spiky_chrome_star.jpg`).
- Multi-layer metallic chrome gradient typography (`.chrome-text`).
- Sound Lab Dossier terminal card with transmission frequency and master tape archive metrics.
- High-impact cyborg rave poster with holographic badge overlays.

### 3. Audio Vault (12 Master Releases)
Interactive 4-column discography grid featuring holographic jewel case presentations:
- **CF-001**: *Argon Chromatics* // DJ Neuro-Link (144 BPM • WAV / 320K)
- **CF-002**: *Hyper-Drive Matrix* // Cyber Frequency Labs (174 BPM • D&B / FLAC)
- **CF-003**: *Translucent Memory* // Vapor Resonance (138 BPM • Techno / CD-ROM)
- **CF-004**: *2000 Techno Dome* // Cybernetic Collective (150 BPM • Live 2xCD Set)
- **CF-005**: *Chrome Wings* // Y2K Cyber Tribe (160 BPM • Hardcore / WAV)
- **CF-006**: *Cybernetic Dream* // Neo Rave System (148 BPM • Acid Trance / FLAC)
- **CF-007**: *Resonance* // Cyberphunk 2001 (140 BPM • Techno / CD-ROM)
- **CF-008**: *Cyber Cute* // Neo-Kawaii Project (136 BPM • Speed Garage / 2-Disc)
- **CF-009**: *Liquid Nitrogen* // Zero Gravity (168 BPM • Jungle / D&B)
- **CF-010**: *Millennium Nexus* // Sound Archive (142 BPM • Eurodance / WAV)
- **CF-011**: *Supernova Acid* // 303 Frequency (155 BPM • Goa Trance / FLAC)
- **CF-012**: *Ultraviolet Pulse* // DJ Matrix Core (175 BPM • Breakcore / CD)

### 4. World Rave Tour Matrix
Clandestine warehouse coordinates and live Argon laser transmission schedules across **Neo-Tokyo (Sector 7)**, **Berlin (Kreuzberg)**, **London (Docklands)**, **New York (Brooklyn)**, and **Sydney (Harbour Vault)** with status badges and pass reservation actions.

### 5. VIP Clearance Portal (`VIP_CLEARANCE_PORTAL.EXE`)
- Retro OS window framing complete with title bar, minimize/maximize/close controls, and purple glassmorphic background.
- Form fields for agent codename, encrypted frequency email, clearance level dropdown (Levels 1–4), and neural mission statement.
- Client-side validation and simulated encrypted transmission dispatch.

### 6. Cyber HUD Notification System (`CYBER_ARCHIVE_TRANSFER.EXE`)
- Reactive toast notification overlay displaying dynamic release acquisitions and VIP pass confirmations with visual progress timers.

### 7. Nostalgic Footer & Webring
- Cyberspace 2000 Webring banner navigation (`PREV`, `WEBRING HUB`, `RANDOM`, `NEXT`).
- Vintage 88x31 buttons (*Netscape 800x600*, *Y2K Ready 2000*, *MP3 Inside*, *Macromedia Flash*, *Cyber Power*, *W3C HTML5*).

---

## 🎨 Aesthetic & Visual Design Tokens

```
========================================================================
HEX COLOR       TOKEN VARIABLE             ROLE / USAGE
========================================================================
#00f0ff         --y2k-cyan                 Electric neon cyan, borders, HUD accents
#ff007f         --y2k-magenta              Laser hot magenta, buttons, active highlights
#7928ca         --y2k-purple               Deep cyber purple, gradients & shadows
#ccff00         --y2k-lime                 High-visibility neon lime badges & metrics
#ffe600         --y2k-yellow               Warning badges & secondary accents
#d4e0e8         --y2k-silver               Liquid chrome highlights & metallic borders
#07080f         --y2k-dark                 Void dark space background
========================================================================
```

### Visual Effects Engine
- **CRT Scanlines**: Fixed `.crt-overlay` simulating interlaced cathode-ray tube television monitors.
- **Chrome Typography**: Multi-stop linear gradients paired with text clipping and drop shadows for liquid metallic text.
- **Holographic CD Sheen**: Translucent animated linear sweep simulating CD disc reflections on mouse hover.
- **Cyber Grid**: Fixed 40px matrix grid with ambient radial glows.

---

## 🔤 Google Typography

The project utilizes five curated Google Fonts to replicate late-90s digital aesthetics:

| Font Family | Style / Role | Usage |
| :--- | :--- | :--- |
| [`Audiowide`](https://fonts.google.com/specimen/Audiowide) | Display Cursive / Techno | Brand titles, logos, marquee headers |
| [`Orbitron`](https://fonts.google.com/specimen/Orbitron) | Geometric Sans / Futuristic | Section headings, HUD titles, numeric readouts |
| [`Space Mono`](https://fonts.google.com/specimen/Space+Mono) | Monospace / Cyberpunk | Technical specs, body descriptions, table data |
| [`VT323`](https://fonts.google.com/specimen/VT323) | Retro CRT Pixel / LCD | Clock ticker, status tags, clearance badges |
| [`Syne`](https://fonts.google.com/specimen/Syne) | Avant-garde Geometric | Action buttons, badges, secondary body typography |

---

## 📁 Repository Structure

```
Y2K-Aesthetic/
├── assets/
│   └── images/
│       ├── cd_chrome_wings.jpg       # Master CD Cover: Chrome Wings
│       ├── cd_cyber_cute.jpg         # Master CD Cover: Cyber Cute
│       ├── cd_cybernetic_dream.jpg   # Master CD Cover: Cybernetic Dream
│       ├── cd_resonance.jpg          # Master CD Cover: Resonance
│       ├── cyber_mascot.jpg          # Master CD Cover: Cyber Mascot
│       ├── hero_cyborg.jpg           # Hero Visual: 3D Chrome Cyborg & Rave Flyer
│       ├── holographic_cd.jpg        # Master CD Cover: Holographic CD
│       └── spiky_chrome_star.jpg     # Emblem: 3D Spiky Metallic Starburst
├── css/
│   ├── grid960.css                   # 12-Column 960 Grid System & Responsive Rules
│   └── style.css                     # Y2K Aesthetic Styles, Chrome FX, CRT Scanlines
├── js/
│   └── main.js                       # Live Clock, Audio Vault Acquisition, HUD Toasts
├── index.html                        # Semantic Single-Page Application
└── README.md                         # Project Documentation
```

---

## 🚀 Local Preview Instructions

You can run CYBER FREQUENCY 2000 locally using any standard static file server or browser.

### Option 1: Python 3 Built-in HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd "/Volumes/Backup Plus/GitHub/Y2K-Aesthetic"

# Start the web server on port 8000
python3 -m http.server 8000
```
Open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Node.js `serve` / `http-server`
```bash
# Using npx (no installation required)
npx serve .
```

### Option 3: VS Code Live Server Extension
1. Open the repository folder in VS Code.
2. Right-click [`index.html`](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/index.html) and select **"Open with Live Server"**.

### Option 4: Direct Browser Open
Simply double-click [`index.html`](file:///Volumes/Backup%20Plus/GitHub/Y2K-Aesthetic/index.html) or open it directly in Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.

---

## 💾 System Requirements & Compatibility

- **Browser**: Modern Chromium, Firefox, WebKit / Safari (HTML5, CSS Custom Properties, ES6)
- **Retro Recommendation**: Best viewed at 1024×768 or 1280×1024 resolution with 32-bit color depth and full stereo audio.
- **Dependencies**:
  - [Bootstrap 5.3.3 CSS & JS](https://getbootstrap.com/) (CDN)
  - [Google Fonts](https://fonts.google.com/) (CDN)
  - 100% Vanilla JS & Custom CSS (Zero build tools required)

---

## 📜 License & Copyright

© 2000–2026 **CYBER FREQUENCY SOUND LABS** // All Rights Reserved.  
Crafted with the **960 Grid System** & high-frequency underground audio passion.
