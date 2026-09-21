function headerHTML() {
  return `
    <div class="header-inner">
      <a class="logo-link" href="./index.html" aria-label="BYD home">
        <img src="./images/brand/logo.png" alt="BYD" class="logo">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav">
        <ul class="nav-list">
          <li class="has-menu">
            <button type="button">Models</button>
            <ul class="dropdown">
              <li><a href="./index.html">BYD DOLPHIN SURF</a></li>
              <li><a href="./sealion-6.html">BYD SEALION 6</a></li>
              <li><a href="./sealion-6-dm-i.html">BYD SEALION 6 DM-i</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">About BYD</button>
            <ul class="dropdown">
              <li><a href="./about.html">About BYD</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">Technology</button>
            <ul class="dropdown">
              <li><a href="./blade-battery.html">BYD Blade Battery</a></li>
              <li><a href="./e-platform.html">BYD e-Platform 3.0</a></li>
              <li><a href="./super-dm.html">BYD Super DM</a></li>
              <li><a href="./nev.html">What is a NEV</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">Services</button>
            <ul class="dropdown">
              <li><a href="./service.html">Service Maintenance</a></li>
            </ul>
          </li>
          <li><a href="./dealers.html">Visit Dealer</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a class="store-link" href="./dealers.html">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span>Find a BYD Store</span>
        </a>
        <a class="region-btn" href="https://www.byd.com/" target="_blank" rel="noopener" aria-label="BYD global site">
          <i class="fa-solid fa-globe" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  `;
}

function footerHTML() {
  return `
    <div class="footer-grid">
      <div>
        <h3>About BYD</h3>
        <a href="./about.html">About BYD</a>
      </div>
      <div>
        <h3>Technology</h3>
        <a href="./blade-battery.html">BYD Blade Battery</a>
        <a href="./super-dm.html">BYD Super DM</a>
        <a href="./e-platform.html">BYD e-Platform 3.0</a>
        <a href="./nev.html">What is a NEV</a>
      </div>
      <div>
        <h3>Services</h3>
        <a href="./service.html">Service Maintenance</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="./dealers.html">Visit Dealer</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="legal-links">
        <a href="./privacy.html">Privacy &amp; Legal</a>
        <a href="./cookies.html">Cookies</a>
        <a href="./data-privacy.html">Data Privacy</a>
      </div>
      <div class="social">
        <span>FOLLOW US</span>
        <a href="https://www.facebook.com/bydegyptofficial" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/bydegyptofficial/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/BydEgypt" target="_blank" rel="noopener" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/company/byd-company/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
    <p class="copyright">© 2022 BYD Auto Industry Co., Ltd. All rights reserved.</p>
  `;
}

document.querySelectorAll("[data-chrome='header']").forEach((el) => {
  el.innerHTML = headerHTML();
});
document.querySelectorAll("[data-chrome='footer']").forEach((el) => {
  el.innerHTML = footerHTML();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

document.querySelectorAll(".has-menu > button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const already = item.classList.contains("is-open");
    document.querySelectorAll(".has-menu").forEach((el) => el.classList.remove("is-open"));
    if (!already) item.classList.add("is-open");
  });
});

document.querySelectorAll(".learn-more").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.panel);
    if (!panel) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.classList.toggle("is-open", !expanded);
    panel.hidden = expanded;
  });
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (!nav || !menuToggle) return;
    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".has-menu").forEach((el) => el.classList.remove("is-open"));
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".has-menu").forEach((el) => el.classList.remove("is-open"));
}, { passive: true });

const cityFilter = document.querySelector("#city-filter");
if (cityFilter) {
  cityFilter.addEventListener("change", () => {
    const city = cityFilter.value;
    document.querySelectorAll("[data-city]").forEach((card) => {
      card.hidden = city !== "all" && card.dataset.city !== city;
    });
  });
}

const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const name = data.get("name");
    const phone = data.get("phone");
    const model = data.get("model");
    const message = data.get("message") || "";
    const subject = encodeURIComponent(`BYD enquiry: ${model}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nModel: ${model}\n\n${message}`);
    window.location.href = `mailto:info@bydegypt.com?subject=${subject}&body=${body}`;
    const note = document.querySelector("#form-status");
    if (note) {
      note.hidden = false;
      note.textContent = "Your email app should open with the enquiry ready to send.";
    }
  });
}

document.querySelectorAll("[data-cookie]").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.cookie;
    localStorage.setItem("byd-cookie-preference", choice);
    showCookieStatus(choice);
  });
});

function showCookieStatus(choice) {
  const status = document.querySelector("#cookie-status");
  if (!status || !choice) return;
  status.hidden = false;
  status.textContent = choice === "accepted"
    ? "Preference saved: optional cookies are allowed on this device."
    : "Preference saved: only essential cookies will be used on this device.";
}

showCookieStatus(localStorage.getItem("byd-cookie-preference"));

function markReveal(el, direction, delay) {
  if (!el) return;
  el.classList.add("reveal", `reveal-${direction}`);
  if (delay) el.style.transitionDelay = `${delay}s`;
}

function watchWhenInFront(targets, visibleClass) {
  const pending = new Set(targets.filter(Boolean));
  if (!pending.size) return;

  const revealVisible = () => {
    const viewTop = window.innerHeight * 0.1;
    const viewBottom = window.innerHeight * 0.88;
    pending.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= viewTop || rect.top >= viewBottom) return;
      el.classList.add(visibleClass);
      pending.delete(el);
      io.unobserve(el);
    });
    if (!pending.size) {
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
    }
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(visibleClass);
      pending.delete(entry.target);
      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "-8% 0px -16% 0px"
  });

  pending.forEach((el) => io.observe(el));
  window.addEventListener("scroll", revealVisible, { passive: true });
  window.addEventListener("resize", revealVisible);
  window.setTimeout(revealVisible, 0);
}

document.querySelectorAll(".hero-copy, .section-copy, .cta-copy").forEach((block, index) => {
  markReveal(block, index % 2 === 0 ? "left" : "right");
});

document.querySelectorAll(".section-copy p, .cta-copy p, .cta-note").forEach((el) => {
  markReveal(el, "up", 0.14);
});

document.querySelectorAll(".cta-copy .brochure-btn").forEach((el) => markReveal(el, "up", 0.22));
document.querySelectorAll(".subpage-hero h1").forEach((el) => markReveal(el, "left"));
document.querySelectorAll(".subpage-hero .lead").forEach((el) => markReveal(el, "right", 0.12));
document.querySelectorAll(".subpage-body > p").forEach((el) => markReveal(el, "up"));
document.querySelectorAll(".learn-more").forEach((el) => markReveal(el, "up"));
document.querySelectorAll(".contact-form, .legal-article").forEach((el) => markReveal(el, "up"));

document.querySelectorAll(".info-card, .store-card").forEach((el, index) => {
  markReveal(el, index % 2 === 0 ? "left" : "right", (index % 4) * 0.08);
});

document.querySelectorAll(".panel").forEach((el, index) => {
  el.classList.add(index % 2 === 0 ? "img-from-right" : "img-from-left");
});

watchWhenInFront([...document.querySelectorAll(".reveal, .stats, .footer-grid")], "is-visible");
watchWhenInFront([...document.querySelectorAll(".panel")], "is-inview");
