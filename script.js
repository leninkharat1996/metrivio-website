document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  const success = document.getElementById("success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // PLACEHOLDER: Replace this handler with your live form endpoint.
    // No email/backend service is implied by this demo implementation.
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.setAttribute("tabindex", "-1");
    });
  });
});
