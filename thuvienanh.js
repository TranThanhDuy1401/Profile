const images = document.querySelectorAll(".thuvienanh"); // biến images = lấy toàn bộ ảnh có class .thuvienanh
const modal = document.getElementById("imageModal");  // biến modal = div của khung chứa ảnh chế độ full screen
const modalImg = document.getElementById("modalImg"); // biến modalImg = hình ảnh được hiện lên ở chế độ full screen
const closeBtn = document.querySelector(".close"); // nút X đóng ảnh

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