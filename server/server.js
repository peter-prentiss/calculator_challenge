let express = require('express');
let app = express();
let path = require('path');
let port = 6969;
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
let calculateRouter = require('./routes/calculate.js');
app.use('/calculate', calculateRouter);

app.get('/*', function(req, res) {
  let file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
