const images = ["img/banner1.jpg", "img/banner2.jpg", "img/detail.jpg","img/book.jpg"];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}

setInterval(showNextImage, 4000); // Change image every 4 seconds

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons within elements of class 'book-item'
    const buttons = document.querySelectorAll('.book-item button');

    // Iterate over each button and add a click event listener
    var car_count = 0;
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            car_count++;
            document.getElementById('cart-count').textContent = car_count;
        });
    });
    
});

// Function to handle button click
function handleButtonClick(event) {
    // Find the closest .book-item ancestor of the clicked button
    const bookItem = event.target.closest('.book-item');

    if (bookItem) {
        // Select all <p> elements within the .book-item
        const paragraphs = bookItem.querySelectorAll('p');
        // Collect and log the text content of each <p> element
        var count = 0;
        var data = [];
        paragraphs.forEach(p => {
            data[count] = p.textContent;
            count++;
            // console.log(p.textContent);
            console.log(typeof p.textContent);
        });
        return data;
    }
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.book-item button').forEach(button => {
    button.addEventListener('click', function (e){
        var bookItem = handleButtonClick(e);
        console.log(bookItem);
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('cart.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-cart').innerHTML = `hi`;
            // You can now manipulate the loaded HTML content if needed
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
});