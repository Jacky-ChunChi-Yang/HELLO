document.onsubmit = (e) => {
    e.preventDefault()
    if (document.getElementById('password').value === document.getElementById('password_check').value) {console.log('pass')
    var sql = `INSERT INTO Users (first_name,last_name,username,password_hash) VALUES ("${document.getElementById('fname').value}","${document.getElementById('lname').value}","${document.getElementById('username').value}","${document.getElementById('password').value}")`
    const sqlQuery = sql;

            fetch('http://localhost:3000/executeQuery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: sqlQuery })  // Send the query as a JSON string
            })
            .then(response => response.text())  // Get the response text from the server
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/login.html'
            })
            .catch(error => {
                console.error('Error:', error);
            });

}
    else{
        let errorMessage = document.getElementById('error-message'); 
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
    }
}