/* ============================================================
   EmailJS Config — replace with your real credentials
   https://www.emailjs.com/
   ============================================================ */
const EMAILJS = {
  publicKey:  "YOUR_PUBLIC_KEY",
  serviceId:  "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
};

emailjs.init(EMAILJS.publicKey);

/* ============================================================
   SERVICES DATA
   ============================================================ */
const SERVICES = [
  { id: 1, emoji: "👔", name: "Dry Cleaning",           price: 200  },
  { id: 2, emoji: "🧺", name: "Wash & Fold",            price: 100  },
  { id: 3, emoji: "🧹", name: "Ironing",                price: 30   },
  { id: 4, emoji: "🧪", name: "Stain Removal",          price: 500  },
  { id: 5, emoji: "🧥", name: "Leather & Suede Cleaning", price: 999 },
  { id: 6, emoji: "👗", name: "Wedding Dress Cleaning", price: 2800 },
];

/* ============================================================
   CART STATE
   ============================================================ */
let cart = new Set(); // stores service ids currently in cart

/* ============================================================
   RENDER SERVICES LIST
   ============================================================ */
function renderServices() {
  const container = document.getElementById("servicesList");
  container.innerHTML = SERVICES.map((s) => `
    <div class="service-row" id="row-${s.id}">
      <div class="service-row-left">
        <span class="service-emoji">${s.emoji}</span>
        <span class="service-name">${s.name}</span>
        <span> · </span>
        <span class="service-price">₹${s.price.toFixed(2)}</span>
      </div>
      <button class="btn-add" id="btn-${s.id}" onclick="toggleCart(${s.id})">
        Add Item <i class="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  `).join("");
}

/* ============================================================
   TOGGLE CART
   ============================================================ */
function toggleCart(id) {
  if (cart.has(id)) {
    cart.delete(id);
  } else {
    cart.add(id);
  }
  updateCartUI();
  updateButton(id);
}

function updateButton(id) {
  const btn = document.getElementById(`btn-${id}`);
  if (cart.has(id)) {
    btn.classList.add("added");
    btn.innerHTML = `Remove Item <i class="fa-solid fa-circle-minus"></i>`;
  } else {
    btn.classList.remove("added");
    btn.innerHTML = `Add Item <i class="fa-solid fa-circle-plus"></i>`;
  }
}

/* ============================================================
   UPDATE CART TABLE + TOTAL
   ============================================================ */
function updateCartUI() {
  const tbody    = document.getElementById("cartTableBody");
  const emptyMsg = document.getElementById("emptyMsg");
  const totalEl  = document.getElementById("totalAmount");

  const items = SERVICES.filter((s) => cart.has(s.id));

  if (items.length === 0) {
    tbody.innerHTML = "";
    emptyMsg.classList.add("visible");
    totalEl.textContent = "₹0.00";
    return;
  }

  emptyMsg.classList.remove("visible");

  tbody.innerHTML = items.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${s.name}</td>
      <td>₹${s.price.toFixed(2)}</td>
    </tr>
  `).join("");

  const total = items.reduce((sum, s) => sum + s.price, 0);
  totalEl.textContent = `₹${total.toFixed(2)}`;
}

/* ============================================================
   SCROLL TO SERVICES (hero button)
   ============================================================ */
function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

/* ============================================================
   NAVBAR — hamburger + scroll active link
   ============================================================ */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* ============================================================
   BOOKING FORM SUBMIT
   ============================================================ */
function handleBooking(e) {
  e.preventDefault();

  const items = SERVICES.filter((s) => cart.has(s.id));
  if (items.length === 0) {
    showToast("Please add at least one service to your cart!");
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const name  = document.getElementById("fullName").value.trim();
  const email = document.getElementById("emailId").value.trim();
  const phone = document.getElementById("phoneNo").value.trim();

  const servicesList = items.map((s) => `• ${s.name} — ₹${s.price.toFixed(2)}`).join("\n");
  const total        = items.reduce((sum, s) => sum + s.price, 0);
  const bookingId    = "LS" + Date.now().toString(36).toUpperCase();

  const templateParams = {
    to_name:       name,
    to_email:      email,
    user_phone:    phone,
    services_list: servicesList,
    total_amount:  `₹${total.toFixed(2)}`,
    booking_id:    bookingId,
  };

  const btn = document.getElementById("bookBtn");
  btn.disabled = true;
  btn.textContent = "Sending...";

  emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, templateParams)
    .then(() => {
      showSuccess(templateParams, items, total, false);
    })
    .catch((err) => {
      console.warn("EmailJS error:", err);
      showSuccess(templateParams, items, total, true);
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Book now";
    });
}

function showSuccess(params, items, total, emailFailed) {
  const modal = document.getElementById("modal");
  document.getElementById("modalMsg").textContent = emailFailed
    ? `Booking confirmed! (Email may not have sent — check your EmailJS setup.)`
    : `A confirmation email has been sent to ${params.to_email}.`;

  document.getElementById("modalDetail").innerHTML = `
    <strong>Booking ID:</strong> ${params.booking_id}<br>
    <strong>Name:</strong> ${params.to_name}<br>
    <strong>Phone:</strong> ${params.user_phone}<br>
    <strong>Services:</strong><br>${params.services_list.replace(/\n/g, "<br>")}<br>
    <strong>Total:</strong> ${params.total_amount}
  `;

  modal.classList.add("active");
  resetAfterBooking();
}

function resetAfterBooking() {
  cart.clear();
  SERVICES.forEach((s) => {
    const btn = document.getElementById(`btn-${s.id}`);
    if (btn) {
      btn.classList.remove("added");
      btn.innerHTML = `Add Item <i class="fa-solid fa-circle-plus"></i>`;
    }
  });
  updateCartUI();
  document.getElementById("bookForm").reset();
}

/* ============================================================
   MODAL CLOSE
   ============================================================ */
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

/* ============================================================
   NEWSLETTER
   ============================================================ */
function handleNewsletter(e) {
  e.preventDefault();
  showToast("Subscribed successfully!");
  e.target.reset();
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  clearTimeout(toastTimer);
  t.classList.add("show");
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ============================================================
   INIT
   ============================================================ */
renderServices();
updateCartUI();

/* ============================================================
   PAGE MODALS — Privacy / Terms / Refund
   ============================================================ */
function openPage(type) {
  const overlay  = document.getElementById("pageOverlay");
  const content  = document.getElementById("pageContent");
  const template = document.getElementById(`tpl-${type}`);
  if (!template) return;

  content.innerHTML = "";
  content.appendChild(template.content.cloneNode(true));
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePage() {
  document.getElementById("pageOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePage();
    closeModal();
  }
});

function scrollToAbout(e) {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function scrollToContact(e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
