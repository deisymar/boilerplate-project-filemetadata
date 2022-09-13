var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let objFile = {}
  //const { originalname: name, mimetype: type, size } = req.file;
  objFile['name'] = req.file.originalname
  objFile['type'] = req.file.mimetype
  objFile['size'] = req.file.size

  //res.json({ name, type, size });
  //console.log(objFile);
  res.json(objFile)
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
