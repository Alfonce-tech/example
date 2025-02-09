// Lazy Loading Effect for Images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".small-box img");

    function handleScroll() {
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});