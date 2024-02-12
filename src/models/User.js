const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
    Name: {type: String, required:true},
    number_Id: {type: Number, required:true},
    email: {type: String, required:true},
    address: {type: String, required:true},
    phone_Number: {type: Number, required:true},
    rol: {type: String, required:true},
},{
    timestamps: true,
    versionKey: false,
})

module.exports = model('User', userSchema);