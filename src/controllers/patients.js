const patientsControllers = {};

const Patients = require('../models/Patients')

patientsControllers.getPatients = async (req, res) => {
    const patients = await Patients.find();
    res.json(patients)
}
patientsControllers.createPatient = async (req, res) => {
    const newPatient = new Patients(req.body);

    await  newPatient.save();

    res.send({message: 'Patient created'});
}

patientsControllers.getPatient = async (req, res) => {
    const patient = await Patients.findById(req.params.id)
    res.send(patient);

}

patientsControllers.editPatient = async (req, res) => {
    try {
        // Verificar si el paciente existe
        const patient = await Patients.findById(req.params.id, req.body);
        if (!patient) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        
        // Actualizar la información del paciente
        await Patients.findByIdAndUpdate(req.params.id, req.body);
        
        res.json({ status: 'Información del paciente actualizada' });
    } catch (error) {
        // Manejar errores
        console.error('Error al actualizar paciente:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

patientsControllers.deletePatient = async (req, res) => {
    const patient = await Patients.findByIdAndDelete(req.params.id)
    res.json({status: 'patient Deleted'});
}

module.exports = patientsControllers