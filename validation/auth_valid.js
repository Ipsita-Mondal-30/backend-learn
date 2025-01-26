const {z}=require("zod");

const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,"Name must be at least 3 characters long")
    .max(255,"Name must be at most 255 characters long"),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,"Email must be at least 3 characters long")
    .max(255,"Email must be at most 255 characters long"),
    username:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,"Phone  must be at least 10 characters long")
    .max(20,"Phone must be at most 20 characters long"),
    username:z
    .string({required_error:"Password is required"})
    
    .min(6,"Name must be at least 6 characters long")
    .max(255,"Name must be at most 255 characters long"),
})
module.exports=signupSchema;