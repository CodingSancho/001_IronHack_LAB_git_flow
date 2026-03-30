console.log("JS is connected! 🚀");

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "🌙" : "☀️";
});
