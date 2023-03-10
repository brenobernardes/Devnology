const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const host = process.env.host;
const port = process.env.port;
const user = process.env.user;
const password = process.env.password;

const databaseName = "links";
const databaseTable = "url";

const db = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password
})

// Connecting to database
db.connect((err)  => {
    if(err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to database");
    }

    // Create new database if needed
    db.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, function (err) {
        if (err) throw err;
    })

    db.query(`USE ${databaseName}`, (err) => {
        if(err) throw err;
    })

    db.query(`CREATE TABLE IF NOT EXISTS ${databaseTable} (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        title VARCHAR(255), 
        url VARCHAR(255), 
        description VARCHAR(255)
        )`, function (err) {
            if (err) throw err;
    })
})

app.use(express.json());
app.use(cors());

// Saving data on database
app.post("/register" , (req, res) => {
    const { title, url, description } = req.body;

    let saveData = `INSERT INTO ${databaseTable} (title, url, description) VALUES (?, ?, ?)`;

    db.query(saveData, [title, url, description], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})

// Updating data
app.put("/edit", (req, res) => {
    const { id, title, url, description } = req.body;

    let updateData = `UPDATE ${databaseTable} SET title = ?, url = ?, description = ? WHERE id = ?`;
    db.query(updateData, [title, url, description, id], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})

// Deleting data from database
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const deleteData = `DELETE FROM ${databaseTable} WHERE id = ?`;

    db.query(deleteData, id, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})

// Returning data from database
app.get("/return", (req, res) => {
    const returnData = `SELECT * FROM ${databaseTable}`;

    db.query(returnData, (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})

//Searching data
app.get("/search", (req, res) => {
    const searchData = `SELECT * FROM ${databaseTable} WHERE id LIKE ? OR title LIKE ? OR url LIKE ? OR description LIKE ?`;
    const { id, title, url, description } = req.body;

    db.query(searchData, [`%${id}%`, `%${title}%`, `%${url}%`, `%${description}%`], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("server rodando")
});