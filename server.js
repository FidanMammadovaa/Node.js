const multer = require('multer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('myfiles[]'), (req, res) => {
    const files = req.files

    console.log(files);
    // files.forEach((file) => {
    //     if (file) {
    //         res.send('File uploaded')
    //     }
    //     else
    //     {
    //         res.send("Error")
    //     }
    // })
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(PORT + ' works');
});
