
    module.exports = app => {
        const transaction = require("../controllers/transaction.controller.js");
    
        var router = require("express").Router();
    
        // Create a new Transaction
        router.post("/", transaction.create);
    
        // Retrieve all Transaction
        router.get("/", transaction.findAll);
    
        // Retrieve a single Transaction with id
        router.get("/:id", transaction.findOne);

        router.get("/payment/:id", transaction.findOneByUser);
    
        // Update a Transaction with id
        router.put("/:id", transaction.update);

        // Update a Transaction with id
        router.post("/payment/:id", transaction.updatePayment);
    
        // Delete a Transaction with id
        router.delete("/:id", transaction.delete);
    
        app.use("/api/transactions", router);
    };
