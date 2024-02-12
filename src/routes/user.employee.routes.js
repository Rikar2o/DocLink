const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/user.employee');

// CRUD
router.get('/', userControllers.getUsers);
router.post('/', userControllers.createUser);
router.get('/:id', userControllers.getUserById); 
router.put('/:id', userControllers.editUserById);
router.delete('/:id', userControllers.deleteUserById);

module.exports = router;

