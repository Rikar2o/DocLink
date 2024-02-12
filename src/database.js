const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-patients')
    .then(db => console.log('Base de datos Conectada'))
    .catch(err => console.error(err))