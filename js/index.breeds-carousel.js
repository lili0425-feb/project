function initCarousel() {
  const carousel = document.querySelector(".carousel__wrapper");
  const items = document.querySelectorAll(".carousel__item");
  const leftButton = document.querySelector(".carousel__button--left");
  const rightButton = document.querySelector(".carousel__button--right");

  if (!carousel || !items.length || !leftButton || !rightButton) {
    console.warn("⛔️ Carousel elements not found, skipping init.");
    return;
  }

  const itemsPerPage = 2;
  const totalItems = items.length;
  let index = 0;

  function updateCarousel() {
    const offset = -(index * (100 / itemsPerPage));
    carousel.style.transform = `translateX(${offset}%)`;
  }

  rightButton.addEventListener("click", () => {
    if (index < totalItems - itemsPerPage) {
      index++;
      updateCarousel();
    }
  });

  leftButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });
}

// Ініціалізуємо коли partial підвантажено
document.addEventListener("htmx:afterSwap", (event) => {
  if (
    event.target.tagName === "SECTION" &&
    event.target.innerHTML.includes("carousel__wrapper")
  ) {
    console.log("✅ Carousel loaded, initializing");
    initCarousel();
  }
});