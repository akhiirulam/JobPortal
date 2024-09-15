const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session'); 
const cookieParser = require('cookie-parser');
const asyncHandler = require('express-async-handler');
const http = require('http');
const passport = require('./utilis/passport');
const authRoutes = require('./routes/auth-Route'); 
const conversationRoutes = require('./routes/conversationRoute');
const messageRoutes = require('./routes/messageRoute');
const employerRoutes = require('./routes/employerRoute'); 
const candidateAlertRoutes = require('./routes/candidateAlertRoute');

const port = process.env.PORT || 5000;
const apiRouter = require('./routes');

require('dotenv').config();
require('./Db/DbConnection'); 

// Middleware
app.use(cookieParser()); 
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};
app.use(cors(corsOptions)); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
passport(app);

// Use routes
app.use("/auth", authRoutes); 
app.use('/api/v1', apiRouter);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/candidate-alerts', candidateAlertRoutes);
app.use('/api/employers', employerRoutes); 

// Server listen logic
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
