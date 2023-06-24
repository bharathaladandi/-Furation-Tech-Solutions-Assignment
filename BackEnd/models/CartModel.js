

const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema({

    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
    quantity: {
        type: Number,
        min: 1,
        require: true
    }

},

    {
        timestamps: true,
    });

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart