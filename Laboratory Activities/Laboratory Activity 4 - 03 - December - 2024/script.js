document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-slide-in").forEach((section) => {
    observer.observe(section);
  });

  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
