'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const hotelRoutes = require('./routes/hotel');
const userRoutes = require('./routes/user');

// ==================================================

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/hotels', hotelRoutes);
app.use(userRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;

  res.status(status).json({ message: message, data: error.data });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@assignment-02.cjvlxke.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
  )
  .then(() => app.listen(process.env.PORT || 5000))
  .catch((err) => console.log(err));
