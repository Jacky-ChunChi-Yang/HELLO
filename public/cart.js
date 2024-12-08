let prod = document.getElementById("prod")
let totalAmount = 0;

fetch('http://localhost:3000/executeQuery', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `select * from cart_item where user_id = ${localStorage.getItem('id')}`
    })
})
    .then(response => response.text())
    .then(data => {
        console.error('succ:', data);
        console.log("1", data)
        layout(JSON.parse(data))
    })
    .catch(error => {
        console.error('Error:', error);
    });

    function layout(data) {
        data.forEach(item => {
            console.log("it", item)
            fetch('http://localhost:3000/executeQuery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `select * from products where product_id = ${item.product_id}`
                })
            })
            .then(response => response.text())
            .then(dat => {
                dat = JSON.parse(dat)         
                dat = dat[0]
                console.log("dat", dat)
                console.error('succ:', dat);
                let card = prod.cloneNode(true)
                prod.parentElement.insertBefore(card, prod)
                card.firstElementChild.src = dat.image_url
                card.firstElementChild.nextElementSibling.innerHTML = dat.product_flavor
                card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = dat.product_package
                card.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = `Quantity: ${item.quantity}`
                
                // Add Remove Button
                let removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.style.marginTop = "10px";
                card.appendChild(removeButton);
    
                // Add Remove Button Event Listener
                removeButton.addEventListener("click", () => {
                    removeItemFromCart(item.user_id,item.product_id, card, dat.price * item.quantity);
                });
    
                card.style.display = "flex"
                totalAmount += dat.price * item.quantity;
                localStorage.setItem('totalAmount', totalAmount); 
                displayTotalAmount();
            })     
            .catch(error => {
                console.error('Error:', error);
            });
        })
    }
    
    function removeItemFromCart(userId, productId, cardElement, itemTotal) {
        // Send DELETE request or an equivalent SQL query
        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `DELETE FROM cart_item WHERE user_id = ${userId} and product_id = ${productId} `
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log("Item removed successfully:", data);
            // Remove item card from the UI
            cardElement.remove();
            // Update the total amount
            totalAmount -= itemTotal;
            displayTotalAmount();
        })
        .catch(error => {
            console.error('Error while removing item:', error);
        });
    }
    
function displayTotalAmount() {
    let totalDisplay = document.getElementById("totalAmountDisplay");
    if (!totalDisplay) {
        totalDisplay = document.createElement("div");
        totalDisplay.id = "totalAmountDisplay";
        totalDisplay.style.fontSize = "large";
        totalDisplay.style.marginTop = "20px";
        totalDisplay.style.textAlign = "center";
        prod.parentElement.appendChild(totalDisplay);
    }
    totalDisplay.innerHTML = `Total Amount: $${totalAmount.toFixed(2)}`;
}
