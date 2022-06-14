const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router  = express.Router();

router.use(requireAuth);

router.get('/tracks', (req, res) => {
  const { user } = req;

  Track
    .find({ userId: user._id })
    .then((tracks) => res.send(tracks));
});

router.post('/tracks', (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: 'You must provide a name and locations' })
  }

  const track = new Track({ name, locations, userId: req.user._id })
  track
    .save()
    .then((savedTrack) => res.send(savedTrack))
    .catch((err) => 
      res
        .status(422)
        .send({ error: err.message })
    );
});

module.exports = router;
