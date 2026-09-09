const CALENDLY_URL = "YOUR_CALENDLY_URL";

function openCalendly() {
  if (CALENDLY_URL === "YOUR_CALENDLY_URL") {
    alert("Calendly is ready to connect. Replace YOUR_CALENDLY_URL in script.js with your booking link.");
    return;
  }

  if (typeof Calendly !== "undefined" && typeof Calendly.initPopupWidget === "function") {
    Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
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
