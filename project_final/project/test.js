const images = ["img/banner1.jpg", "img/banner2.jpg", "img/detail.jpg", "img/book.jpg"];
let currentIndex = 0;

// Function to show the next image in the slideshow
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}

// Change image every 4 seconds
setInterval(showNextImage, 4000);

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons within elements of class 'book-item'
    const buttons = document.querySelectorAll('.book-item button');

    // Initialize cart count
    let cartCount = 0;
    // Array to hold cart items
    let cartItems = [];

    // Function to display cart items in the 'main-cart' element
    function displayCartItems() {
        const cartContainer = document.getElementById('main-cart');
        cartContainer.innerHTML = ''; // Clear existing items

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="item-details">
                    <h3>${item.title}</h3>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
            `;
            cartContainer.appendChild(cartItemElement);
        });
    }

    // Function to handle button click
    function handleButtonClick(event) {
        // Find the closest .book-item ancestor of the clicked button
        const bookItem = event.target.closest('.book-item');

        if (bookItem) {
            // Select all <p> elements within the .book-item
            const paragraphs = bookItem.querySelectorAll('p');
            // Collect the text content of each <p> element
            const data = Array.from(paragraphs).map(p => p.textContent);

            // Extract the necessary details (assuming the structure of the book item)
            const title = data[0]; // Adjust according to actual position
            const quantity = 1; // Default quantity
            const price = parseFloat(data[1].replace('$', '')); // Assuming price is in the second <p>
            const imgSrc = bookItem.querySelector('img').src; // Get the image source

            // Add item to cart
            cartItems.push({ title, quantity, price, imgSrc });
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;

            // Display updated cart items
            displayCartItems();
        }
    }

    // Add event listeners to all "Add to Cart" buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
