# Y2K Aesthetic // Cyber Frequency 2000

A little Y2K/cyber-rave web design experiment built around the kind of internet aesthetic that felt futuristic around the late 1990s and early 2000s: chrome, neon, CRT effects, ridiculous system messages, tiny badges, rave flyers, and a 960px grid.

## About this project

This is actually an older project of mine that had been sitting around for years.

I recently pulled it back out, updated some of it, cleaned up a few things, and decided to finally put it on GitHub instead of leaving it buried on a drive somewhere. The version here is therefore not meant to be a perfectly preserved snapshot of the original project. It is more of a refreshed version of something I made a long time ago.

I wasn't trying to build a real music platform or anything especially serious with this. It was mostly a design experiment and an excuse to lean all the way into a very specific era of web design that I still think is fun.

The fictional site itself is called **Cyber Frequency 2000**, an underground electronic music/rave collective that exists entirely for the aesthetic.

## What I was going for

The whole idea was to make the page feel like somebody in 2000 was trying very hard to show you what the future was going to look like.

That means things like:

- chrome and metallic typography
- neon cyan, magenta, purple, and lime
- CRT scanlines and glowing grid backgrounds
- fake system readouts and live status messages
- old-school 88x31-style web badges
- CD jewel-case artwork
- rave/club flyer influences
- intentionally over-the-top cyber terminology
- a classic 960px grid layout

There are also a few deliberately fake pieces of functionality to make the page feel more alive, including simulated music acquisitions, tour-pass reservations, a live clock/ping display, toast notifications, and a fake VIP clearance form.

None of the releases, tour dates, passes, downloads, or form submissions are real. They are just part of the demo.

## Built with

This is still a pretty simple static front-end project:

- HTML5
- CSS3
- vanilla JavaScript
- Bootstrap 5.3.3
- Google Fonts
- a custom 12-column 960 Grid System stylesheet

There is no framework, database, backend, build process, account system, or actual checkout/download system.

## A few of the details

### 960 Grid System

A big part of the layout uses a traditional 12-column, 960px grid. I kept that because it fits the period and is part of the personality of the project, while adding responsive behavior so the page is still usable on smaller screens.

### Audio Vault

The page includes twelve fictional releases presented as holographic/chrome CD-style cards. The buttons trigger JavaScript UI feedback and notifications, but they do not download or purchase anything.

### Tour Matrix

There is a fake underground tour section with locations such as Tokyo, Berlin, London, New York, and Sydney. Again, these are part of the fictional Cyber Frequency universe, not real events.

### VIP Clearance Portal

The form near the bottom is intentionally styled like an old futuristic operating-system window. Submitting it only triggers front-end validation and a simulated success message. Nothing is sent anywhere.

### Retro web details

I also kept some intentionally goofy touches like the fake webring, Netscape/Y2K/MP3-style badges, system ticker, chrome starbursts, and the very serious-looking "quantum" security messages. They are supposed to be a little ridiculous.

## Project structure

```text
Y2K-Aesthetic/
├── assets/
│   └── images/
├── css/
│   ├── grid960.css
│   └── style.css
├── js/
│   └── main.js
├── index.html
└── README.md
```

## Running it locally

There is nothing to install. You can clone the repository and open `index.html` directly in a browser.

If you would rather run it through a local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

VS Code's Live Server extension or something like `npx serve .` works fine too.

## Current status

For me, this is mostly an archived-and-refreshed personal project rather than something I plan to turn into a full application.

I wanted to clean it up enough that I could keep it around, share it, and have a record of something I made years ago. I may still tweak things when I feel like it, but I also don't want to modernize it so much that it loses the strange little Y2K time-capsule quality that made me want to save it in the first place.
