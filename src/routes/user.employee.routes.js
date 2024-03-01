const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/user.employee');

// CRUD
router.get('/signin', userControllers.getUsers);
router.post('/signup', userControllers.createUser);
router.get('/:id', userControllers.getUserById); 
router.put('/:id', userControllers.editUserById);
router.delete('/:id', userControllers.deleteUserById);

module.exports = router;

