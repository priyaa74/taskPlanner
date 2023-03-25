const mongoose= require('mongoose');

async function connectDb(){
    try{
    const result= await  mongoose.connect('mongodb://127.0.0.1:27017/sprintPlanner',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log("connection established")
return result;
    }catch(err){
        console.log("ERROR: "+ err);
        process.exit();
    }
  }
module.exports= connectDb;