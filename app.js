require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const app = express();
const cors = require('cors')




//Database
const connectDB = require('./database/connect');





app.use('/api/v1', courses)
app.use('/api/v1', router)
app.use('/api/v1', public)










const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();






