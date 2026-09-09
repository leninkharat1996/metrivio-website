const CALENDLY_URL = "https://calendly.com/lenin-k-metrivio/commercial-hvac-growth-call";

// Metrivio uses a normal Calendly page navigation, not Calendly's popup widget.
// Remove the widget script if it is still present in the cached HTML so it cannot
// interfere with the page or create mobile scrolling/freezing issues.
(function removeCalendlyWidgetScript() {
  const widgetScripts = document.querySelectorAll(
    'script[src*="assets.calendly.com/assets/external/widget.js"]'
  );
  widgetScripts.forEach((script) => script.remove());
})();

function openCalendly() {
  if (CALENDLY_URL === "YOUR_CALENDLY_URL") {
    alert("Calendly is ready to connect. Replace YOUR_CALENDLY_URL in script.js with your booking link.");
    return;
  }

  // Use a normal browser navigation instead of Calendly's popup widget.
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
