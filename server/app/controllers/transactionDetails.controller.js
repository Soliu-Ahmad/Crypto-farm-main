
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const Transactiondetails = db.transactionDetailss;

    // Create and Save a new Transactiondetails
    exports.create = async (req, res) => {
        // Validate request
        
        const transactionDetailsObj=req.body;
        // Save Transactiondetails in the database
        var transactionDetailsModel = new Transactiondetails(transactionDetailsObj);
        transactionDetailsModel
          .save(transactionDetailsObj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the transactionDetails."
            });
          });
    }

    // Get all records from Transactiondetails
    exports.findAll = async (req, res) => {
        Transactiondetails.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Transactiondetails."
            });
        });
    }

    // Get one records from Transactiondetails
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        Transactiondetails.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Transactiondetails with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Transactiondetails with id=" + id });
            });
    }

    // update a record in Transactiondetails
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        Transactiondetails.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Transactiondetails with id=${id}. Maybe Transactiondetails was not found!`
            });
            } else res.send({ message: "Transactiondetails was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Transactiondetails with id=" + id
            });
        });
    }

    // delete a record from Transactiondetails
    exports.delete = async (req, res) => {
        const id = req.params.id;

        Transactiondetails.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Transactiondetails with id=${id}. Maybe Transactiondetails was not found!`
                });
            } else {
                res.send({
                    message: "Transactiondetails was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
