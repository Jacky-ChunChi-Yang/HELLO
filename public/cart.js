let prod = document.getElementById("prod")

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
        // item = item[0]
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
            prod.parentElement.appendChild(card)
            card.firstElementChild.src = dat.image_url
            card.firstElementChild.nextElementSibling.innerHTML = dat.product_flavor
            card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = dat.product_package
            card.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = item.quantity
            card.style.display = "flex"
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
}