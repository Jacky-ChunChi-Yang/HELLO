document.onsubmit = (e) => {
    e.preventDefault()
    var shipping = `INSERT INTO ShippingInfo (first_name,last_name,address_1,address_2,city,state,zip_code,phone_number) VALUES ("${document.getElementById('fname').value}","${document.getElementById('lname').value}","${document.getElementById('address').value}","${document.getElementById('address2').value}","${document.getElementById('city').value}","${document.getElementById('state').value}","${document.getElementById('zipcode').value}","${document.getElementById('phone').value}")`
    var payments = `INSERT INTO Transactions (card_number,expiration_date,cvv,card_holder_name) VALUES ("${document.getElementById('cardnumber').value}","${document.getElementById('expirationdate').value}","${document.getElementById('cvc').value}","${document.getElementById('cardname').value}")`
    
    
}
