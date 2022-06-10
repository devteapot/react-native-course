require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoURI = 'mongodb+srv://admin:<password>@cluster0.26yoqbn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
