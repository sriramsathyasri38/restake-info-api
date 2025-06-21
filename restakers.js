const express = require('express');
const router = express.Router();
const restakersService = require('../services/restakersService');

router.get('/', async (req, res) => {
  try {
    const data = await restakersService.getRestakers();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
});

module.exports = router;
