const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(data);
});

module.exports = router;
