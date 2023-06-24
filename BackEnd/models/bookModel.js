const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    Name:{type:String, require:true},
    stock: {type:Number, default:190},
    cost: {type:Number, require:true},
    image: {type: String, require:true},
    category: {type: String, default:"other"},
    Descriptions: {type: String}
})


const Productmodel = mongoose.model("book", productSchema);

module.exports = { Productmodel }