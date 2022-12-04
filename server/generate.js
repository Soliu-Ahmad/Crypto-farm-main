#!/usr/bin/env node
var fs=require("fs");
const readline = require('readline');

var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

console.log("Arguments: ",argv.model)


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}



const controllerStructure=`
    const db = require("../models");
    const moment=require("moment");
    const helper=require("../utils/helper")
    const ${titleCase(argv.model)} = db.${argv.model}s;

    // Create and Save a new ${titleCase(argv.model)}
    exports.create = async (req, res) => {
        // Validate request
        
        const ${argv.model}Obj=req.body;
        // Save ${titleCase(argv.model)} in the database
        var ${argv.model}Model = new ${titleCase(argv.model)}(${argv.model}Obj);
        ${argv.model}Model
          .save(${argv.model}Obj)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the ${argv.model}."
            });
          });
    }

    // Get all records from ${titleCase(argv.model)}
    exports.findAll = async (req, res) => {
        ${titleCase(argv.model)}.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving ${titleCase(argv.model)}."
            });
        });
    }

    // Get one records from ${titleCase(argv.model)}
    exports.findOne = async (req, res) => {
        const id = req.params.id;

        ${titleCase(argv.model)}.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found ${titleCase(argv.model)} with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving ${titleCase(argv.model)} with id=" + id });
            });
    }

    // update a record in ${titleCase(argv.model)}
    exports.update = async (req, res) => {
        if (!req.body) {
            return res.status(400).send({
              message: "Data to update can not be empty!"
            });
        }
    
        const id = req.params.id;
    
        ${titleCase(argv.model)}.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: \`Cannot update ${titleCase(argv.model)} with id=\${id}. Maybe ${titleCase(argv.model)} was not found!\`
            });
            } else res.send({ message: "${titleCase(argv.model)} was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating ${titleCase(argv.model)} with id=" + id
            });
        });
    }

    // delete a record from ${titleCase(argv.model)}
    exports.delete = async (req, res) => {
        const id = req.params.id;

        ${titleCase(argv.model)}.findByIdAndRemove(id, { useFindAndModify: false })
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: \`Cannot delete ${titleCase(argv.model)} with id=\${id}. Maybe ${titleCase(argv.model)} was not found!\`
                });
            } else {
                res.send({
                    message: "${titleCase(argv.model)} was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vendor with id=" + id
            });
        });
    }
`;
const modelStructure=`
    //const bcrypt = require("bcrypt")
    module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            createdAt: Date
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    /*schema.pre("save", function (next) {
        const user = this
    
        if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
            return next(saltError)
            } else {
            bcrypt.hash(user.password, salt, function(hashError, hash) {
                if (hashError) {
                return next(hashError)
                }
    
                user.password = hash
                next()
            })
            }
        })
        } else {
        return next()
        }
    })*/

    const ${titleCase(argv.model)} = mongoose.model("${argv.model}", schema);
        return ${titleCase(argv.model)};
    };
`;
const routeStructure=`
    module.exports = app => {
        const ${argv.model} = require("../controllers/${argv.model}.controller.js");
    
        var router = require("express").Router();
    
        // Create a new ${titleCase(argv.model)}
        router.post("/", ${argv.model}.create);
    
        // Retrieve all ${titleCase(argv.model)}
        router.get("/", ${argv.model}.findAll);
    
        // Retrieve a single ${titleCase(argv.model)} with id
        router.get("/:id", ${argv.model}.findOne);
    
        // Update a ${titleCase(argv.model)} with id
        router.put("/:id", ${argv.model}.update);
    
        // Delete a ${titleCase(argv.model)} with id
        router.delete("/:id", ${argv.model}.delete);
    
        app.use("/api/${argv.model}s", router);
    };
`;
const filesToGenerate={
    model: `./app/models/${argv.model}.model.js`,
    route: `./app/routes/${argv.model}.routes.js`,
    controller: `./app/controllers/${argv.model}.controller.js`,
}

const fileKeys=Object.keys(filesToGenerate)
for(var ln in fileKeys){
    console.log(`Generating ${filesToGenerate[fileKeys[ln]]} file`);
    var writeStream = fs.createWriteStream(filesToGenerate[fileKeys[ln]]);

    if(fileKeys[ln]==='model'){
        writeStream.write(modelStructure);

        fs.readFile('./app/models/index.js', function(err, data) {
            if(err) throw err;
            
            var data = data.toString().split("\n");
            data[data.length] = data[data.length-1];
            data[data.length-2] =`db.${argv.model}s = require("./${argv.model}.model.js")(mongoose);`;
            var text = data.join("\n");
            fs.writeFile('./app/models/index.js', text, function (err) {
                if (err) return console.log(err);
            });
        });
        
    }
    
    if(fileKeys[ln]==='controller'){
        writeStream.write(controllerStructure);
    }

    if(fileKeys[ln]==='route'){
        writeStream.write(routeStructure);
    }
    console.log(`Done writing ${fileKeys[ln]}!!!.`);
    writeStream.end();
}



