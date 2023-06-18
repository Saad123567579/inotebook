
// db.js
const mongoose = require('mongoose');

const connectToMongo = () =>{
  mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("Database Connected Successfully");
  }).catch((err)=>{
    console.log("unable to connect");
  })
}
module.exports = connectToMongo;






