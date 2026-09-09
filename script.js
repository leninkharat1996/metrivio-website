const CALENDLY_URL = "https://calendly.com/lenin-k-metrivio/commercial-hvac-growth-call";

function openCalendly() {
  if (CALENDLY_URL === "YOUR_CALENDLY_URL") {
    alert("Calendly is ready to connect. Replace YOUR_CALENDLY_URL in script.js with your booking link.");
    return;
  }

  // Use a normal browser navigation instead of Calendly's popup widget.
  // This avoids page-freezing/blocking issues from the third-party widget.
  window.location.assign(CALENDLY_URL);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".calendly-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openCalendly();
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.setAttribute("tabindex", "-1");
    });
  });
});
