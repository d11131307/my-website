document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        block.addEventListener("mouseover", function() {
            block.style.transform = "scale(1.1)";
        });

        block.addEventListener("mouseout", function() {
            block.style.transform = "scale(1)";
        });
    });
});

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});
