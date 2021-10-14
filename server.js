const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 4567;
console.log(`WEB APLICATION IS RUNNING IN PORT: ${PORT}`)
app.listen(port);