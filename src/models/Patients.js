const {Schema, model} = require('mongoose');

const patienstSchema = new Schema ({
    expedient: {type: String, required:true},
    Name: {type: String, required:true},
    number_Id: {type: Number, required:true},
    age: {type: Number, required:true},
    symptoms: {type: String, required:true},
    address: {type: String, required:true},
    phone_Number: {type: Number, required:true},
    copay: {type: Number, required:true},
    time: {type: Number, required:true},
    insurance_Policy: {type: String, required:true},
},{
    timestamps: true,
    versionKey: false,
})

module.exports = model('Patients', patienstSchema);