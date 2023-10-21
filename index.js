const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require("body-parser");
const port = 3200

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
    console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.post('/api/v1/register', (req,res) =>
  {
     console.log(req.body);
        res.send(`It is Done Mr. ${req.body.name} and your username is ${req.body.username}`);
        
  });

  app.get('/api/v1/getusers',(res,req) =>{

    console.log("suraj yes")
  })



app.listen(port, () =>
{
    console.log(`The port in which server is running is ${port}`)
})

