const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session'); 
const passport = require('passport');
require('./utilis/passport');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;
const http = require('http');
const port = process.env.PORT || 5000;
const apiRouter = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();
require('./Db/DbConnection'); 

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};

app.use(session({
  secret: 'Su04936Ch238868Aru9746752591',
  resave: false,
  saveUninitialized: true
}));



app.use(cookieParser()); 
app.use(cors(corsOptions)); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(passport.initialize());
app.use(passport.session());

cloudinary.config({
  cloud_name: 'dzj1widog',
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

require('dotenv').config();
require('./Db/DbConnection'); 


app.use('/api/v1', apiRouter);
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
