function headerHTML() {
  return `
    <div class="header-inner">
      <a class="logo-link" href="./index.html" aria-label="BYD home">
        <img src="./images/brand/logo.png?v=20261027e" alt="BYD" class="logo">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav">
        <ul class="nav-list">
          <li class="has-menu">
            <button type="button">Models <i class="fa-solid fa-chevron-down nav-chevron" aria-hidden="true"></i></button>
            <ul class="dropdown">
              <li><a href="./index.html">BYD DOLPHIN SURF</a></li>
              <li><a href="./sealion-6.html">BYD SEALION 6</a></li>
              <li><a href="./sealion-6-dm-i.html">BYD SEALION 6 DM-i</a></li>
              <li><a href="./shark-6.html">BYD SHARK 6</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">About BYD <i class="fa-solid fa-chevron-down nav-chevron" aria-hidden="true"></i></button>
            <ul class="dropdown">
              <li><a href="./about.html">About BYD</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">Technology <i class="fa-solid fa-chevron-down nav-chevron" aria-hidden="true"></i></button>
            <ul class="dropdown">
              <li><a href="./blade-battery.html">BYD Blade Battery</a></li>
              <li><a href="./e-platform.html">BYD e-Platform 3.0</a></li>
              <li><a href="./super-dm.html">BYD Super DM</a></li>
              <li><a href="./nev.html">What is a NEV</a></li>
            </ul>
          </li>
          <li class="has-menu">
            <button type="button">Services <i class="fa-solid fa-chevron-down nav-chevron" aria-hidden="true"></i></button>
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

if (!document.querySelector(".scroll-progress")) {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  bar.innerHTML = "<span></span>";
  document.body.prepend(bar);
}

const siteHeader = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress span");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const onScrollChrome = () => {
  document.querySelectorAll(".has-menu").forEach((el) => el.classList.remove("is-open"));
  if (siteHeader) {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  if (progressBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    progressBar.style.width = `${ratio * 100}%`;
  }
};
window.addEventListener("scroll", onScrollChrome, { passive: true });
onScrollChrome();

if (!reduceMotion) {
  const parallaxPanels = [...document.querySelectorAll(".panel.is-inview, .panel")];
  const updateParallax = () => {
    parallaxPanels.forEach((panel) => {
      if (!panel.classList.contains("is-inview")) return;
      const rect = panel.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-28, Math.min(28, mid * -0.04));
      panel.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
    });
  };
  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
  updateParallax();
}

function animateCount(el) {
  if (el.dataset.counted === "true") return;
  el.dataset.counted = "true";
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const suffix = el.dataset.suffix || "";
  if (reduceMotion) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1100;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

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

function iconEl(name) {
  const i = document.createElement("i");
  i.className = name;
  i.setAttribute("aria-hidden", "true");
  return i;
}

function pickCardIcon(title) {
  const t = title.toLowerCase();
  if (/safe|security|protect/.test(t)) return "fa-solid fa-shield-halved";
  if (/strength|strong|struct/.test(t)) return "fa-solid fa-cube";
  if (/range|efficien|econom/.test(t)) return "fa-solid fa-gauge-high";
  if (/life|cycle|durab/.test(t)) return "fa-solid fa-clock-rotate-left";
  if (/intellig|smart|tech/.test(t)) return "fa-solid fa-microchip";
  if (/aesthet|design|light/.test(t)) return "fa-solid fa-wand-magic-sparkles";
  if (/fast|speed|quick/.test(t)) return "fa-solid fa-bolt";
  if (/quiet|smooth/.test(t)) return "fa-solid fa-wave-square";
  if (/auto|model/.test(t)) return "fa-solid fa-car-side";
  if (/global|world|presence/.test(t)) return "fa-solid fa-earth-americas";
  if (/service|care|maint/.test(t)) return "fa-solid fa-wrench";
  if (/batter/.test(t)) return "fa-solid fa-battery-full";
  if (/platform/.test(t)) return "fa-solid fa-layer-group";
  if (/charge|minute/.test(t)) return "fa-solid fa-charging-station";
  if (/km|wh|capacity/.test(t)) return "fa-solid fa-road";
  return "fa-solid fa-circle-nodes";
}

function pickStatIcon(title, detail) {
  const t = `${title} ${detail}`.toLowerCase();
  if (/blade|safe|batter/.test(t)) return "fa-solid fa-shield-halved";
  if (/minute|charge|fast/.test(t)) return "fa-solid fa-bolt";
  if (/platform|intellig|efficien/.test(t)) return "fa-solid fa-microchip";
  if (/km|range/.test(t)) return "fa-solid fa-road";
  if (/kwh|capacit/.test(t)) return "fa-solid fa-battery-full";
  if (/0–100|0-100|accel|awd/.test(t)) return "fa-solid fa-gauge-high";
  return "fa-solid fa-sparkles";
}

function enhanceVisualLanguage() {
  document.querySelectorAll(".hero-copy > h1").forEach((h1) => {
    if (h1.querySelector(".brand-line")) return;
    const raw = h1.textContent.trim();
    if (!/^BYD\s+/i.test(raw)) return;
    const rest = raw.replace(/^BYD\s+/i, "");
    h1.innerHTML = `<span class="brand-line">BYD</span>${rest}`;
  });

  document.querySelectorAll(".learn-more").forEach((button) => {
    const plus = button.querySelector(".plus");
    if (plus && !plus.querySelector("i")) {
      plus.textContent = "";
      plus.appendChild(iconEl("fa-solid fa-plus"));
    }
    [...button.children].forEach((child) => {
      if (child !== plus && !child.classList.contains("learn-label") && !child.classList.contains("plus")) {
        child.classList.add("learn-label");
      }
    });
  });

  document.querySelectorAll(".btn").forEach((btn) => {
    if (btn.querySelector(".btn-icon")) return;
    const href = btn.getAttribute("href") || "";
    const text = btn.textContent.toLowerCase();
    let icon = "fa-solid fa-arrow-right";
    if (/dealer|store|visit/.test(text) || href.includes("dealers")) icon = "fa-solid fa-location-dot";
    if (/explore|design|learn/.test(text)) icon = "fa-solid fa-arrow-down";
    const iconNode = iconEl(icon);
    iconNode.classList.add("btn-icon");
    btn.appendChild(iconNode);
  });

  document.querySelectorAll(".brochure-btn").forEach((btn) => {
    if (btn.querySelector("i")) return;
    const text = btn.textContent.toLowerCase();
    let icon = "fa-solid fa-arrow-down";
    if (/send|enquiry|submit/.test(text)) icon = "fa-solid fa-paper-plane";
    if (/accept/.test(text)) icon = "fa-solid fa-check";
    if (/reject/.test(text)) icon = "fa-solid fa-xmark";
    btn.prepend(iconEl(icon));
  });

  document.querySelectorAll(".stats li").forEach((li) => {
    if (li.querySelector(".stat-icon")) return;
    const title = li.querySelector("h2")?.textContent || "";
    const detail = li.querySelector("p")?.textContent || "";
    const badge = document.createElement("span");
    badge.className = "stat-icon";
    badge.appendChild(iconEl(pickStatIcon(title, detail)));
    li.prepend(badge);
  });

  document.querySelectorAll(".info-card, .store-card").forEach((card) => {
    if (card.querySelector(".card-icon")) return;
    const title = card.querySelector("h3")?.textContent || "";
    const badge = document.createElement("span");
    badge.className = "card-icon";
    const isStore = card.classList.contains("store-card");
    badge.appendChild(iconEl(isStore ? "fa-solid fa-store" : pickCardIcon(title)));
    card.prepend(badge);
  });

  document.querySelectorAll(".store-actions a").forEach((link) => {
    if (link.querySelector("i")) return;
    const href = link.getAttribute("href") || "";
    if (href.startsWith("tel:")) link.prepend(iconEl("fa-solid fa-phone"));
    else if (/maps|google/.test(href) || /direction|map/i.test(link.textContent)) {
      link.prepend(iconEl("fa-solid fa-diamond-turn-right"));
    } else {
      link.prepend(iconEl("fa-solid fa-arrow-up-right-from-square"));
    }
  });

  document.querySelectorAll(".section-copy > h2").forEach((h2) => {
    const block = h2.parentElement;
    if (!block || block.querySelector(".section-eyebrow")) return;
    const title = h2.textContent.toLowerCase();
    let label = "Highlight";
    let icon = "fa-solid fa-sparkles";
    if (/design|aesthet|ocean|light/.test(title)) {
      label = "Design";
      icon = "fa-solid fa-pen-nib";
    } else if (/cabin|interior|seat|console/.test(title)) {
      label = "Interior";
      icon = "fa-solid fa-couch";
    } else if (/safe|secur|protect/.test(title)) {
      label = "Safety";
      icon = "fa-solid fa-shield-halved";
    } else if (/platform|battery|technolog|innovat/.test(title)) {
      label = "Technology";
      icon = "fa-solid fa-microchip";
    } else if (/family|newest|member/.test(title)) {
      label = "Series";
      icon = "fa-solid fa-water";
    }
    const eyebrow = document.createElement("p");
    eyebrow.className = "section-eyebrow";
    eyebrow.innerHTML = `<i class="${icon}" aria-hidden="true"></i><span>${label}</span>`;
    block.insertBefore(eyebrow, h2);
  });
}

enhanceVisualLanguage();

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

/* Keep hero/section/cta text always visible — do not hide behind reveal opacity */
document.querySelectorAll(".hero-copy, .section-copy, .cta-copy, .hero-tagline, .hero-actions, .cta-actions, .cta-note, .learn-more").forEach((el) => {
  el.classList.add("is-visible");
});

document.querySelectorAll(".subpage-hero h1").forEach((el) => markReveal(el, "left"));
document.querySelectorAll(".subpage-hero .lead").forEach((el) => markReveal(el, "right", 0.12));
document.querySelectorAll(".subpage-body > p").forEach((el) => markReveal(el, "up"));
document.querySelectorAll(".contact-form, .legal-article").forEach((el) => markReveal(el, "up"));

document.querySelectorAll(".info-card, .store-card").forEach((el, index) => {
  markReveal(el, index % 2 === 0 ? "left" : "right", (index % 4) * 0.08);
});

document.querySelectorAll(".panel").forEach((el, index) => {
  el.classList.add(index % 2 === 0 ? "img-from-right" : "img-from-left");
});

const heroPanel = document.querySelector(".hero.panel");
if (heroPanel) heroPanel.classList.add("is-inview");

const statsBlocks = [...document.querySelectorAll(".stats")];
watchWhenInFront([...document.querySelectorAll(".reveal"), ...statsBlocks, ...document.querySelectorAll(".footer-grid")], "is-visible");
watchWhenInFront([...document.querySelectorAll(".panel")], "is-inview");

const countObserver = new MutationObserver(() => {
  statsBlocks.forEach((stats) => {
    if (!stats.classList.contains("is-visible")) return;
    stats.querySelectorAll("[data-count]").forEach(animateCount);
  });
});
statsBlocks.forEach((stats) => {
  countObserver.observe(stats, { attributes: true, attributeFilter: ["class"] });
  if (stats.classList.contains("is-visible")) {
    stats.querySelectorAll("[data-count]").forEach(animateCount);
  }
});
