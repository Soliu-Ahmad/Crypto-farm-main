
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const Product = db.products;

    // Create and Save a new Product
    exports.create = async (req, res) => {
        // Validate request
        
        const productObj=req.body;
        // Save Product in the database
        var productModel = new Product(productObj);
        productModel
          .save(productObj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the product."
            });
          });
    }

    // Get all records from Product
    exports.findAll = async (req, res) => {
        Product.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Product."
            });
        });
    }

    // Get one records from Product
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        Product.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Product with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
            });
    }

    // Get one records from Product
    exports.findByCategory = async (req, res) => {
        const id = req.params.id;

        Product.find({category: id})
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Product with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
            });
    }

    // update a record in Product
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Product with id=${id}. Maybe Product was not found!`
            });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Product with id=" + id
            });
        });
    }

    // delete a record from Product
    exports.delete = async (req, res) => {
        const id = req.params.id;

        Product.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
