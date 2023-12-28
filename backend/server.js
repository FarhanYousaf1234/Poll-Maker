const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose')
// database connection
const MONGO_URI='mongodb+srv://shiekhfarhanyousaf1813:farhan1234@cluster0.einbzzv.mongodb.net/Poll_maker'
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('connected to database')    
  })
  .catch((err) => {
    console.log(err)
  }) 
// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
const port =  1000;
app.listen(port, console.log(`Listening on port ${port}...`));
