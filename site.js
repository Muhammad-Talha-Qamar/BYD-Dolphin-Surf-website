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
