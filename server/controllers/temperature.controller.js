const Temperature = require('../models/temperature.model.js');

exports.create = (req,res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Temperature cannot be empty"
        });
    }

    const temperature = new Temperature({
        temperature: req.body.temperature
    });

    temperature.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating Temperature."
        });
    });
};

exports.findAll = (req, res) => {
    Temperature.find()
    .then(temperatures => {
        res.send(temperatures);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving temperatures."
        });
    });
};

exports.delete = (req,res) => {
    Temperature.findByIdAndRemove(req.params.temperatureId).then(
        (temperature) => {
            if(!temperature) {
                return res.status(404).send({
                    message: "Temperature not found with id " + req.params.temperatureId
                });
            }
            res.send({message: "Temperature deleted successfully!"});
        }
    ).catch( err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Temperature not found with id " + req.params.temperatureId
            }); 
        }
        return res.status(500).send({
            message: "Could not delete temperature with id " + req.params.temperatureId
        });
    });
};