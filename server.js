var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("deployed on server by :komal jagtap");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso pvt. Ltd. </h1>"+
		"<h2> We are here to suport you for your bright future....</h2>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Move work forward</li>"+
                    " <li>Capture everything with grace</li>"+
                    " <li>Inspire conversation</li>"+
                    " <li>Leading to the Success</li>"+
                    " <li>Organize everything in one place</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
