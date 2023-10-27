
// //@desc Get All Products
// //@route Get /api/v1/products
// //@access public

//Fetching all the products from database
const getAllProducts = (req,res) =>
{
    res.status(200).json({message:"Route is working"});
}

//creating new product into the database
const createProduct = (req,res) =>
{
   console.log("The request body is : ", req.body);
   res.status(201).json({mesasge: "contact has been created"});

}

module.exports = {getAllProducts, createProduct}