document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".block");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // 滑鼠移入區塊時放大
    blocks.forEach(block => {
        block.addEventListener("mouseover", function() {
            block.style.transform = "scale(1.1)";
        });

        block.addEventListener("mouseout", function() {
            block.style.transform = "scale(1)";
        });
    });

    // ✅ 修正選單的點擊事件
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            menu.classList.toggle("open"); // 確保與 CSS 一致
        });
    }
});
