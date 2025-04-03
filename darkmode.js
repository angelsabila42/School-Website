
 //Function for the dark mode
 document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const icon = document.getElementById('themeIcon');
    const rootElement = document.documentElement;
  
    // Initialize theme from localStorage (or system preference)
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    // Apply dark mode if enabled in localStorage or system preference (if no localStorage)
    if (savedTheme === 'enabled' || (!savedTheme && prefersDark)) {
        rootElement.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun'); // Show sun in dark mode
    }
  
    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        const isDark = rootElement.classList.toggle('dark-mode');
  
        // Update icon and localStorage
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
  });