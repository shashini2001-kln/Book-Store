const images = ["img/banner1.jpg", "img/banner2.jpg", "img/detail.jpg","img/book.jpg"];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}

setInterval(showNextImage, 4000); // Change image every 4 seconds

// let cartCount = 0;

// function addToCart() {
//     cartCount++;
//     document.getElementById('cart-count').textContent = cartCount;
// }
//
// // Example: Attach the addToCart function to the 'Add to Cart' button.
// document.querySelectorAll('.add-to-cart-button').forEach(button => {
//     button.addEventListener('click', addToCart);
// });
//
// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('cartCount')) {
//         cartCount = parseInt(localStorage.getItem('cartCount'), 10);
//         document.getElementById('cart-count').textContent = cartCount;
//     }
// });
//
// function addToCart() {
//     cartCount++;
//     document.getElementById('cart-count').textContent = cartCount;
//     localStorage.setItem('cartCount', cartCount);
// }

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons within elements of class 'book-item'
    const buttons = document.querySelectorAll('.book-item button');

    // Iterate over each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Please login First');
            window.location.href = 'userlogin.html';
        });
    });
    const cart_icon = document.getElementById('cart-icon');
    cart_icon.addEventListener('click', function() {
        alert('Please login First');
        window.location.href = 'userlogin.html';
    })
});

