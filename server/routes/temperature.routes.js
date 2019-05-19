module.exports = (app) => {
    const temperature = require('../controllers/temperature.controller.js');

    app.post('/temperature', temperature.create);

    app.get('/temperatures',  temperature.findAll);

    app.delete('/temperature/:temperatureId', temperature.delete);

    return app;
}