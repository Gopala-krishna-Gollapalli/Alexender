const path = require('path');
const fs = require('fs');
const mongo =require('mongodb').MongoClient;
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
var dbo;
const DIR = 'dist/file/assets';
var url1;
var uniqid = require('uniqid');
var name1;
var value;

var phno;
mongo.connect('mongodb://Gopalakrishna:gopalthebad1@ds241493.mlab.com:41493/registration', { useNewUrlParser: true },(err, db) => {

    if (err) throw err;
    dbo = db.db('registration')
})
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      console.log(cb);
      console.log(path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});






 
app.post('/api/upload',upload.single('photo'), function (req, res) {
  
  if (!req.file) {
      console.log("No file received");
      console.log(req.body);
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      
      console.log(req.file);
      console.log(req.body);
      console.log(req.file.filename);
      url1=req.file.filename;
      
      return res.send({
        success: true
      })
    }
});


app.post('/register',(req,res)=>{

  console.log(req.body);
  console.log(url1);
  console.log("i am from register")
  console.log(req.body.phno);
  
dbo.collection('clothes').findOne({"phno":req.body.phno},(err,data)=>{
  if(err)throw err;
  if(!data)
  {
    dbo.collection('clothes').insertOne({"name":req.body.name,
    "dob":req.body.dob,
    "url":url1,
    "uniqid":uniqid(),
    "gender":req.body.gender,
    "phno":req.body.phno,
    "password":req.body.pass,
  },
  (err,d)=>
  {
    if(err) throw err;
    res.send({"msg":"success"})
  })

  }
  else
  {
    console.log("phno should be unique...")
    res.send({"msg":"the phone number should be unique"})
   
  }
})
 
})

app.get('/profile',(req,res)=>{
  console.log(name1);
  dbo.collection('clothes').findOne({"phno":phno},(err,data)=>{
    if(err) throw err;
    console.log("get...........")
  
    console.log(data.url);
    
    res.send(data.url);
    
    
  })
  
})
app.get('/profile1',(req,res)=>{
  console.log(name1);
  dbo.collection('clothes').findOne({"phno":phno},(err,data)=>{
    if(err) throw err;
    console.log("get...........")
  
    res.send(data);
    
    
  })

  
})
if(value==false)
{
  app.get('/main',(req,res)=>{
    res.send({"msg":"upload the file size less then 5MB"})
  })
}



app.post('/loginpost',(req,res)=>{
  
  phno=req.body.phno;
  console.log(req.body.phno)
  dbo.collection('clothes').findOne({"phno":req.body.phno},(err,result)=>{
    if(err) throw err;
    console.log("gopal");
    
    if(result)
    {
      if(req.body.password1==result.password)
      {
        res.send({"msg":"valid"});
        console.log("valid user");
      }
      else
      {
        res.send({"msg":"invalidp"});
        console.log("invalid password");
      }

    }
    else
    {
      res.send({"msg":"invalidu"});
      console.log("invalid user");
    }
   

    
  })
})




//uniqid


app.post('/loginpost1',(req,res)=>{
  console.log(req.body.uid);
  dbo.collection('clothes').findOne({"uniqid":req.body.uid},(err,result)=>{
    
    if(result)
    {
      if(req.body.password==result.password)
      {
        res.send({"msg":"valid"});
        console.log("valid user");
      }
      else
      {
        res.send({"msg":"invalidp"});
        console.log("valid user");
      }

    }
    else
    {
      res.send({"msg":"invalidu"});
      console.log("invalid user");
    }
   

    
  })
})





app.get('/search',(req,res)=>{
  dbo.collection('clothes').find().toArray((err,data)=>{
    if(err) throw err;
    res.send(data);
  })
})





app.use(express.static(path.join(__dirname, 'dist/file')));


app.listen(process.env.PORT||8080,(req,res)=>{
  console.log('Node.js server is running on port.....');
});