const {Router} = require("express");

const BookRouter = Router();

const {BookModel} = require("../models/bookModel");



//GET Method 

BookRouter.get("/all" , async (req, res) => {
try{
    const getProduct = await BookModel.Find()
    res.status(200).send(getProduct)
}
catch(e){
    res.status(400).send(e.message);
    console.log(e.message);
}
})





// GET books based on page || category  || title

BookRouter.get("/", async(req, res) => {

    const { page, category, title } = req.query;
    const perpage = (page - 1 ) * 10

    try {

        let BookData;

        if(category){
            BookData = await Productmodel.find({category}).skip(perpage || 0).limit(10)
        }
        else if(title){
            BookData = await Productmodel.find({title}).skip(perpage || 0).limit(10)
        }
        else if(category && title){
            BookData = await Productmodel.find({category, title}).skip(perpage || 0).limit(10)
        }
        else{
            BookData = await BookModel.find().skip(perpage || 0).limit(10)
        }
        res.status(200).send(BookData);        
    } catch (error) {
        
        console.log(error.message);
    }
})

BookRouter.get("/:category", async(req, res) => {

    const {limit= 10, page= 1} = req.query;

    let { category } = req.params;

    try {
        let products = await BookModel.find({category: category}).limit(12).skip((page-1) * limit);
        
    } catch (error) {
        console.log(error.message);
    }
})

// GET bookd based on search and apply filter based on q && page || category || title

BookRouter.get("/search", async (req, res) => {

    const {q, page, category, title} = req.query

    const perpage = (page - 1 ) * 10;

    try {

        let AllData;

        if(category){
            AllData = await BookModel.find({title: new RegExp(q, "i"), category,}).skip(perpage || 0).limit(10)
        }
        else if(title){
            AllData = await BookModel.find({title: new RegExp(q, "i"), title}).skip(perpage || 0).limit(10)
        }
        else if(category && title){
            AllData = await BookModel.find({title: new RegExp(q, "i"), category, title}).skip(perpage || 0).limit(10)
        }
        else{
            AllData = await BookModel.find({title: new RegExp(q, "i")}).skip(perpage || 0).limit(10)
        }

        res.status(200).send(AllData);
        
    } catch (error) {
        
        console.log(error.message);
    }
})


module.exports = {BookRouter}