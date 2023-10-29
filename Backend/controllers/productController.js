
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

   const {name, username, password} = req.body;
   if(!name || !username || !password)
   {
       res.status(400);
       throw new Error("All fields are mandatory!");
   }
   res.status(201).json({mesasge: "contact has been created"});

}

const updateProduct = (req,res) =>
{
    res.status(200).json({message:`The product is updated of ${req.params.id}`});
}

module.exports = {getAllProducts, createProduct, updateProduct}