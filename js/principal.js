$(function(){

	//console.log("hola marvel")

	/**/
	//ts+auth.pivate_key+auth.public_key

	console.log(data)

	/*
	$.ajax({
	  async: false,
      url: "https://gateway.marvel.com/v1/public/characters",
      data: data,
    })
    .done(function(data) {	          
      //---------------------
      console.log(data)	                  
    })
    .fail(function(data) {
      console.log(data);	          
      //alert(data[0].mensaje);          
    })
    .always(function() {
      console.log("complete");
    });*/
  var prsnjs = new personajes();

  prsnjs.createAllPersonajes();

})