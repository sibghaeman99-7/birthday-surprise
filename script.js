function startCelebration() {
  const name = document.getElementById("userName").value;
  if (!name) {
    alert("Please enter a name first!");
    return;
  }

  // Set greeting text
  document.getElementById("greeting").innerText = "🎉 Happy Birthday, " + name + "! 🎂";
  
  // Hide welcome screen and show celebration screen
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("celebration-screen").classList.remove("hidden");

  // Fire Party Poppers instantly
  popConfetti();
  
  // Play Music
  const music = document.getElementById("bg-music");
  music.play().catch(() => console.log("Autoplay blocked, use music button"));
}

function popConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function blowCandle() {
  const flame = document.getElementById("flame");
  if (!flame.classList.contains("off")) {
    flame.classList.add("off");
    popConfetti();
    alert("Yaaay! Wish made & Candle blown! 🎈✨");
  }
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
