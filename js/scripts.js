document.addEventListener("DOMContentLoaded", () => {
  let tween = gsap
    .to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    })
    .totalProgress(0.5);

  gsap.set(".marquee__inner", {
    xPercent: -50,
  });

  // Optioneel, voor een leuk extra effect de marquee scroll richting veranderen
  let currentScroll = 0;
  let isScrollingDown = true;

  window.addEventListener("scroll", () => {
    if (window.scrollY > currentScroll) {
      isScrollingDown = true;
    } else {
      isScrollingDown = false;
    }

    gsap.to(tween, {
      timeScale: isScrollingDown ? 1 : -1,
    });

    currentScroll = window.scrollY;
  });
});
