                                                                                                                                    
 const validate=(schema)=> async (req,res,next)=>{
    try{
        const ParseBody=await schema.parseAsync(req.body)
        req.body=ParseBody;
        next();
    }catch(error){
       const status=422;
       const message=err.errors[0].message;
       

       const err={
        status,
        message
       }
       console.log(message);
       next(err)
    }

 } ;
 module.exports=validate;                                                                                                                              