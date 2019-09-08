const mysql = require('mysql2');

const Sport = require("./Sport");







module.exports = class DAO_Sport
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

Create(s)
{
  this.Cnn.query("INSERT INTO Sport VALUES(?,?)" ,
 	[s.ID_Sport,s.SportName]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}


Update(s)
{
  this.Cnn.query("Update Sport Set SportName = ?  Where  ID_Sport  = ?" ,
 	[s.SportName ,s.ID_Sport]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}


Delete(id)
{
  this.Cnn.query("Delete from Sport  Where ID_Sport = ?" ,
 	[id]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}

Retrieve(ids, callback)
{
  this.Cnn.query(
  	'SELECT * FROM  Sport Where ID_Sport = ?', [id] ,
 		 function(err, ligne, fields) {
		if (!err)
			{
		       	let id = ligne[0]["ID_Sport"];
				let name = ligne[0]["SportName"];
				;
				

        callback( new Sport(id,name));
       
    	}
        
   
  });
}





RetrieveAll(callback)
{
	let sports = [];

  this.Cnn.query(
  	'SELECT * FROM  Sport',
 		 function(err, lignes, fields) {
		if (!err)s
			{
				for(let ligne of lignes)
				{
			       let id = ligne["ID_Sport"];
				   let name = ligne["SportName"];
				  
				
                   
        		sports.push(new Sport(id,name));
        	}       
    	}

   callback(sports);
  });
}
 //return personnesrgtf
//Faouzi method



	




Termine()
{
	this.Cnn.end();
}

}