document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  const success = document.getElementById("success");

  form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  const originalText = button.innerHTML;

  button.disabled = true;
  button.innerHTML = "Sending…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    const result = await response.json();

    if (response.ok && result.success) {
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
    } else {
      throw new Error(result.message || "Submission failed");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    button.disabled = false;
    button.innerHTML = originalText;
  }
});

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.setAttribute("tabindex", "-1");
    });
  });
});
