const mongoose=require("mongoose");


const ContactSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
   
   
    });
 


    

    const Contact=mongoose.model("User",ContactSchema);
    module.exports=Contact;