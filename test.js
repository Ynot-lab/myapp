

const express = require("express"); 
const path = require ("path");
const app = express();


const DAO_Player= require("./Metiers/DAO_Player") ;
const Player = require("./Metiers/Player")
//const DAO_Prop= require("./Metiers/DAO_Prop") ;
//const Prop = require("./Metiers/Prop")



const bodyParser = require("body-parser");


app.use(express.static(path.join(__dirname , "public")));  //absolute path

app.use(bodyParser.json())
;
app.use(bodyParser.urlencoded({
	extended:true
}));


let daop = new DAO_Player("localhost","root","","my_team");





         
	  
     
app.route("/game")
.get((req,res) => {

	

	 daop.RetrieveAll(function(players){

          console.log(players);
           res.json(players);

	

       });
	  }) ;
    




	








app.listen (4400,() => console.log("server listening on 4400"));

