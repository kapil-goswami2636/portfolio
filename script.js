// ===== Night Mode Toggle =====
const toggle = document.querySelector(".theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  toggle.innerHTML = document.body.classList.contains("night")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// ===== Fade-in on Scroll =====
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// ===== Typing Effect =====
const typedText = document.querySelector("#intro .tagline");
const text =
  "🚀 I work with Node.js, Express.js, and MongoDB to build modern, secure web solutions.";
let idx = 0;
function typing() {
  if (idx < text.length) {
    typedText.innerHTML += text[idx];
    idx++;
    setTimeout(typing, 50);
  }
}
typing();

// ===== Hamburger Menu =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));

// ===== Back to Top =====
const backToTop = document.createElement("div");
backToTop.id = "backTop";
backToTop.innerHTML = "⬆";
document.body.appendChild(backToTop);
backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
window.addEventListener("scroll", () => {
  backToTop.style.opacity = window.scrollY > 400 ? 1 : 0;
});

// ===== Cursor Trail =====
const cursor = document.createElement("div");
cursor.id = "cursorTrail";
document.body.appendChild(cursor);
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
