function toggleAccordion(header) {
  const accordion = header.parentElement;

  document.querySelectorAll(".accordion").forEach(acc => {
    if (acc !== accordion) acc.classList.remove("active");
  });

  accordion.classList.toggle("active");
}


// Toggle Create New Contract form
function toggleForm() {
  const form = document.getElementById("contractForm");
  form.classList.toggle("hidden");
}
function openBaseAddressForm() {
  document.getElementById("baseAddressForm").classList.remove("hidden");
}

// Auto-calculate Term End Date (+1 year)
document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("termStartDate");
  const endDateInput = document.getElementById("termEndDate");

  startDateInput.addEventListener("change", function () {
    if (!this.value) return;

    const startDate = new Date(this.value);
    const endDate = new Date(startDate);

    endDate.setFullYear(startDate.getFullYear() + 1);

    // Format date as YYYY-MM-DD
    const yyyy = endDate.getFullYear();
    const mm = String(endDate.getMonth() + 1).padStart(2, "0");
    const dd = String(endDate.getDate()).padStart(2, "0");

    endDateInput.value = `${yyyy}-${mm}-${dd}`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const agreementDate = document.getElementById("agreementDate");
  const termStartDate = document.getElementById("termStartDate");

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  // Disable past dates
  agreementDate.min = minDate;
  termStartDate.min = minDate;
});

// Accordion logic (only one open at a time)
function toggleAccordion(header) {
  const accordion = header.parentElement;

  document.querySelectorAll(".accordion").forEach(acc => {
    if (acc !== accordion) {
      acc.classList.remove("active");
    }
  });

  accordion.classList.toggle("active");
}
