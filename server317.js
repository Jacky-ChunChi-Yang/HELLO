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

app.post('/insert', (req, res) => {
    connection.query(req.body, (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            res.status(500).send('Error inserting data');
        } else {
            console.log('Data inserted successfully:', result);
            res.status(200).send('Data inserted successfully');
        }
    });
});

app.post('/executeQuery', (req, res) => {
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
        res.status(200).send('Query executed successfully');
    });
});


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

console.log(message);
