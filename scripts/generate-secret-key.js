const crypto = require('crypto');

const secretKey = crypto.randomBytes(64).toString('hex'); // Generates a 64-byte (512-bit) random hex string
console.log(secretKey);