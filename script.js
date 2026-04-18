const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-stack, .section-heading, .glass-card, .gallery-card"
);
const filterButtons = document.querySelectorAll(".filter-button");
const interestCards = document.querySelectorAll(".interests-gallery .gallery-card");
const tiltCards = document.querySelectorAll(".tilt-card");
const galleries = document.querySelectorAll(".gallery-grid");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

function getTileSize(image) {
  const aspect = image.naturalWidth / image.naturalHeight;
  const isArtwork = image.classList.contains("contain");

  if (window.innerWidth < 700) {
    return { col: 1, row: 24 };
  }

  if (isArtwork) {
    if (aspect >= 1.2) return { col: 4, row: 22 };
    return { col: 3, row: 24 };
  }

  if (aspect >= 1.9) return { col: 8, row: 20 };
  if (aspect >= 1.45) return { col: 6, row: 20 };
  if (aspect >= 1.05) return { col: 4, row: 22 };
  if (aspect >= 0.78) return { col: 4, row: 26 };
  return { col: 4, row: 34 };
}

function applyGallerySizing() {
  galleries.forEach((gallery) => {
    const cards = gallery.querySelectorAll(".gallery-card");

    cards.forEach((card) => {
      const image = card.querySelector(".gallery-image");

      if (!image || image.naturalWidth === 0 || card.hidden) {
        return;
      }

      const { col, row } = getTileSize(image);
      const columns = window.innerWidth >= 980 ? 12 : 6;
      const finalCol = Math.min(col, columns);

      card.style.setProperty("--col-span", String(finalCol));
      card.style.setProperty("--row-span", String(row));
    });
  });
}

function refreshGallery() {
  interestCards.forEach((card) => {
    if (card.hidden) {
      card.style.removeProperty("--col-span");
      card.style.removeProperty("--row-span");
    }
  });

  requestAnimationFrame(applyGallerySizing);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    interestCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.hidden = !matches;
    });

    refreshGallery();
  });
});

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 980) {
      return;
    }

    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -5;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

window.addEventListener("resize", refreshGallery);

document.querySelectorAll(".gallery-image").forEach((image) => {
  if (image.complete) {
    refreshGallery();
  } else {
    image.addEventListener("load", refreshGallery, { once: true });
  }
});

refreshGallery();
