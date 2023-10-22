const express = require("express")
const app = express();
const port = 4000;
app.get("/", (req,res) =>{
    res.send(`The api is running on ${port}`)
    console.log("server is running  " );

})



app.listen(port, (res,req)=>{
    console.log(`The running port is http://localhost ${port}`);
})