
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const Transaction = db.transactions;

    // Create and Save a new Transaction
    exports.create = async (req, res) => {
        // Validate request
        
        const transactionObj=req.body;
        // Save Transaction in the database
        var transactionModel = new Transaction(transactionObj);
        transactionModel
          .save(transactionObj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the transaction."
            });
          });
    }

    // Get all records from Transaction
    exports.findAll = async (req, res) => {
        Transaction.find({}).populate(["user", "product"])
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Transaction."
            });
        });
    }

    // Get one records from Transaction
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        Transaction.findById(id).populate(["user", "product"])
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Transaction with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Transaction with id=" + id });
            });
    }

    // Get one records from Transaction
    exports.findOneByUser = async (req, res) => {
        const id = req.params.id;

        Transaction.find({user_id: id}).populate(["user", "product"])
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Transaction with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Transaction with id=" + id });
            });
    }

    // update a record in Transaction
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        Transaction.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found!`
            });
            } else res.send({ message: "Transaction was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Transaction with id=" + id
            });
        });
    }

    // delete a record from Transaction
    exports.delete = async (req, res) => {
        const id = req.params.id;

        Transaction.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`
                });
            } else {
                res.send({
                    message: "Transaction was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
     // update a record in Transaction
     exports.updatePayment = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
        console.log(req.body.status)
        Transaction.findByIdAndUpdate(id, {payment_log: JSON.stringify(req.body), payment_status: (req.body.status=='successful')?true: false}, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found!`
            });
            } else res.send({ message: "Payment was updated successfully." });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
            message: "Error updating Transaction with id=" + id
            });
        });
    }