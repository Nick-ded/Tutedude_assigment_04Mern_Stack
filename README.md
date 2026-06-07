<div align="center">

# 🧺 FreshFold — Laundry Services Web App

### *Because your clothes deserve better than whatever's happening right now*

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?style=for-the-badge&logo=gmail&logoColor=white)

**Tutedude Assignment 04 — MERN Stack**

[🔴 Live Demo](#) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/Nick-ded/Tutedude_assigment_04Mern_Stack/issues) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/Nick-ded/Tutedude_assigment_04Mern_Stack/issues)

</div>

---

## 😤 The Problem

You wake up. You have a job interview in 3 hours.  
Your shirt looks like it spent the night in a blender.  
Your trousers have a mystery stain from 2019.  
You panic.

**FreshFold exists because of mornings like that.**

---

## 🚀 What This Actually Does

A fully functional laundry services booking web app where users can:

- 👀 **Browse services** — 6 laundry options with real prices
- 🛒 **Add to cart** — toggle items in/out, see a live total
- 📅 **Book an appointment** — fill in name, email, phone → hit Book Now
- 📧 **Get an email confirmation** — powered by EmailJS (yes, an actual email)
- 📄 **Read the boring legal stuff** — Privacy Policy, Terms of Use, Refund Policy (all in modals, not separate pages like some caveman would do)

---

## 🗂️ Project Structure

```
📦 Tutedude_assigment_04Mern_Stack
 ┣ 📄 index.html      — The whole UI (navbar, hero, services, booking, footer)
 ┣ 🎨 style.css       — All styles, responsive, no frameworks needed
 ┣ ⚙️  script.js      — Cart logic, EmailJS, modals, toast notifications
 ┣ 🖼️  logo.png       — The logo (yes it's an anime character, yes it's valid)
 ┗ 📖 README.md       — You are here
```

---

## 🧩 Features Breakdown

### Navbar
- Fixed top, blur backdrop, scrolls with you like a loyal dog
- Logo on the left, nav links in the centre, **Mepaayush** pill on the right
- Hamburger menu on mobile (it actually works)

### Hero Section
- Left: Heading + description + **"Book a service today!"** button that scrolls you straight to the booking section
- Right: Custom SVG washing machine illustration with a floating animation, porthole showing a shirt inside, bubbles, the works

### Achievements Banner
- Full-width blue bar — **15+ Services · 240+ Happy Customers · 2+ Yrs Experience**
- No fake counter animations, just the numbers. We keep it honest.

### Services + Booking (the main event)
| Service | Price |
|---|---|
| 👔 Dry Cleaning | ₹200 |
| 🧺 Wash & Fold | ₹100 |
| 🧹 Ironing | ₹30 |
| 🧪 Stain Removal | ₹500 |
| 🧥 Leather & Suede Cleaning | ₹999 |
| 👗 Wedding Dress Cleaning | ₹2800 |

- Click **Add Item** → it turns red and becomes **Remove Item**
- Cart table updates live with S.No, service name, price
- Total amount recalculates on every add/remove
- Book Now → EmailJS fires → success modal pops up with booking ID

### Footer
- About us (written by a human, not ChatGPT... okay fine, a human-adjacent AI)
- Important Links → About Us & Contact scroll to sections; Privacy/Terms/Refund open full content modals
- Newsletter subscribe (shows a toast, doesn't spam you)
- Social icons

---

## ⚙️ Setup & Run Locally

**Zero dependencies. No npm install. No webpack. No tears.**

```bash
# Clone it
git clone https://github.com/Nick-ded/Tutedude_assigment_04Mern_Stack.git

# Go in
cd Tutedude_assigment_04Mern_Stack

# Serve it (pick any method)
npx serve .              # Node.js
python -m http.server    # Python
# or just open index.html in a browser
```

Visit → `http://localhost:3000`

---

## 📧 EmailJS Setup

The Book Now button sends a real email. To make it work with your account:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** using these variables:

```
{{to_name}}        → customer's name
{{to_email}}       → customer's email
{{user_phone}}     → phone number
{{services_list}}  → list of booked services
{{total_amount}}   → total price
{{booking_id}}     → auto-generated booking ID
```

4. Open `script.js` and replace:

```js
const EMAILJS = {
  publicKey:  "YOUR_PUBLIC_KEY",   // Account > API Keys
  serviceId:  "YOUR_SERVICE_ID",   // Email Services
  templateId: "YOUR_TEMPLATE_ID",  // Email Templates
};
```

Done. Book something and check your inbox.

---

## 📱 Responsive?

Yeah.

| Device | Status |
|---|---|
| 🖥️ Desktop | ✅ Looks great |
| 💻 Laptop | ✅ Looks great |
| 📱 Mobile | ✅ Hamburger menu, stacked layout |
| 🖨️ Printer | 🤷 Probably fine, untested |

---

## 🛠️ Built With

- **Vanilla HTML/CSS/JS** — no frameworks, no excuses
- **EmailJS** — email confirmations without a backend
- **Font Awesome 6** — icons
- **Google Fonts (Inter)** — clean, readable typography
- **SVG illustrations** — hand-crafted, zero broken image links

---

## 📋 Assignment Checklist

- [x] Responsive Navbar with Logo, Nav Links, Username
- [x] Hero Section — Left (heading + description + CTA button) / Right (image)
- [x] "Book a Service Today" button scrolls to booking section
- [x] Service Overview — 15+ Services, 240+ Customers, 2+ Years
- [x] Services list with Add/Remove cart functionality
- [x] Booking form — Name, Email, Phone
- [x] EmailJS integration on Book Now
- [x] Email confirmation sent on booking
- [x] Footer with all required links

---

## 👤 Author

**Mepaayush** — Tutedude MERN Stack Batch

---

<div align="center">

*Built with way too much attention to detail for an assignment* 🫡

</div>
