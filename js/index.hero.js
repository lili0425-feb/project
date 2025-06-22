    function toggleReasons(event) {
    event.preventDefault(); // блокує перехід за #reasons

    const section = document.getElementById("reasons");

    // Якщо приховано — показати, якщо показано — сховати
    section.classList.toggle("reasons--hidden");
  }
  function toggleReasons(event) {
  event.preventDefault();
  const modal = document.getElementById("reasonsModal");
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("reasonsModal");
  modal.classList.add("hidden");
}