const express = require('express');
const router = express.Router();
const validatorsData = require('../data/validators.json');


router.get('/', (req, res) => {
  const search = req.query.search?.toLowerCase() || '';
  const filtered = validatorsData.filter(v =>
    v.name.toLowerCase().includes(search)
  );
  res.json(filtered);
});

module.exports = router;
