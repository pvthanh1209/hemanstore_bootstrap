// Đổi ảnh chính khi click thumbnail
const thumbnails = document.querySelectorAll('.thumb-image');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
    });
});

// Tăng/giảm số lượng
function increaseQuantity() {
    const input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Chọn size
const sizeButtons = document.querySelectorAll('.size-btn');
let selectedSize = null;

sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeButtons.forEach(b => {
            b.classList.remove('btn-danger');
            b.classList.add('btn-outline-secondary');
        });
        btn.classList.remove('btn-outline-secondary');
        btn.classList.add('btn-danger');
        selectedSize = btn.textContent;
        console.log("Đã chọn size:", selectedSize);
    });
});


const stars = document.querySelectorAll('#star-rating .fa-star');
const ratingValue = document.getElementById('rating-value');
let rating = 0;

// Click vào sao để chọn
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1; // Cập nhật rating theo sao được click
        updateRating();
    });
});

// Cập nhật màu sao theo rating
function updateRating() {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active'); // Thêm class active để sao được tô vàng
        } else {
            star.classList.remove('active'); // Bỏ class active cho các sao chưa được chọn
        }
    });
    ratingValue.textContent = `Bạn đã chọn ${rating} sao`; // Hiển thị số sao đã chọn
}