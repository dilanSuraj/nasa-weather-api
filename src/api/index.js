const express = require('express');

const weather = require('./mars-weather');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/weather', weather);

module.exports = router;
