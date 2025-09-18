  const cards = document.querySelectorAll(".feature-card");
    const orbitRadius = 320;

    cards.forEach(card => {
      const angle = parseFloat(card.dataset.angle) * (Math.PI / 180);
      const x = Math.cos(angle) * orbitRadius;
      const y = Math.sin(angle) * orbitRadius;
      card.style.left = `calc(50% + ${x}px - 110px)`; 
      card.style.top = `calc(50% + ${y}px - 80px)`;

      const connector = document.createElement("div");
      connector.classList.add("connector");
      const centerX = 400, centerY = 400;
      const cardX = 400 + x, cardY = 400 + y;
      const length = Math.sqrt((cardX-centerX)**2 + (cardY-centerY)**2);
      connector.style.height = length + "px";
      connector.style.left = centerX + "px";
      connector.style.top = centerY + "px";
      const angleDeg = Math.atan2(cardY-centerY, cardX-centerX) * (180/Math.PI) + 90;
      connector.style.transform = `rotate(${angleDeg}deg)`;
      document.querySelector(".features-section").appendChild(connector);
    });

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
      const offsetX = (e.clientX / window.innerWidth - 0.5) * 10;
      const offsetY = (e.clientY / window.innerHeight - 0.5) * 10;
      document.querySelector(".orbit").style.transform = `translate(-50%, -50%) rotate(${offsetX}deg)`;
    });