const express = require("express"); 
const path = require ("path");
const app = express();



const Player = require("./Metiers/Player") ;
const DAO_Player = require("./Metiers/DAO_Player") ;
const Sport = require("./Metiers/Sport") ;
const DAO_Sport= require("./Metiers/DAO_Sport") ;




const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname , "public")));  //absolute path

app.use(bodyParser.json())
;
app.use(bodyParser.urlencoded({
	extended:true
}))


//SELECT Retreive
app.get("/sports", (req,res) => {

  
  

  
	res.send("Bonjour le monde avec http get");
});

//iNSERT CREATE
app.post("/", (req,res) => {

	res.send("Bonjour le monde avec http post");
});

//Update

app.put("/", (req,res) => {

	res.send("Bonjour le monde avec http put");
});

//dELETE
app.delete("/", (req,res) => {

	res.send("Bonjour le monde avec http delete");
});



let daos = new DAO_Sport("localhost","root","","my_team");


app.route("/sports")
.get((req,res) => {
      	//let s = {
      		//id:req.query.id,
      		//Nom:req.query.Nom,
      		//Prenom:req.query.Prenom,
      		//Age: req.query.Age,

         
      //	}
        //console.log(JSON.stringify(req.query))
       //console.log(JSON.stringify(req.params))
      //console.log(JSON.stringify(req.body))
      
      res.json(s);

      

      
      

    })    
.post((req,res) => {
  
  let p = {nom:"prost", prenom:"Alain"}   
  res.json(JSON.stringify(p));
})       
.put((req,res) => {
 
  res.json("Put en Action");
})
.delete((req,res) => {
  
  res.json("Delete en Action");
})


app.listen (3000,() => console.log("server listening"));