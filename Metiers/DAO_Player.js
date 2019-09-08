const mysql = require('mysql2');
const Player = require("./Player")



module.exports = class DAO_Player
{
   constructor(serveur,utilisateur,mdp,db)
   {
        this.Cnn = mysql.createConnection({
				  host: serveur,
				  user: utilisateur,
				  password: mdp ,
				  database: db
				});
   }

Create(p)
{
  this.Cnn.query("INSERT INTO Player VALUES(?,?,?,?)" ,
 	[p.ID_Player,p.Name ,p.FirstName,p.Email]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.affectedRow() ;
	}); 
}


Update(p)
{
  this.Cnn.query("Update Player Set Name = ?,FirstName = ? , Email = ? Where ID_Player = ? " ,
 		[p.ID_Player,p.Name ,p.FirstName,p.Email]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}


Delete(id)
{
  this.Cnn.query("Delete from Player  Where ID_Player = ? " ,
 	[id]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}

Retrieve(id, callback)
{
  this.Cnn.query(
  	'SELECT * FROM  Player Where ID_Player = ?', [id] ,
 		 function(err, ligne, fields) {
		if (!err)
			{
		       	let id = ligne[0]["ID_Player"];
				let name = ligne[0]["Name"];
				let firstname = ligne[0]["FirstName"];
				let email= ligne[0]["Email"];
				

        callback( new Player(id,name,firstname,email));
       
    	}
        
   
  });
}


RetrieveAll(callback)
{
	let players = [];

  this.Cnn.query(
  	'SELECT * FROM  Player',
 		 function(err, lignes, fields) {
		if (!err)
			{
				for(let ligne of lignes)
				{
			       	let id = ligne["ID_Player"];
					let name = ligne["Name"];
					let firstname = ligne["FirstName"];
					let email = ligne["Email"];
					
                   
        			players.push(new Player(id,name,firstname,email));
        	}       
    	}

   callback(players)
  });

  //return personnes;
}




Termine()
{
	this.Cnn.end();
}

}