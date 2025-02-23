document.addEventListener("DOMContentLoaded", function () {
  const episodeList = document.querySelector(".episode-list");
  let isHovering = false;

  episodeList.addEventListener("mouseenter", () => {
    isHovering = true;
    episodeList.style.animationPlayState = "paused";
  });

  episodeList.addEventListener("mouseleave", () => {
    isHovering = false;
    episodeList.style.animationPlayState = "running";
  });

  document.querySelectorAll(".favorite-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
});
