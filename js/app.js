
//Récupérer les valeurs entrés dans l'input
$("#buton").click(function(){
	var input = $("#text").val();
	console.log(input);
//Récupérer la valeur et la mettre dasn un "p" dans le html 
	if(input != "" && input !== null){
		$("#afaire").append('<li>'+'<input type="checkbox">' + '' + input + '</li>');
	}
}); 

// si je coche une tâche dans à faire , elle se glisse automatiquement dans Fait 

 

