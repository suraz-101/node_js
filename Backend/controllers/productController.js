
// //@desc Get All Products
// //@route Get /api/v1/products
// //@access public

const getAllProducts = (req,res) =>
{

    // res.send("we are open")
    res.status(200).json({message:"Route is working"});
    // console.log("Router is Wroking Fine");
}

module.exports = {getAllProducts}