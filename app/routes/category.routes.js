module.exports = app => {
    const categories = require("../controllers/category.controller.js");

    var router = require("express").Router();

    // Create a new Categories
    router.post("/categories", categories.create);

    // Retrieve all Categories
    router.get("/categories", categories.findAll);
    
    // Retrieve a single Category with id
    router.get("/categories/:id", categories.findOne);

    // Update a Category with id
    router.put("/categories/:id", categories.update);

    // Delete a Category with id
    router.delete("/categories/:id", categories.delete);

    // Delete all Categories
    router.delete("/categories", categories.deleteAll);

    app.use('/api/devicemanagement', router);
};