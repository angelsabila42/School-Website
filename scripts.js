
//GALLERY JS//
const relatedImages = {
    school: [
        'Images/sl1.PNG',
        'Images/picture2.jpg',
        'Images/s12.PNG',
        'Images/picture4.jpg',
        'Images/sl5.PNG',
        'Images/schoollifenew.jpg',
        'Images/sl6.PNG',
        'Images/picture1.jpg',
        'Images/chapel.jpg',
        'Images/slnew.jpg'
    ],
    cultural: [
        'Images/cd5.PNG',
        'Images/cd4.PNG',
        'Images/cd3.PNG',
        'Images/cd2.PNG',
        'Images/cd6.PNG',
        'Images/cd7.PNG',
        'Images/cd9.PNG'
    ],
    prom: [
        'Images/prom.PNG',
        'Images/prom1.PNG',
        'Images/prom2.PNG',
        'Images/prom3.PNG',
        'Images/prom4.PNG',
        'Images/prom5.PNG',
        'Images/prom6.PNG',
        'Images/prom7.PNG',
        'Images/prom8.PNG',
        'Images/prom10.PNG',
        'Images/prom11.PNG',
        'Images/prom12.PNG',
        'Images/prom13.PNG'
    ],
    clubs: [
        'Images/clubs1.PNG',
        'Images/clubs2.PNG',
        'Images/clubs3.PNG',
        'Images/clubs4.PNG',
        'Images/clubs5.PNG',
        'Images/clubs6.PNG'
    ],
    sports: [
        'Images/sportsday.jpg',
        'Images/swimming.jpeg',
        'Images/sports.jpg',
        'Images/lacrosse2.jpg',
        'Images/lacrosse.jpg',
        'Images/hockey2.webp',
        'Images/hockey.jpg'
    ]
};

let currentIndex = 0; 
let currentCategory = '';

function openLightbox(category) {
    currentCategory = category; // Set category
    currentIndex = 0; // Start with the first image

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const relatedContainer = document.getElementById("related-images");

    if (!relatedImages[currentCategory]) return; // Prevent errors if category is missing

    console.log("Lightbox opened with:", relatedImages[currentCategory]); 
    lightbox.style.display = "flex";
    lightboxImg.src = relatedImages[currentCategory][currentIndex]; 

    relatedContainer.innerHTML = "";
    relatedImages[currentCategory].forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => {
            currentIndex = index; // Update index when clicking related images
            lightboxImg.src = src;
        };
        relatedContainer.appendChild(img);
    });
}

function nextImage(event) {
    event.stopPropagation(); // Prevent lightbox from closing
    if (!relatedImages[currentCategory]) return; 
    currentIndex = (currentIndex + 1) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function prevImage(event) {
    event.stopPropagation(); // Prevent lightbox from closing
    if (!relatedImages[currentCategory]) return;
    currentIndex = (currentIndex - 1 + relatedImages[currentCategory].length) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = relatedImages[currentCategory][currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



//DARK MODE//


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

//HAMBURGER//
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    if (hamburger && navMenu) { // Ensure elements exist
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active"); // Show or hide menu
        });
    } else {
        console.error("Hamburger menu or navbar list not found.");
    }
});
