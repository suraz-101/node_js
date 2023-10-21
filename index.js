const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require("body-parser");
const port = 3200

app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.json());

app.get('/', (req, res) => {
    console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.post('/api/v1/register', (req,res) =>
  {
     const name = req.body.name;
     const username = req.username;
     const password = req.password;
    res.send({
        success:true,
        name : name,
        username : username,
        password : password,
    });
  });

//  app.get("/api/v1/getusers", (req,res) =>{
//      res.json({
//          name:"suraj",
//          username: "suraj123",
//          password:"suraj23rs",
//      });
//  });





app.listen(port, () =>
{
    console.log(`The port in which server is running is ${port}`)
})

