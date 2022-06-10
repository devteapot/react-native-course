const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });

  user
    .save()
    .then((savedUser) => {
      const token = jwt.sign({ userId: savedUser._id }, 'MY_SECRET_KEY');

      res.send({ token });
    })
    .catch((err) => {
      res
        .status(422)
        .send(err.message);
      return;
    });
});

module.exports = router;
