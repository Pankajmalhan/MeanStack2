var express=require('express');
var router=express.Router();
var Employee=require('../database/dataFile');
router.get('/',function(req,resp,next){
    Employee.find({},function(err,docs){
        resp.send(docs);
    })
});

 module.exports=router;