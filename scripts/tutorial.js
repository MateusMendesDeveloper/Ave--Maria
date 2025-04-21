let currentSlide = 0;
let slides = [];

window.addEventListener("DOMContentLoaded", () => {
    const fill = document.querySelector(".progress-fill");

    if (!fill) return;

    fill.addEventListener("animationend", () => {
        const preload = document.getElementById("preload");
        const tutorial = document.getElementById("tutorial");

        if (preload) {
            preload.style.display = "none";
            document.body.style.overflow = "auto";
        }

        // Inicia o tutorial após o preload desaparecer
        slides = Array.from(document.querySelectorAll(".tutorial-slide"));
        if (tutorial) {
            tutorial.style.display = "flex";
            showSlide(currentSlide);
        }
    });
});

function showSlide(index) {
    if (!slides.length || index >= slides.length) {
        endTutorial();
        return;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
    });

    const percent = ((index + 1) / slides.length) * 100;
    const progress = document.getElementById("progress-fill");

    if (progress) {
        progress.style.width = `${percent}%`;
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    } else {
        endTutorial();
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function skipTutorial() {
    endTutorial();
}

function endTutorial() {
    const tutorial = document.getElementById("tutorial");
    if (tutorial) {
        tutorial.style.display = "none";
    }
}

function mostrarTutorial() {
    const tutorial = document.getElementById("tutorial");
    if (tutorial) {
        tutorial.style.display = "flex";
        currentSlide = 0;
        showSlide(currentSlide);
    }
}
