
    //const bcrypt = require("bcrypt")
    module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            order_id: Number,
            user_id: Number,
            qty: Number,
            price: String,
            payment_status: Boolean,
            payment_log: String,
            createdAt: Date,
            user: {type: mongoose.Types.ObjectId, ref: "User"},
            product: {type: mongoose.Types.ObjectId, ref: "Product"}
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

   

    const Transaction = mongoose.model("transaction", schema);
        return Transaction;
    };
