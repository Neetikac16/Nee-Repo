const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-revealed"));
}

const nav = document.querySelector("[data-nav]");
const updateNav = () => {
  nav?.classList.toggle("border-b", window.scrollY > 24);
  nav?.classList.toggle("border-ink/5", window.scrollY > 24);
  nav?.classList.toggle("bg-canvas/80", window.scrollY > 24);
  nav?.classList.toggle("backdrop-blur-md", window.scrollY > 24);
};

updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

document.querySelectorAll("[data-case-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "Read case study" : "Hide details";
    target.hidden = isOpen;
  });
});
