document.onsubmit = (e) => {
    e.preventDefault()

    var order = `INSERT INTO Orders (user_id,total_amount,shipping_address,billing_address) VALUES ("${localStorage.getItem('id')}","${localStorage.getItem('totalAmount')}","${document.getElementById('Shipping_address').value} ${document.getElementById('Shipping_address2').value} ${document.getElementById('Shipping_city').value} ${document.getElementById('Shipping_state').value} ${document.getElementById('Shipping_zipcode').value}","${document.getElementById('billing_address').value} ${document.getElementById('billing_address2').value} ${document.getElementById('billing_city').value} ${document.getElementById('billing_state').value} ${document.getElementById('billing_zipcode').value}")`
    
    // var orderdetail = `INSERT INTO OrderDetails (order_id,product_id,quantity,price) VALUES ((SELECT MAX(order_id) FROM Orders),"${document.getElementById('').value}","${document.getElementById('').value}","${document.getElementById('').value}")`
    var shipping = `INSERT INTO ShippingInfo (order_id,first_name,last_name,address_1,address_2,city,state,zip_code,phone_number) VALUES ((SELECT MAX(order_id) FROM Orders),"${document.getElementById('Shipping_fname').value}","${document.getElementById('Shipping_lname').value}","${document.getElementById('Shipping_address').value}","${document.getElementById('Shipping_address2').value}","${document.getElementById('Shipping_city').value}","${document.getElementById('Shipping_state').value}","${document.getElementById('Shipping_zipcode').value}","${document.getElementById('phone').value}")`
    var payments = `INSERT INTO Transactions (order_id,card_number,expiration_date,cvv,card_holder_name) VALUES ((SELECT MAX(order_id) FROM Orders),"${document.getElementById('cardnumber').value}","${document.getElementById('expirationdate').value}","${document.getElementById('cvc').value}","${document.getElementById('cardname').value}")`
    
        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: order }) // Send the query as a JSON string
        })
        .then(response => response.text())  // Get the response text from the server
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: shipping }) // Send the query as a JSON string
        })
        .then(response => response.text())  // Get the response text from the server
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: payments }) // Send the query as a JSON string
        })
        .then(response => response.text())  // Get the response text from the server
        .then(data => {
            console.log('Success:', data);
            window.location.href = '/index.html'
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
