const express=require('express');
const jogging_app=express();
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.promise=global.promise;
mongoose.connect("mongodb://localhost:27017/jogging",{useNewUrlParser:true, useUnifiedTopology: true});
var user = new mongoose.Schema({
    date:{type:String},
    distance:{type:Number},
     duration:{type:Number},
     speed:{type:Number}
    
});
var bodyParser= require('body-parser');
jogging_app.use(cors());
 jogging_app.use(bodyParser.json());
 jogging_app.use(bodyParser.urlencoded({extended:true}));
 var user = mongoose.model("user",user);

 jogging_app.post('/savingDetail',(req,res)=>{
     try{
         console.log('bodyyyy',req.body);
        var myData= new user(req.body);
        myData.save()
        .then(item =>{
            console.log("item======",item);
          
            
            res.send(item);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
        

     }catch(e){
    console.log('Error!', e);
        res.setHeader('Content-Type', 'application/json');
        res.send('error');
        res.end();
   }
   
 })



 jogging_app.post('/showList',(req,res)=>{
     try{
      user.find({},function(err,result){
        
          let json5={"list":result};
          res.send(json5);  
        });
     


     }catch(e){
        console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send('error');
            res.end();
       }
 })

//  jogging_app.post('/speed',(req,res)=>{
//     try{
       
//        user.find({speed:speed},function(err,result){
//            if(err){
//             return res.json({
//                 success: false,
//                 message: 'Failed '
//             })

//            }
//            else{
               
//             console.log('result',result);
//             return res.json({
//                 success: true,
//                 message: 'Found '
//             })
               


//            }
//        })

//     }catch(e){
//         console.log('Error!', e);
//             res.setHeader('Content-Type', 'application/json');
//             res.send('error');
//             res.end();
//        }
//     })



 jogging_app.post('/calculations',(req,res)=>{
    try{
        
       user.find({ date:req.body.date } ,function(err,result){
           if(err){
            return res.json({
                success: false,
                message: 'Failed '
            })

           }
           else{
               
               user.find({ $gte: req.body.date, $lte:req.body.date1 },function(err,result){
                   if(err){
                    return res.json({
                        success: false,
                        message: 'Failed in saving'
                    })
        

                   }
                   else{
                    console.log('result',result);
                    return res.json({
                        success: true,
                        message: 'Found '
                    })
                       console.log('jjj');
                   }
               } )
            
               


           }
       })

    }catch(e){
        console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send('error');
            res.end();
       }
    })


 module.exports=jogging_app;