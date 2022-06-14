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

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Must provide email and password' })
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .send({ error: 'Invalid password or email' })
  }

  user.comparePasswords(password)
    .then(() => {
      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');

      res.send({ token });
    })
    .catch(() => 
      res
        .status(422)
        .send({ error: "Invalid password or email" })
    )
});

module.exports = router;
