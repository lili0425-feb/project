function initDropdownMenu() {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  if (!toggle || !menu) {
    console.warn("⛔️ Dropdown elements not found");
    return;
  }

  // Щоб не дублювати слухачі
  if (toggle.dataset.listenerAttached === "true") return;
  toggle.dataset.listenerAttached = "true";

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("is-open");
  });

  document.addEventListener("click", (event) => {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("is-open");
    }
  });

  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
    });
  });

  console.log("✅ Dropdown initialized");
}

document.addEventListener("htmx:afterSwap", (event) => {
  if (
    event.target.matches("div.header__wrapper") ||
    event.target.querySelector(".header__nav")
  ) {
    console.log("🔄 Dropdown nav loaded");
    initDropdownMenu();
  }
});
