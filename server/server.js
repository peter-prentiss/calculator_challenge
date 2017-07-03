const express = require('express');
const app = express();
const path = require('path');
const port = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const calculateRouter = require('./routes/calculate.js');
app.use('/calculate', calculateRouter);

app.get('/*', (req, res) => {
  let file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(port, () => console.log('Server running on port', port));
