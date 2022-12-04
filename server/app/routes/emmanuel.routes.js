
    module.exports = app => {
        const emmanuel = require("../controllers/emmanuel.controller.js");
    
        var router = require("express").Router();
    
        // Create a new Emmanuel
        router.post("/", emmanuel.create);
    
        // Retrieve all Emmanuel
        router.get("/", emmanuel.findAll);
    
        // Retrieve a single Emmanuel with id
        router.get("/:id", emmanuel.findOne);
    
        // Update a Emmanuel with id
        router.put("/:id", emmanuel.update);
    
        // Delete a Emmanuel with id
        router.delete("/:id", emmanuel.delete);
    
        app.use("/api/emmanuels", router);
    };
