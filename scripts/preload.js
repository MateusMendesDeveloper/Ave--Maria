window.addEventListener("DOMContentLoaded", () => {
    const fill = document.querySelector(".progress-fill");
    fill.addEventListener("animationend", () => {
        document.getElementById("preload").style.display = "none";
        document.body.style.overflow = "auto";
    });
});