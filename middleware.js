module.exports={

    requireauthentication:function(req,res,next){
        
        console.log("Middleware");
      
        next();
    }
    ,
    logger:function(req,res,next){
        console.log(req.method);
        next();
    }
    
};