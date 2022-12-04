
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const Category = db.categorys;

    // Create and Save a new Category
    exports.create = async (req, res) => {
        // Validate request
        
        const categoryObj=req.body;
        // Save Category in the database
        var categoryModel = new Category(categoryObj);
        categoryModel
          .save(categoryObj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the category."
            });
          });
    }

    // Get all records from Category
    exports.findAll = async (req, res) => {
        Category.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Category."
            });
        });
    }

    // Get one records from Category
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        Category.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Category with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Category with id=" + id });
            });
    }

    // update a record in Category
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot update Category with id=${id}. Maybe Category was not found!`
            });
            } else res.send({ message: "Category was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Category with id=" + id
            });
        });
    }

    // delete a record from Category
    exports.delete = async (req, res) => {
        const id = req.params.id;

        Category.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
                });
            } else {
                res.send({
                    message: "Category was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
