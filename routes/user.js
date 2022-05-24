const express        = require('express');
const router         = express.Router();
const userController = require('../controllers/user_controller');

console.log('user controller running');
router.get('/profile',userController.profile);
router.get('/login',userController.login);
router.get('/register',userController.register);
router.post('/create',userController.create);
router.post('/create-session',userController.create_session);

module.exports = router;