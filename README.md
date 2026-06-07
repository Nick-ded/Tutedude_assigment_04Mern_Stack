<div align="center">

```
███████╗██████╗ ███████╗███████╗██╗  ██╗███████╗ ██████╗ ██╗     ██████╗ 
██╔════╝██╔══██╗██╔════╝██╔════╝██║  ██║██╔════╝██╔═══██╗██║     ██╔══██╗
█████╗  ██████╔╝█████╗  ███████╗███████║█████╗  ██║   ██║██║     ██║  ██║
██╔══╝  ██╔══██╗██╔══╝  ╚════██║██╔══██║██╔══╝  ██║   ██║██║     ██║  ██║
██║     ██║  ██║███████╗███████║██║  ██║██║     ╚██████╔╝███████╗██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚══════╝╚═════╝ 
```

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6enVwMHJmMzB6NW9icGhvcTdyYjV0dmk5ZXJ4N25pczlocHVvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Lg7rusRgqA/giphy.gif" width="480" alt="laundry spinning" />

### *The only laundry booking app built entirely from a place of anxiety and spite*

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=2196F3&center=true&vCenter=true&width=700&lines=No+React.+No+Vue.+No+problem.;Vanilla+JS+supremacy+%F0%9F%91%8A;Your+clothes+were+suffering.+We+fixed+that.;EmailJS+goes+absolutely+crazy+%F0%9F%94%A5;Zero+node_modules.+Zero+regrets." alt="Typing SVG" />

<br/>

### 🌐 [https://coruseassignment04.netlify.app/](https://coruseassignment04.netlify.app/)

> Click it. Your clothes will thank you.



</div>

---

## 🚨 READ THIS FIRST

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWoxaWdqMGdtdGR3aHpoMm9oNnR1djZyZm84eDJ5eHNuMXJ5NWNlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif" width="300" alt="warning" />
</div>

```
⚠️  THIS REPO CONTAINS:
    ✔  Fully working laundry booking system
    ✔  Real EmailJS email confirmations (not fake)
    ✔  An anime character used as an official business logo
    ✔  Hand-crafted SVG washing machine (no stock images)
    ✔  700+ lines of vanilla CSS with zero frameworks
    ✔  A README longer than most university dissertations
```

---

## 😤 Origin Story

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWk1Z2ZwYzBpMnc1aGd3Y3hzNXFvMnR6dnd2YW96ZWd2dHFuaXlvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif" width="380" alt="frustrated" />
</div>

It's Monday. 8am. You have a presentation at 9.

Your shirt looks like it lost a fight with a washing machine (the irony).  
Your backup shirt is somehow worse.  
Your confidence: **deleted**.

A normal person calls a laundry service.  
**Mepaayush** builds the entire booking platform instead.

*FreshFold was born from chaos. Like all great software.*

---

## 🏗️ Architecture Deep Dive

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZ3NHZybzFwNXViZml1eWl3dDZjaGkwbXp4aGE0ZHY5dWZlM2loMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LaVp0AyqR5bGsC5Cbm/giphy.gif" width="400" alt="architecture" />
</div>

This is a **Single Page Application (SPA)** built without any framework. Here's how the pieces actually talk to each other:

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER (Client)                         │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────────────┐  │
│  │index.html│───▶│ style.css│    │       script.js          │  │
│  │  (DOM)   │    │(Render)  │    │                          │  │
│  └──────────┘    └──────────┘    │  ┌────────┐ ┌────────┐  │  │
│       │                          │  │ CART   │ │ MODAL  │  │  │
│       │ renders                  │  │ STATE  │ │MANAGER │  │  │
│       ▼                          │  │(Set{}) │ │        │  │  │
│  ┌──────────────────────────┐    │  └───┬────┘ └────────┘  │  │
│  │  DOM Elements / Sections │◀───│      │                   │  │
│  │  - Navbar                │    │  ┌───▼──────────────┐   │  │
│  │  - Hero                  │    │  │  renderServices() │   │  │
│  │  - Services Panel        │    │  │  updateCartUI()   │   │  │
│  │  - Booking Panel         │    │  │  handleBooking()  │   │  │
│  │  - Modals (5x)           │    │  └───────────────────┘   │  │
│  └──────────────────────────┘    └────────────┬─────────────┘  │
└───────────────────────────────────────────────┼────────────────┘
                                                │ emailjs.send()
                                                ▼
                              ┌─────────────────────────────┐
                              │      EmailJS CDN API        │
                              │  cdn.jsdelivr.net/npm/      │
                              │  @emailjs/browser@4         │
                              └──────────────┬──────────────┘
                                             │ SMTP relay
                                             ▼
                                   ┌──────────────────┐
                                   │  User's Inbox 📧  │
                                   │  (Gmail/Outlook)  │
                                   └──────────────────┘
```

### Why No Framework?

This is a **content + interaction** site with three core interactions:
1. Toggle items in/out of a cart (a `Set`)
2. Submit a form
3. Open/close modals

Adding React would mean: virtual DOM diffing, JSX compilation, a bundler, `node_modules` at 300MB, and three config files. For what is essentially a fancy to-do list with email. **Vanilla JS is the correct tool here.**

---

## 🧠 State Management — How the Cart Actually Works

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanJ6NHpmNmlhZGhqYjRzcXJzZW43emNreGY2bWZlcm82Y3o4M3ppbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" width="360" alt="coding" />
</div>

No Redux. No Zustand. No Context API. Just a JavaScript `Set`.

```js
// The entire cart state. That's it.
let cart = new Set(); // stores service IDs (integers)

// Toggle logic — O(1) lookup, O(1) add, O(1) delete
function toggleCart(id) {
  if (cart.has(id)) {
    cart.delete(id);   // already in cart → remove
  } else {
    cart.add(id);      // not in cart → add
  }
  updateCartUI();      // re-render the table
  updateButton(id);    // flip the button state
}
```

**Why `Set` instead of `Array`?**
- `Set.has()` is O(1). `Array.includes()` is O(n).
- No duplicate service entries — a `Set` enforces this automatically.
- Clean API: `.add()`, `.delete()`, `.has()`, `.clear()`.

**Total calculation on every render:**
```js
const total = SERVICES
  .filter(s => cart.has(s.id))       // only items in cart
  .reduce((sum, s) => sum + s.price, 0); // sum their prices
```

This recalculates from the source of truth (`SERVICES` array + `cart` Set) every time — no stale state, no sync bugs.

---

## 📧 EmailJS Integration — Technical Breakdown

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnZmeXg5Mmd5eTZqeHZucmd5M3JsMDhsb2t0MjZjbjY3OW0ydm54aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif" width="380" alt="email" />
</div>

EmailJS is a **client-side email service** that acts as an SMTP relay. Here's the full call chain:

```
User clicks "Book Now"
        │
        ▼
handleBooking(event)
        │
        ├── 1. event.preventDefault()  ← stop page reload
        ├── 2. Validate cart.size > 0  ← must have services
        ├── 3. Build templateParams{}  ← collect form values
        │        {
        │          to_name, to_email, user_phone,
        │          services_list, total_amount, booking_id
        │        }
        ├── 4. Disable submit button   ← prevent double submit
        │
        ▼
emailjs.send(serviceId, templateId, templateParams)
        │
        ├── SUCCESS → showSuccess() → open modal → resetForm()
        │
        └── CATCH   → showSuccess(emailFailed=true)
                       ↑ booking still confirmed, just warns
                         about EmailJS config
```

**Booking ID generation:**
```js
const bookingId = "LS" + Date.now().toString(36).toUpperCase();
// Date.now() → milliseconds since epoch → base-36 → uppercase
// Result: "LS1A2B3C4D" — short, unique, time-based
```

**Setting up EmailJS (5 minutes):**

```
1. emailjs.com → free account
2. Add Email Service → connect Gmail
3. Create Template → use these variable names exactly:
   {{to_name}}  {{to_email}}  {{user_phone}}
   {{services_list}}  {{total_amount}}  {{booking_id}}
4. In script.js, replace the 3 constants at the top
```

---

## 🎨 CSS Architecture

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGZkbXJ5aGZ6NzFydThzejN3aGx5eTVydG9xcDVsNXVkcXV6ZHZhaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif" width="300" alt="css magic" />
</div>

No frameworks. All custom. Here's the system:

**CSS Custom Properties (design tokens):**
```css
:root {
  --blue: #2196f3;          /* primary brand colour */
  --blue-dark: #1565c0;     /* hover states */
  --blue-light: #e3f2fd;    /* backgrounds, badges */
  --text: #1a1a2e;          /* body text */
  --muted: #6b7280;         /* secondary text */
  --border: #e5e7eb;        /* all borders */
  --bg: #f8fafc;            /* section backgrounds */
  --radius: 10px;           /* consistent rounding */
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
}
```

Changing `--blue` propagates across the **entire UI** — buttons, badges, links, panels, focus rings — instantly. This is how you maintain a design system without Tailwind.

**Responsive strategy — mobile-first breakpoints:**
```css
/* Base styles → mobile */
.sb-inner { grid-template-columns: 1fr; }

/* Tablet+ */
@media (min-width: 768px) {
  .sb-inner { grid-template-columns: 1fr 1fr; }
}

/* Desktop */
@media (min-width: 1024px) {
  .features-inner { grid-template-columns: repeat(4, 1fr); }
}
```

**The floating animation (hero image):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0);    }
  50%       { transform: translateY(-16px); }
}
/* Applied with: animation: float 4s ease-in-out infinite */
/* ease-in-out makes it feel organic, not robotic */
```

---

## 🖼️ Why Inline SVGs (Not `<img>` Tags)

<div align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXQxaHBtaW43dThoN29ycXZhMHo5eTVteWVycjBtdzl3N3BxMTloZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2K5jinAlChoCLS/giphy.gif" width="320" alt="smart" />
</div>

Every image in this project is either an inline SVG or a local file. Here's why:

| Method | Network Req | CORS Risk | Broken Link Risk | Scalable |
|--------|-------------|-----------|-----------------|----------|
| `<img src="https://...">` | ✅ yes | ❌ high | ❌ high | ✅ |
| `<img src="local.png">` | ❌ no | ❌ none | low | ✅ |
| Inline `<svg>` | ❌ none | ❌ none | ❌ impossible | ✅ |

The washing machine illustration uses **SVG `<clipPath>`** to clip the drum contents (shirt + water) inside the circular porthole — same technique CSS `overflow: hidden` + `border-radius` would use, but in pure vector:

```svg
<clipPath id="drumClip">
  <circle cx="170" cy="222" r="76"/>
</clipPath>
<g clip-path="url(#drumClip)">
  <!-- shirt shape, water fill, bubbles — all clipped to circle -->
</g>
```

---

## 🗂️ File Structure

```
📦 Tutedude_assigment_04Mern_Stack/
│
├── 🧠 index.html    ← Entire UI: navbar, hero, services, booking,
│                      features, newsletter, footer + 5 modals
│                      (Booking confirm + Privacy + Terms + Refund + Toast)
│
├── 💅 style.css     ← ~750 lines, CSS custom properties, 3 breakpoints,
│                      no !important abuse, BEM-ish naming
│
├── ⚡ script.js     ← Cart (Set-based), EmailJS, DOM rendering,
│                      modal manager, toast system, page modals
│
├── 🖼️  logo.png     ← An anime character. Professionally used as a logo.
│                      No notes.
│
└── 📖 README.md     ← You are currently inside this file.
```

---

## 🚀 Run Locally

```bash
# Clone
git clone https://github.com/Nick-ded/Tutedude_assigment_04Mern_Stack.git
cd Tutedude_assigment_04Mern_Stack

# Serve (pick one)
npx serve .            # Node.js — http://localhost:3000
python -m http.server  # Python  — http://localhost:8000

# Or just open index.html directly in Chrome.
# No build step. No bundler. Just vibes.
```

---

## 📱 Responsive Breakdown

| Viewport | Layout | Notes |
|----------|--------|-------|
| 1440px+ | Two-column hero + services/booking side-by-side | Full drip |
| 1024px | Same, tighter gaps | Still clean |
| 768px | Single column, hamburger menu | Graceful stack |
| 375px | Everything stacked, form fields full-width | Tested |
| ⌚ Watch | No idea | Probably vibes |

---

## ✅ Assignment Checklist

- [x] Responsive navbar → Logo + Nav Links + Username (Mepaayush)
- [x] Hero Section → Left (heading + desc + CTA scroll button) + Right (image)
- [x] "Book a Service Today" scrolls to booking
- [x] Service Overview banner → 15+ / 240+ / 2+ Yrs
- [x] Services with live cart add/remove + total
- [x] Booking form → Full Name, Email ID, Phone Number
- [x] EmailJS fires on Book Now
- [x] Email confirmation delivered to user
- [x] Privacy Policy, Terms of Use, Refund Policy pages (modal-based)
- [x] Fully responsive
- [x] Zero broken images
- [x] README that goes dangerously hard 🫡

---

<div align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWwxMjhtNXdqN2Fqa3lzMGdtdnZqMmE5NmFhbG50bmp6bG1sMzZkMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4cqiYI30juCOGY/giphy.gif" width="400" alt="done" />

---

### Built by **Mepaayush** · Tutedude MERN Stack · Assignment 04

*No node_modules were harmed in the making of this project.*

🌐 **Live:** [https://coruseassignment04.netlify.app/](https://coruseassignment04.netlify.app/)  
🐙 **Repo:** [github.com/Nick-ded/Tutedude_assigment_04Mern_Stack](https://github.com/Nick-ded/Tutedude_assigment_04Mern_Stack)

**⭐ Star this if your shirts are cleaner now**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Nick-ded.Tutedude_assigment_04Mern_Stack)

</div>
