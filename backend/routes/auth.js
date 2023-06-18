//auth.js
const User = require('../models/User');
const express = require('express');
const router = express.Router();


//Creating Users And Posting Their Data On MongoDB


router.get('/', (req, res) => {
  const user = User(req.body);
  user.save();
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;

