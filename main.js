    const cards = document.querySelectorAll(".feature-card");
    const revealOnScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    document.addEventListener("mousemove", (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) * 0.01;
      const offsetY = (e.clientY - centerY) * 0.01;
      cards.forEach((card, i) => {
        if (card.classList.contains("visible")) {
          card.style.transform = `translate(${offsetX * (i % 2 === 0 ? 1 : -1)}px, ${offsetY}px) scale(1)`;
        }
      });
    });