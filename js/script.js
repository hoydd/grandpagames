const galleryImages = document.querySelectorAll(".game-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

let currentIndex = 0;

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

if (galleryImages.length > 0 && lightbox && lightboxImg && prev && next) {
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    function showImage() {
        lightboxImg.classList.add("fade-out");

        setTimeout(() => {
            lightboxImg.src = galleryImages[currentIndex].src;
            lightboxImg.classList.remove("fade-out");
        }, 300);
    }

    next.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();
    });

    prev.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

