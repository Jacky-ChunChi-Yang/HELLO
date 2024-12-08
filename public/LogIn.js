document.onsubmit = (e) => {
    e.preventDefault()
    let pw = document.getElementById('password').value
    let un = document.getElementById('username').value
    let errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none'; 

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
            if(localStorage.getItem('id') > 0) {
                displayLogoutButton(); 
                window.location.href = '/index.html'
            }
            else {
                errorMessage.textContent = 'Invalid username or password.';
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayLogoutButton() {
    document.getElementById('logout-container').style.display = 'block';  
}

// logout
function logout() {
    localStorage.removeItem('id');  // remove ID
    window.location.href = '/login.html';  
}

// checking if user log in
window.onload = function() {
    if(localStorage.getItem('id') > 0) {
        displayLogoutButton();  // show log out button
    } 
    else {
        document.getElementById('logout-container').style.display = 'none';  
    }
};