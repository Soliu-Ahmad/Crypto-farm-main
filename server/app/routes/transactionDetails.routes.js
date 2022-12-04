
    module.exports = app => {
        const transactionDetails = require("../controllers/transactionDetails.controller.js");
    
        var router = require("express").Router();
    
        // Create a new Transactiondetails
        router.post("/", transactionDetails.create);
    
        // Retrieve all Transactiondetails
        router.get("/", transactionDetails.findAll);
    
        // Retrieve a single Transactiondetails with id
        router.get("/:id", transactionDetails.findOne);
    
        // Update a Transactiondetails with id
        router.put("/:id", transactionDetails.update);
    
        // Delete a Transactiondetails with id
        router.delete("/:id", transactionDetails.delete);
    
        app.use("/api/transaction-details", router);
    };
