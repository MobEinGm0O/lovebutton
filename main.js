document.getElementById("loveButton").addEventListener("click", () => {
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement("div");
        particle.textContent = "I LOVE YOU :3";
        particle.className = "particle";

        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;

        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 100000);
    }
});
