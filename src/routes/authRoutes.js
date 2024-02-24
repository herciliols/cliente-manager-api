const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/authMiddleware');
const { login } = require('../controllers/authController');

router.post('/login', login);

router.use(authenticateUser);

module.exports = router;