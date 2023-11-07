// app.js
const express = require('express');
const pokeneaRoutes = require('./pokeneaRoutes');
const app = express();
const port = 80;

app.use('/pokenea', pokeneaRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
