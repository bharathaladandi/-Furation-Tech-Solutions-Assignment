const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({

    title:{type:String, require:true},
    stock: {type:Number, default:190},
    cost: {type:Number, require:true},
    image: {type: String, require:true},
    category: {type: String, default:"other"},
    Descriptions: {type: String}
},

{
    timestamps: true,
});


const BookModel = mongoose.model("book", bookSchema);

module.exports = { BookModel }