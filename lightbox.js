// GALLERY JS
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
    if (!relatedImages[category]) return; // Prevent errors if category is invalid

    currentCategory = category;
    currentIndex = 0;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const relatedContainer = document.getElementById("related-images");

    if (!lightbox || !lightboxImg || !relatedContainer) return; // Check elements exist

    lightbox.style.display = "flex";
    updateLightboxImage();

    // Clear previous related images
    relatedContainer.innerHTML = "";

    // Generate related images
    relatedImages[currentCategory].forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Related Image ${index + 1}`;
        img.loading = "lazy"; // Improve performance
        img.onclick = () => {
            currentIndex = index;
            updateLightboxImage();
        };
        relatedContainer.appendChild(img);
    });

    preloadImages();
}

function preloadImages() {
    relatedImages[currentCategory].forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function nextImage(event) {
    event.stopPropagation();
    if (!relatedImages[currentCategory]) return;

    currentIndex = (currentIndex + 1) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function prevImage(event) {
    event.stopPropagation();
    if (!relatedImages[currentCategory]) return;

    currentIndex = (currentIndex - 1 + relatedImages[currentCategory].length) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg && relatedImages[currentCategory]) {
        lightboxImg.src = relatedImages[currentCategory][currentIndex];
        lightboxImg.onerror = () => console.error("Error loading image:", lightboxImg.src);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}
