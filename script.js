const fallingContainer = document.querySelector(".falling-container");

function createFalling() {
  const img = document.createElement("img");

  // Randomly choose image
  img.src = Math.random() > 0.5 ? "assets/heart.png" : "assets/rose1.png";
  img.className = "falling";

  // Random position, rotation and speed
  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = 5 + Math.random() * 5 + "s";
  img.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Append and remove after it falls
  fallingContainer.appendChild(img);
  setTimeout(() => img.remove(), 10000);
}

// Generate falling items repeatedly
setInterval(createFalling, 680);
