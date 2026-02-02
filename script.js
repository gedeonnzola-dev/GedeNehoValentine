const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const statusPill = document.getElementById("statusPill");
const hint = document.getElementById("hint");
const confetti = document.getElementById("confetti");

function popConfetti() {
  confetti.innerHTML = "";
  const pieces = 120;

  for (let i = 0; i < pieces; i++) {
    const s = document.createElement("span");
    const left = Math.random() * 100;
    const delay = Math.random() * 0.25;
    const size = 8 + Math.random() * 10;

    s.style.left = left + "vw";
    s.style.animationDelay = delay + "s";
    s.style.width = Math.max(6, size * 0.55) + "px";
    s.style.height = size + "px";
    s.style.background = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;

    confetti.appendChild(s);
  }

  // cleanup
  setTimeout(() => (confetti.innerHTML = ""), 2500);
}

yesBtn.addEventListener("click", () => {
  statusPill.textContent = "Merged ✅";
  statusPill.classList.remove("pending", "changes");
  statusPill.classList.add("merged");

  hint.innerHTML = "Result: <strong>Valentine branch merged into main</strong> 💞";
  popConfetti();
});

const noLines = [
  "Noted. Creating follow-up issue: ‘Convince you with snacks.’ 🍫",
  "Request received. Adding new commit: ‘Try again but cuter.’ 🥹",
  "Okay… opening PR #15: ‘Please reconsider (very respectfully).’ 🙏",
  "Understood. Rolling back… but keeping a tiny crush in cache. 🧠💗",
  "Changes requested. I will refactor my courage and resubmit. 🛠️"
];

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  statusPill.textContent = "Changes Requested ❌";
  statusPill.classList.remove("pending", "merged");
  statusPill.classList.add("changes");

  const msg = noLines[Math.min(noCount - 1, noLines.length - 1)];
  hint.textContent = msg;

  // Make the No button scoot a little after a couple clicks (playful)
  if (noCount >= 2) {
    const x = (Math.random() * 140) - 70;
    const y = (Math.random() * 60) - 30;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    setTimeout(() => (noBtn.style.transform = ""), 180);
  }
});
