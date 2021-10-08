module.exports = app => {
    const devices = require("../controllers/device.controller.js");

    var router = require("express").Router();

    // Create a new devices
    router.post("/devices", devices.create);

    // Retrieve all devices
    router.get("/devices", devices.findAll);
    
    // Retrieve a single Category with id
    router.get("/devices/:id", devices.findOne);

    // Update a Category with id
    router.put("/devices/:id", devices.update);

    // Delete a Category with id
    router.delete("/devices/:id", devices.delete);

    // Delete all devices
    router.delete("/devices", devices.deleteAll);

    app.use('/api/devicemanagement', router);
};