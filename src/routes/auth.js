const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/auth');
const { login } = require('../controllers/auth');

router.post('/login', login);

router.use(authenticateUser);

module.exports = router;