function toggleTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("show"));

  event.target.classList.add("active");
  document.getElementById(id).classList.add("show");
}
