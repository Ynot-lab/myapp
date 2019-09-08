$(document).ready(function ()
{


//              
         /*   $.ajax(
			{
				url:"/plyers",
				type:"get",
				//data : { id: 1, Nom:"el", Prenom :"Chapo", Age: 75} ,
				dataType:"JSON",
				success: function (result,state)
				{
                      
                   alert(JSON.stringify(result))  ;
                  for (player of result)
                  {
                    let ligne = $ ("<tr></tr>");
                     ligne.append($( `<td>${player.ID_Player}</td>`));
                     ligne.append($("<td></td>").append($("<button></button>").attr("idBtn", "BtnC").append($("<i></i>").addClass("fa fa-caret-square-o-down"))));
                     ligne.append($( `<td>${player.Name}</td>`));
                      ligne.append($( `<td>${player.FirstName}</td>`));
                     ligne.append($( `<td>${player.Email}</td>`));


                      ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link text-warning updateC").text("Modifier")));
          ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link text-danger deleteC").text("Supprimer")));
					
					
					$("#Tbody").append(ligne);
                  }
                  
				       
				 }
			}
			)
*/







	
       
                    
  
                



                        
            $.ajax(
			{
				url:"/game",
				type:"get",
				//data : { id: 1, Nom:"el", Prenom :"Chapo", Age: 75} ,
				dataType:"JSON",
				success: function (result,state)
				{
                      
                   alert(JSON.stringify(result))  ;
                  for (player of result)
                  {
                    let ligne = $ (" <tr></tr>");
                    //.append($("<td></td>").addClass("").attr("multiple","multiple")
                    	ligne.append( `<td>${player.ID_Player}</td>`);
                    	ligne.append( `<td>${player.Name}</td>`);
                    	ligne.append( `<td>${player.FirstName}</td>`);                    
                    	ligne.append( `<td>${player.Email}</td>`);


                      ligne.append($(ligne));
                   
                      


                 
					
					
					$("#Tbody").append(ligne);
                  }
                  
				       
				 }
			}
			)










   




		$("#btnPost ").on("click", function ()
		{


			$.ajax(
			{
				url:"/societes",
				type:"post",
				dataType:"JSON",
				success: function (result,state)
				{
                      
                     
                  for (societe of result)
                  {
                    let ligne = $ ("<tr></tr>");
                     ligne.append($( `<td>${societe.Id_Societe}</td>`).attr("id","society"));
                     ligne.append($( `<td>${societe.Nom}</td>`));
					
					ligne.append($( `<td>${societe.CA}</td>`));
					ligne.append($( `<td>${societe.Employe}</td>`));
					//ligne.append($( `<td>${result.Age}</td>`));
					$("#Tbody").append(ligne);
                  }
                  
				       
				  alert (result);
				}
			})
        });

   
     $("#btnPut ").on("click", function ()
     {

     	

			$.ajax(
			{
				url:"/societes",
				type:"put",
				dataType:"JSON",
				success: function (result,state)
				{
                     
					alert(result);
				}
			});

     });



     $("#btnDelete ").on("click", function ()
     {

     	
			$.ajax(
			{
				url:"/sports",
				type:"delete",
				dataType:"JSON",
				success: function (result,state)
				{

					alert(result);
				}
			});
     });


});








