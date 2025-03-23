document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const blocks = document.querySelectorAll(".block");

    // ✅ 選單開關
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("open"); // 切換選單開關
        });
    }

    // ✅ 區塊 hover 放大效果
    blocks.forEach(block => {
        block.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        block.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
