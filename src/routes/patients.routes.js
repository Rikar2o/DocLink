const { Router } = require('express');

const router = Router();

const patientsControllers = require('../controllers/patients')

// CRUD
 
router.get('/', patientsControllers.getPatients);
router.post('/', patientsControllers.createPatient);
router.get('/:id', patientsControllers.getPatient);
router.put('/:id', patientsControllers.editPatient);
router.delete('/:id', patientsControllers.deletePatient);

module.exports = router