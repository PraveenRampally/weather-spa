const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    temperature : Number,
    createDate: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Temperature', TemperatureSchema);