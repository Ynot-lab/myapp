const mysql = require('mysql2');
const Prop = require("./Prop")



module.exports = class DAO_Prop
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
  this.Cnn.query("INSERT INTOrop Prop VALUES(?,?)" ,
 	[p.ID_Prop,p.Proposition ]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.affectedRow() ;
	}); 
}


Update(p)
{
  this.Cnn.query("Update Prop Set Proposition = ? Where ID_Prop = ? " ,
 			[p.ID_Prop,p.Proposition ]
 	, function (error, results, fields) 
 	{
		  if (error) throw error;
		   return results.length ;
	}); 
}


Delete(id)
{
  this.Cnn.query("Delete from Prop  Where ID_Prop = ? " ,
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
  	'SELECT * FROM  Prop Where ID_Prop = ?', [id] ,
 		 function(err, ligne, fields) {
		if (!err)
			{
		       	let id = ligne[0]["ID_Prop"];
				let pr = ligne[0]["Proposition"];
								

        callback( new Prop(id,pr));
       
    	}
        
   
  });
}


RetrieveAll(callback)
{
	let props = [];

  this.Cnn.query(
  	'SELECT * FROM  Prop',
 		 function(err, lignes, fields) {
		if (!err)
			{
				for(let ligne of lignes)
				{
			       	let id = ligne["ID_Prop"];
					let pr = ligne["Propnosition"];
				
					
                   
        			props.push(new Prop(id,pr));
        	}       
    	}

   callback(props)
  });

  //return personnes;
}




Termine()
{
	this.Cnn.end();
}

}