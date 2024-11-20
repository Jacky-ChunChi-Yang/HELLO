// Gallery Functionality
let currentSlide = 0;

function updateGallery() {
    const slides = document.querySelectorAll(".gallery-item");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".gallery-item");
    currentSlide = (currentSlide + 1) % slides.length;
    updateGallery();
}

function prevSlide() {
    const slides = document.querySelectorAll(".gallery-item");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateGallery();
}

// Initialize gallery
document.addEventListener("DOMContentLoaded", () => {
    updateGallery();
});

document.addEventListener("DOMContentLoaded", () => {
    const packageSelect = document.querySelector("#package");
    const priceDisplay = document.querySelector(".product-info p");

    // Function to update price
    const updatePrice = () => {
        const selectedOption = packageSelect.value;
        let price;

        if (selectedOption === "weili single bowl") {
            price = 2.75; 
        } 
        else if (selectedOption === "weili pack") {
            price = 4.99; 
        }
        else if (selectedOption === "want Bag") {
            price = 8.75; 
        }
        else if (selectedOption === "uni noodle pack") {
            price = 2.00; 
        }
        else if (selectedOption === "tea single") {
            price = 3.25; 
        }
        else if (selectedOption === "puff single") {
            price = 3.25; 
        }
        else if (selectedOption === "puff box") {
            price = 9.00; 
        }
        else if (selectedOption === "pieapple cake Small") {
            price = 9.99; 
        }
        else if (selectedOption === "pieapple cake Mid") {
            price = 14.99; 
        }
        else if (selectedOption === "pieapple cake Large") {
            price = 27.99; 
        }
        else if (selectedOption === "pea Bag") {
            price = 2.99; 
        }
        else if (selectedOption === "one more single") {
            price = 2.50; 
        }
        else if (selectedOption === "one more pack") {
            price = 7.00; 
        }
        else if (selectedOption === "heysong Can") {
            price = 1.50; 
        }
        else if (selectedOption === "heysong pack") {
            price = 8.50; 
        }
        else if (selectedOption === "heysong Big Bottle") {
            price = 3.00; 
        }
        else if (selectedOption === "barleytea single") {
            price = 0.89; 
        }
        else if (selectedOption === "barleytea pack") {
            price = 5.25; 
        }
        else if (selectedOption === "barleytea box") {
            price = 19.99; 
        }
        else if (selectedOption === "barleytea big") {
            price = 5.50; 
        }
        else if (selectedOption === "apple soda Can") {
            price = 1.25; 
        }
        else if (selectedOption === "apple soda pack") {
            price = 5.99; 
        }
        else if (selectedOption === "apple soda Big Bottle") {
            price = 4.99; 
        }

        // Update the displayed price
        priceDisplay.textContent = `$${price.toFixed(2)}`;
    };

    // Add event listener for package selection change
    packageSelect.addEventListener("change", updatePrice);

    // Initialize the price display
    updatePrice();
});

// Add-to-Cart Functionality
document.querySelector(".add-to-cart").addEventListener("click", () => {
    const flavor = document.querySelector("#flavor").value;
    const packageOption = document.querySelector("#package").value;
    const quantity = parseInt(document.querySelector("#quantity").value);
    const messageContainer = document.querySelector("#message-container");

    // Clear any previous messages
    messageContainer.textContent = "";

    if (quantity <= 0 || isNaN(quantity) || quantity > 20) {
        messageContainer.textContent = "Please enter a valid quantity.";
        messageContainer.style.color = "red";
        return;
    }

    const cartCountElement = document.querySelector("nav a[href='cart.html']");
    const currentCartCount = parseInt(cartCountElement.textContent.match(/\d+/)[0]);
    const newCartCount = currentCartCount + quantity;

    // Update cart count in the navigation
    cartCountElement.textContent = `Cart (${newCartCount})`;

    // Display success message
    messageContainer.textContent = `Successfully added ${quantity} item(s) of ${packageOption} (${flavor}) to the cart.`;
    messageContainer.style.color = "green";
});
