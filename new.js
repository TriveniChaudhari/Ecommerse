
/*This is my file*/
var exp=require('express');

var app=exp();

app.listen(8100,function(){
	console.log("Server Started")
});

app.get('/login',function(req,res){
	var id=req.query.userid;
	var pass=req.query.pass;
	if(id=="object"&&pass=="knowit")
	{
			res.send("<h1>welecome to login page</h1>");
	}
	else
	{
		if(id!="object"&&pass!="knowit")
			res.send("<h1 style='color:red'>Wrong Id and Password</h1>");
		else if(id!="object")
			res.send("<h1 style='color:red'>Wrong userid</h1> ");
		else
			res.send("<h1 style='color:red'>Wrong Password</h1> ");
	}
});
