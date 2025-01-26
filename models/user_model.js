const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const UserSchema=new mongoose.Schema({
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
    password:{
        type:String,
        required:true
    }
    // isadmin:{
    //     type:Boolean,
    //     default:false
    // }
    });
    UserSchema.pre("save", async function(next){
        const user=this;
        if(!user.isModified("password")){
            next();
        }
        try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(user.password, salt);
        user.password=hashedPassword;
    } catch(error){
        next(error);
    }


    });
    

    const User=mongoose.model("User",UserSchema);
    module.exports=User;