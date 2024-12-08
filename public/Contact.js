document.onsubmit = (e) => {
    e.preventDefault()

    var problems = `INSERT INTO Problems (customer_name,customer_email,questions) VALUES ("${document.getElementById('name').value}","${document.getElementById('email').value}","${document.getElementById('questions').value}")`
    
        fetch('http://localhost:3000/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: problems }) // Send the query as a JSON string
        })
        .then(response => response.text())  // Get the response text from the server
        .then(data => {
            console.log('Success:', data);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
