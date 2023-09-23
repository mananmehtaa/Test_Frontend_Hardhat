document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector(".footer");

    setTimeout(function() {
        footer.style.transition = "opacity 1s";
        footer.style.opacity = "1";
    }, 500);
});