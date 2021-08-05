const express = require('express');
const router = express.Router();

const questionNumber = require('../controller/question');

/* GET home page. */
router.get('/', questionNumber.sendQsTo);

router.get('/check', questionNumber.sendCheckTo);

module.exports = router;
