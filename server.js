    var express=require('express');
    var path=require('path');
    var bodyParser=require('body-parser');

// In above three line we import the required packages 

var index=require('./routes/index');
var api=require('./routes/api');

// index and api object contain the path of routing  files for our application

var port=4500;
var app=express();

//Define the port and create an object of express class

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/client/views'));

// define the view engine and set the path for views files

app.engine('html',require('ejs').renderFile);
//Register given template engine callback function as extension

app.use(express.static(path.join(__dirname,'/client')));

// Defien the path for the static files like image, css and js files

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Define the middleware to parse the data from URL request and requesy body

app.use('/',index);
app.use('/api',api);
app.use('*',index);

// define the middleware for routing

app.listen(port,function(){ 
    console.log('Server Started At '+port);
})
// Run the Node.js server at 4500 port