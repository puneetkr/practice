var express=require('express');
var app=express();
app.get('/',function(req,res){res.send("<html><body><h1>hey there!!</h1></body></html>");});
app.listen(3000);