const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var mysql = require('mysql');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shrajan1234#",
  database: "knit"
});

db.connect(function(err)
{
  if(!err) console.log("connected successfully");
})

app.get("/", function (req, res) {
  // res.send("hello");
 
  
    let command = "SELECT * FROM students";
         
      db.query("SELECT * FROM students", function (err, result) {
        if (!err) {
          // console.log(res);
          console.log("information read successfully!");
          res.render("home",{res:result});
          
        }
        else console.log(err);
      })
  
   
    


});

app.post("/delete",function(req,res)
{
  let r_no = req.body.roll_no;
   let command = `DELETE FROM students WHERE Roll_no =  ${r_no}`;
   db.query(command,(err,result)=>{
          if(!err){
            console.log(result);
            res.redirect("/");
          }
   })
})

app.post("/insert",function(req,res){
  // console.log("hii");
  // console.log(req.body.roll_no);
  console.log(req.body.roll_no , req.body.first, req.body.branch, req.body.year, req.body.email);
  console.log(req.body.branch);
  let command = `INSERT INTO students VALUES(${req.body.roll_no},"${req.body.first}","${req.body.last}","${req.body.branch}",${req.body.year},"${req.body.email}")`;
   db.query(command,(err,result)=>{
    if(!err){
      console.log("inserted");
      console.log(result);
      res.redirect("/");
    }
    else console.log(err);
})
})

app.post("/sql_query",(req,res)=>{
  let command = req.body.sql_query;
  db.query(command,(err,result)=>
  {
    if(!err)
    {
      console.log("inserted");
      console.log(result);
      res.render("home",{res:result});
    }
    else console.log(err);
  })

})




app.listen(3000, function () {
  console.log("app running on port 3000");
});
