function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/*const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

// Initial mode
let isDarkMode = true;

toggleButton.addEventListener("click", () => {
  // Toggle the light or dark mode class on the body
  body.classList.toggle("light-mode", !isDarkMode);
  body.classList.toggle("dark-mode", isDarkMode);

  // Update the button text
  toggleButton.textContent = isDarkMode ? "Switch to Dark Mode" : "Switch to Light Mode";

  // Toggle the mode state
  isDarkMode = !isDarkMode;
}); */
