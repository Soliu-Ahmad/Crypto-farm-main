
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const Emmanuel = db.emmanuels;

    // Create and Save a new Emmanuel
    exports.create = async (req, res) => {
        // Validate request
        
        const emmanuelObj=req.body;
        // Save Emmanuel in the database
        var emmanuelModel = new Emmanuel(emmanuelObj);
        emmanuelModel
          .save(emmanuelObj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the emmanuel."
            });
          });
    }

    // Get all records from Emmanuel
    exports.findAll = async (req, res) => {
        Emmanuel.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Emmanuel."
            });
        });
    }

    // Get one records from Emmanuel
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        Emmanuel.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Emmanuel with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Emmanuel with id=" + id });
            });
    }

    // update a record in Emmanuel
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        Emmanuel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Emmanuel with id=${id}. Maybe Emmanuel was not found!`
            });
            } else res.send({ message: "Emmanuel was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Emmanuel with id=" + id
            });
        });
    }

    // delete a record from Emmanuel
    exports.delete = async (req, res) => {
        const id = req.params.id;

        Emmanuel.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Emmanuel with id=${id}. Maybe Emmanuel was not found!`
                });
            } else {
                res.send({
                    message: "Emmanuel was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
