document.onsubmit = (e) => {
    e.preventDefault()
    let pw = document.getElementById('password').value
    let un = document.getElementById('username').value

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pw: pw, un: un })  // Send the query as a JSON string
    })
        .then(response => response.text())  // Get the response text from the server
        .then(data => {
            localStorage.setItem('id', JSON.parse(data).id); 
            if(localStorage.getItem('id') > 0) window.location.href = '/index.html'
        })
        .catch(error => {
            console.error('Error:', error);
        });
}