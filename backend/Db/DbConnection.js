const mongoose = require("mongoose");
require('dotenv').config()

const mongoPassword = process.env.MONGODB_CONNECTION_PASSWORD ;


const dbConnect = async () => {
  try {
    console.log(mongoPassword);
    
    await mongoose.connect(
      `mongodb+srv://akhiirulam:${mongoPassword}@cluster0.xv55p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Db Connected Successfully");
  } catch (error) {
    console.log(error);
  }
  
};

const connection = dbConnect();

module.exports = connection;
