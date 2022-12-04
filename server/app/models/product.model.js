
    //const bcrypt = require("bcrypt")
    module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            vendore_id: Number,
            name: String,
            sku: String,
            category: Number,
            available_qty: Number,
            purcahse_qty: Number,
            selling_price: String,
            description: String,
            photoUrl: String,
            createdAt: Date
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Product = mongoose.model("product", schema);
        return Product;
    };
