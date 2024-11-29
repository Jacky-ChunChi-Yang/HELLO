var message = 'CSC-317 startup template\n'
    + 'This template uses nodeJS, express, and express.static\n';

var port = 3000;
var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs');
var mysql = require('mysql2');

var StaticDirectory = path.join(__dirname, 'public');

// Set up MySQL connection
var connection = mysql.createConnection({
    host: 'localhost',    // or your database host
    user: 'root',
    password: 'chichi77',
    database: 'mydatabase'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to MySQL:', err.stack);
        return;
    }
    console.log('connected to MySQL as id ' + connection.threadId);
});

app.use(express.static(StaticDirectory));
app.use(express.json());

// Example API endpoint to query MySQL
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM Products', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Error querying database');
        } else {
            res.json(results);  // Send MySQL results as JSON to the client
        }
    });
});

app.post('/login', (req, res) => {
    let username = req.body.un
    
    let r = -1
    connection.query(`select password_hash, user_id from users where username = "${username}"`, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error executing query');
        }
        // console.log((result[0].password_hash === req.body.pw), req.body.pw, result[0].password_hash)
        if (result[0]?.password_hash === req.body.pw) {
            r = result[0].user_id
            console.log(r)
        }
        // console.log(r)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ id: r }));
    });
    
});

app.post('/executeQuery', (req, res) => {
    console.log(req)
    const sqlQuery = req.body.query;  // Extract the query string from the request body
    if (!sqlQuery) {
        return res.status(400).send('No query provided');
    }

    // Execute the SQL query sent in the request
    connection.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error executing query');
        }

        console.log('Query executed successfully:', result);
        res.status(200).send(result);
    });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

console.log(message);