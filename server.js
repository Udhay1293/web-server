var express=require('express');

var app=express();

var middleware={

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

app.use(middleware.requireauthentication);
app.use(middleware.logger);

app.get("/home",middleware.requireauthentication,function(req,res){
    
    res.send("<h1>Hello Udhay</h1>");

});

app.use(express.static(__dirname+"/public"));

app.listen(9000,function(){
    
    console.log("Server has started at port no 9000");
    
});