const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, './dist/index.html')));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT);
console.log(`listening at http://localhost:${PORT}`);
