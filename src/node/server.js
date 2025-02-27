require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// // MySQL Connection Setup
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASS || '',
//     database: process.env.DB_NAME || 'test_db'
// });

// // Connect to MySQL
// db.connect(err => {
//     if (err) {
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// // Sample API Endpoint
// app.get('/', (req, res) => {
//     res.send('Express Server with MySQL is Running!');
// });




const bcrypt = require('bcrypt');

const password = "Hack@1234";

let obj = new Object();

const hashAndCheckPassword = async () => {
    try {
        // Hash the password
        obj.hash = await bcrypt.hash(password, 12);
        console.log("Hashed Password:", obj.hash);

        // Compare entered password with hashed password
        const match = await bcrypt.compare(password, obj.hash);

        if (match) {
            console.log('Login successful! ✅');
        } else {
            console.log('Invalid password ❌');
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


setTimeout(async () => {
    
    try {
        console.log("SECOND")
        console.log("Hashed Password:", obj.hash);

        // Compare entered password with hashed password
        const match = await bcrypt.compare(password, obj.hash);

        if (match) {
            console.log('Login successful! ✅');
        } else {
            console.log('Invalid password ❌');
        }
    } catch (error) {
        console.error("Error:", error);
    }

}, 3000);

// Call the function
hashAndCheckPassword();

// authenticate();




















// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
