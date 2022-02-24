const express = require('express');

const user = require('./user');
const people = require('./people');

const router = express();

router.use(user);
router.use(people);

module.exports = router;
