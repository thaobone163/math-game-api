const express = require('express');
const router = express.Router();

const questionNumber = require('../controller/question');

/* GET home page. */
router.post('/', questionNumber.sendQsTo);

router.post('/check', questionNumber.sendCheckTo);

module.exports = router;
