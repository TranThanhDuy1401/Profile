const images = document.querySelectorAll(".thuvienanh");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Click vào ảnh
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("show");
        modalImg.src = img.src;
    });
});

// Click nút X
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Click nền đen để đóng
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// Nhấn ESC để đóng
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
});