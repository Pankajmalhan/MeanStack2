var mongoose = require('mongoose'); 
// Connection URL  
var db = 'mongodb://localhost:27017/employeeDetails';  
    // Use connect method to connect to the Server  
 mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
});

var Schema = mongoose.Schema;
var Employee_Schema = new Schema({
    EmployeeName: String,
    Designation: String,
    Project: String,
    Skills:String
});

var Employee = mongoose.model('employees', Employee_Schema);
 
 module.exports=Employee;