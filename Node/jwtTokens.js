const jwt = require('jsonwebtoken');

const payload = {
  id: "12345",
  username: "Artist-dk",
  role: "admin"
};

const secretKey = "your_secret_key"; // Change this to a secure key
const options = {
  expiresIn: "1h" // Token expiration time
};

const token = jwt.sign(payload, secretKey, options);

console.log("Generated JWT Token:", token);


// Verify the JWT Token

const decoded = jwt.verify(token, secretKey);
console.log("Decoded Token:", decoded);
