const toggle = document.getElementById("themeToggle");

document.body.setAttribute("data-theme", "dark");
toggle.textContent = "🌙";

toggle.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
});
