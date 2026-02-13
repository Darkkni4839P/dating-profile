function startExperience() {
    document.getElementById("bgMusic").play();

    // SHOW MAIN CONTENT
    document.getElementById("mainContent").classList.remove("hidden");

    // Scroll down
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

function proposal() {
    launchConfetti();

    setTimeout(() => {
        document.getElementById("successScreen").classList.add("active");
    }, 800);
}
function restart() {
    location.reload();
}

function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
/* Dynamic Floating Hearts */

setInterval(() => {
    let heart = document.createElement("span");
    const hearts = ["🖤", "💛", "✨"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}, 500);