const db = require("../models");
const Device = db.devices;
const Op = db.Sequelize.Op;
const categoryController = require("./category.controller");


// Create and Save a new Device
exports.create = (req, res) => {
    // Validate request
    if (!req.body.partNumber) {
        res.status(400).send({
            message: "Device must have a partNumber!"
        });
        return;
    }

    // Create a Device
    const device = {
        categoryId: req.body.categoryId ? req.body.categoryId : null,
        color: req.body.color ? req.body.color : null,
        partNumber: req.body.partNumber
    };

    // Save Device in the database
    Device.create(device)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Device."
            });
        });
};

// Retrieve all Devices from the database.
exports.findAll = (req, res) => {
    const partNumber = req.query.partNumber;
    var condition = partNumber ? { partNumber: { [Op.like]: `%${partNumber}%` } } : null;

    Device.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Devices."
            });
        });
};

// Find a single Device with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Device.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Device with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Device with id=" + id
            });
        });
};

// Update a Device by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Device.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Device was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Device with id=${id}. Maybe Device was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Device with id=" + id
            });
        });
};

// Delete a Device with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Device.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Device was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Device with id=${id}. Maybe Device was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Device with id=" + id
            });
        });
};

// Delete all Devices from the database.
exports.deleteAll = (req, res) => {
    Device.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Devices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Devices."
            });
        });
};