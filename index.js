var express = require('express');
var cors = require('cors');
var multer = require('multer');
require('dotenv').config()

const upload = multer().single('upfile');

var app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', function(req, res) {
  upload(req, res, function(err) {
    if(err) {
      res.json({error: err});
      return;
    } else if(req.file === undefined || req.file === null) {
      res.json({error: "A file must be uploaded."});
      return;
    }

    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
