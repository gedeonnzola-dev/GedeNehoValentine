const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const prStatus = document.getElementById("prStatus");
const title = document.getElementById("title");
const statusLine = document.getElementById("statusLine");
const confetti = document.getElementById("confetti");

const openNoteBtn = document.getElementById("openNoteBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalYesBtn = document.getElementById("modalYesBtn");

/** ---------- Confetti ---------- */
function popConfetti() {
  confetti.innerHTML = "";
  const pieces = 140;

  for (let i = 0; i < pieces; i++) {
    const s = document.createElement("span");
    const left = Math.random() * 100;
    const delay = Math.random() * 0.25;
    const size = 8 + Math.random() * 12;
    const hue = 315 + Math.random() * 35; // romantic pink range

    s.style.left = left + "vw";
    s.style.animationDelay = delay + "s";
    s.style.width = Math.max(6, size * 0.55) + "px";
    s.style.height = size + "px";
    s.style.background = `hsl(${hue}, 95%, 65%)`;

    confetti.appendChild(s);
  }

  setTimeout(() => (confetti.innerHTML = ""), 2600);
}

/** ---------- Romantic "Merge" ---------- */
let merged = false;
function doMerge() {
  if (merged) return;
  merged = true;

  prStatus.textContent = "Merged 💞";
  prStatus.style.color = "var(--green)";
  prStatus.style.background = "rgba(49,208,127,.12)";

  title.textContent = "Merged into my heart 💖";

  statusLine.innerHTML =
    `<span class="mono">Checks:</span> ` +
    `<span class="ok">●</span> love approved ` +
    `<span class="sep">•</span> ` +
    `<span class="ok">●</span> date scheduled ` +
    `<span class="sep">•</span> ` +
    `<span class="ok">●</span> happiness deployed`;

  popConfetti();

  // Soft glow pulse
  document.body.animate(
    [
      { filter: "brightness(1)" },
      { filter: "brightness(1.06)" },
      { filter: "brightness(1)" }
    ],
    { duration: 900, iterations: 1 }
  );

  // Auto-open the note after merge (feels like a "surprise")
  setTimeout(() => showModal(true), 400);
}

/** ---------- “No” button (romantic, not annoying) ---------- */
const noLines = [
  "Totally fair. I’ll retry with more flowers. 🌸",
  "Noted. I’ll refactor my courage and resubmit softly. 💗",
  "Okay… I’ll come back with a better plan and a warmer smile. 😊",
  "Request received. I’ll improve the proposal and try again. 🫶"
];

let noCount = 0;
noBtn.addEventListener("click", () => {
  noCount++;

  // gentle scoot once or twice (not chaotic)
  const x = (Math.random() * 80) - 40;
  const y = (Math.random() * 30) - 15;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  setTimeout(() => (noBtn.style.transform = ""), 160);

  const msg = noLines[Math.min(noCount - 1, noLines.length - 1)];
  statusLine.textContent = msg;

  // Keep it romantic: after 4 tries, stop moving and just be sweet
  if (noCount >= 4) {
    noBtn.style.transform = "";
    statusLine.textContent = "No pressure. I just really like you. 💖";
  }
});

/** ---------- Slideshow ---------- */
const slideImg = document.getElementById("slideImg");
const captionTitle = document.getElementById("captionTitle");
const captionSub = document.getElementById("captionSub");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsWrap = document.getElementById("dots");

const slides = [
  { src: "assets/photo1.jpg", title: "commit: you made my day brighter", sub: "hash: 0214-love" },
  { src: "assets/photo2.jpg", title: "feat: my favourite person update", sub: "hash: you-are-it" },
  { src: "assets/photo3.jpg", title: "chore: save this memory forever", sub: "hash: soft-vibes" },
];

let idx = 0;
let timer = null;

function renderDots() {
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = i === idx ? "active" : "";
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });
}

function goTo(i) {
  idx = (i + slides.length) % slides.length;
  slideImg.style.opacity = "0.25";

  setTimeout(() => {
    slideImg.src = slides[idx].src;
    captionTitle.textContent = slides[idx].title;
    captionSub.textContent = slides[idx].sub;
    renderDots();
    slideImg.style.opacity = "1";
  }, 180);
}

function next() { goTo(idx + 1); }
function prev() { goTo(idx - 1); }

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// Auto-advance
function startAuto() {
  stopAuto();
  timer = setInterval(next, 4500);
}
function stopAuto() {
  if (timer) clearInterval(timer);
  timer = null;
}

slideImg.addEventListener("mouseenter", stopAuto);
slideImg.addEventListener("mouseleave", startAuto);

renderDots();
startAuto();

/** ---------- Modal ---------- */
function showModal(open) {
  if (open) {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  } else {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
}

openNoteBtn.addEventListener("click", () => showModal(true));
closeModalBtn.addEventListener("click", () => showModal(false));
modalCloseBtn.addEventListener("click", () => showModal(false));

modal.addEventListener("click", (e) => {
  if (e.target === modal) showModal(false);
});

modalYesBtn.addEventListener("click", () => {
  showModal(false);
  doMerge();
});

/** ---------- Merge buttons ---------- */
yesBtn.addEventListener("click", doMerge);

/** ---------- Keyboard niceties ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") showModal(false);
  if (e.key.toLowerCase() === "m") doMerge(); // “m” for merge
});
