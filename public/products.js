let add = document.getElementById('addCart')
let package = document.getElementById('package')
let flavor = document.getElementById('flavor')
let quant = document.getElementById('quantity').value

add.onclick = (e) => {
    if (localStorage.getItem('id') > 0) {
        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `select * from cart_item where user_id = ${localStorage.getItem('id')} and product_id = (select product_id from products where upper(product_flavor) = upper('${flavor.value}') and upper(product_package) = upper('${package.value}'))`
            })
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                if (data.length>2) updateitem()
                else additem()
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
function additem() {
    fetch('http://localhost:3000/executeQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `insert into cart_item (user_id, product_id, quantity) VALUES (${localStorage.getItem('id')}, (select product_id from products where upper(product_flavor) = upper('${flavor.value}') and upper(product_package) = upper('${package.value}')), ${document.getElementById('quantity').value})`
        })
    })
        .then(response => response.text())
        .then(data => {
            console.log('add:', data);
            })
        .catch(error => {
            console.error('Error:', error);
        });
}


function updateitem() {
    fetch('http://localhost:3000/executeQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `update cart_item set quantity=quantity+${document.getElementById('quantity').value} where user_id = ${localStorage.getItem('id')} and product_id = (select product_id from products where upper(product_flavor) = upper('${flavor.value}') and upper(product_package) = upper('${package.value}'))`
        })
    })
        .then(response => response.text())
        .then(data => {
            console.log('update:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
