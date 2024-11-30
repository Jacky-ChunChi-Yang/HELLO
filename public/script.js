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

        if (selectedOption === "Single bowl ($2.75)") {//weili
            price = 2.75; 
        } 
        else if (selectedOption === "Pack of 4 ($4.99)") {//weili
            price = 4.99; 
        }
        else if (selectedOption === "Single ($3.25)") {//puff
            price = 3.25; 
        }
        else if (selectedOption === "box for 3 ($9.00)") {//puff
            price = 9.00; 
        }
        else if (selectedOption === "Pack of 6 ($9.99)") {//pineapple cake
            price = 9.99; 
        }
        else if (selectedOption === "Pack of 9 ($14.99)") {//pineapple cake
            price = 14.99; 
        }
        else if (selectedOption === "Pack of 12 ($27.99)") {//pineapple cake
            price = 27.99; 
        }
        else if (selectedOption === "Single ($2.5)") {//one more
            price = 2.50; 
        }
        else if (selectedOption === "Pack of 3 ($7.00)") {//one more
            price = 7.00; 
        }
        else if (selectedOption === "Can ($1.50)") {//heysong
            price = 1.50; 
        }
        else if (selectedOption === "Pack of 6 ($8.5)") {//heysong
            price = 8.50; 
        }
        else if (selectedOption === "Big Bottle ($3)") {//heysong
            price = 3.00; 
        }
        else if (selectedOption === "Single ($0.89)") {//barleytea
            price = 0.89; 
        }
        else if (selectedOption === "Pack of 6 ($5.25)k") {//barleytea
            price = 5.25; 
        }
        else if (selectedOption === "Box of 24 ($19.99)") {//barleytea
            price = 19.99; 
        }
        else if (selectedOption === "Big bottle ($5.50)") {//barleytea
            price = 5.50; 
        }
        else if (selectedOption === "Can ($1.25)") {//apple soda
            price = 1.25; 
        }
        else if (selectedOption === "Pack of 6 cans ($5.99)") {//apple soda
            price = 5.99; 
        }
        else if (selectedOption === "Big Bottle ($4.99)") {//apple soda
            price = 4.99; 
        }

        // Update the displayed price
        priceDisplay.textContent = `${price.toFixed(2)}`;
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

    // Display success message
    messageContainer.textContent = `Successfully added ${quantity} item(s) of ${packageOption} (${flavor}) to the cart.`;
    messageContainer.style.color = "green";
});
