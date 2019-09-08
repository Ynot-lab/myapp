const Sport = require('./Sport');


module.exports = class Player
{
	constructor (id,name ,firstname,email)
	{
		this.ID_Player = id;
		this.Name = name;
		this.FirstName = firstname;
		this.Email = email;
    }





    Details()
    {
    	let p = "ID_Player :" + this.ID_Player + "\n";
    	    p = "Name :" + this.Name + "\n";
    	    p = "FirstName :" + this.FirstName + "\n";
    	    p = "Email :" + this.Email + "\n"

    	    return p;

    }
}