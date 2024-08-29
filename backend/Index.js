const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session'); 
const cookieParser = require('cookie-parser');
const asyncHandler = require('express-async-handler');
const http = require('http');

const cloudinary = require('cloudinary').v2;

const port = process.env.PORT || 5000;
const apiRouter = require('./routes');

require('dotenv').config();
require('./Db/DbConnection'); 


app.use(cookieParser()); 
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};
app.use(cors(corsOptions)); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

cloudinary.config({
  cloud_name: 'dzj1widog',
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


app.use('/api/v1', apiRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
