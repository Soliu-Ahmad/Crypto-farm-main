
    module.exports = app => {
        const product = require("../controllers/product.controller.js");
    
        var router = require("express").Router();
    
        // Create a new Product
        router.post("/", product.create);
    
        // Retrieve all Product
        router.get("/", product.findAll);
    
        // Retrieve a single Product with id
        router.get("/:id", product.findOne);

        //get by category
        router.get("/category/:id", product.findByCategory)
    
        // Update a Product with id
        router.put("/:id", product.update);
    
        // Delete a Product with id
        router.delete("/:id", product.delete);
    
        app.use("/api/products", router);
    };
