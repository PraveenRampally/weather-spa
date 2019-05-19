const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/temperatures', {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(express.static('dist'));

const router = express.Router();
const apiRouter = require('./routes/temperature.routes.js');

app.use('/api', (apiRouter)(router));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});