document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

    // 滑鼠移入區塊時放大
    document.querySelectorAll(".block").forEach(block => {
        block.addEventListener("mouseover", function() {
            block.style.transform = "scale(1.1)";
        });

        block.addEventListener("mouseout", function() {
            block.style.transform = "scale(1)";
        });
    });
});
