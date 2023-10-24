exports.getAllProducts = (req,res) =>
{

    res.send("we are open")
    res.status(200).json({message:"Route is working"})
    // console.log("Router is Wroking Fine");
}