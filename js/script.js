document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight navigation-style sidebar links while scrolling
  const sections = document.querySelectorAll("section[id]");
  const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');

  const updateActiveLink = () => {
    let current = "";

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 180) current = section.id;
    });

    sidebarLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
});
