const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const host = process.env.host;
const port = process.env.port;
const user = process.env.user;
const password = process.env.password;

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

    const dbName = "links";

    // Create new database if needed
    db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, function (err) {
        if (err) throw err;
    })

    db.query(`USE ${dbName}`, (err) => {
        if(err) throw err;
    })

    const dbTable = "url";

    db.query(`CREATE TABLE IF NOT EXISTS ${dbTable} (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        title VARCHAR(255), 
        url VARCHAR(255), 
        description VARCHAR(255)
        )`, function (err) {
            if (err) throw err;
    })
})