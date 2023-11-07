const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const connectDb = async() =>{


    try{
        const connect = await mongoose.createConnection(process.env.CONNECTION_STRING);
        console.log("Database Connected:", 
        connect.connection.host, 
        connect.connection.name
        );

    }catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDb;