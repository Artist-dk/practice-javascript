const express = require('express');
const app = express();
const testRoutes = require('./routes/testRoutes.js');

app.use(express.json());
app.use('/api/test', testRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));