(function(){

	/*
	https://developer.marvel.com/
	user=jsmorales
	pass=3115208657a#A
	https://developer.marvel.com/account#
	https://developer.marvel.com/documentation/authorization
	//descripcion de los requests
	https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
	https://developer.marvel.com/documentation/generalinfo
	*/

	self.auth = {
		"public_key": "6062af1679edc54bc4ae69791d995528",
		"private_key": "9ec15e6d9761c839566c5cd164891a94dc05a753"
	}

	
	self.getTs = function(){
		return new Date().getTime();
	}

	self.ts = getTs().toString();

	self.md5= function(valor){

		var res = "";

		$.ajax({
		  async: false,
	      url: "../controller/crypt.php",
	      data: "valor="+valor+"&tipo=md5",
	    })
	    .done(function(data) {	          
	      //---------------------
	      //console.log(data)
	      res = data.encriptado;	                  
	    })
	    .fail(function(data) {
	      console.log(data);	          
	      //alert(data[0].mensaje);          
	    })
	    .always(function() {
	      console.log("complete");
	    });

	    return res;
	}

	

	self.getData = function(){

		var data = {};

		data.apikey = auth.public_key;
		data.ts = ts;
		data.hash = md5(ts+auth.private_key+auth.public_key);

		return data;
	}

	self.ajax_req_exe = function(url, data){

		return $.ajax({
		  async: false,
	      url: url,
	      data: data,
	      beforeSend: function(){
	      	$("#div-loading").removeAttr('hidden');
	      	console.log("Cargando...")
	      	
	      	$("#div-loading").show('fast');	      	
	      }
	    })
	    .done(function(data) {

	    	setTimeout(function(){
	    		$("#div-loading").hide('fast');
	    		$("#div_personajes").removeAttr('hidden');
	    	},2000)
	       	          
	      //---------------------
	      //console.log(data)	                  
	    })
	    .fail(function(data) {
	      console.log("Ocurrió un error en la petición.");	          
	      //alert(data[0].mensaje);          
	    })
	    .always(function() {
	      console.log("complete");
	    });
	}


	self.localComicsFavs = function(){

	}
	/*
	var testObject = { 'one': 1, 'two': 2, 'three': 3 };

	// Put the object into storage
	localStorage.setItem('testObject', JSON.stringify(testObject));

	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('testObject');

	console.log('retrievedObject: ', JSON.parse(retrievedObject));
	*/
	self.localComicsFavs.prototype = {

		setUp: function(){

			if (localStorage.comics_favoritos != undefined) {
			    console.log("ya existe el item comics_favoritos")
			} else {
			    localStorage.setItem("comics_favoritos", JSON.stringify({"comics":[]}));
			    
			    //localStorage.comics_favoritos = {"comics":[]};

			    console.log("creado el item comics_favoritos")
			}
		},
		addComic: function(item){
			//localStorage.comics_favoritos.push(item);
			console.log(localStorage.getItem('comics_favoritos'));
			
			var lclSt = JSON.parse(localStorage.getItem('comics_favoritos'));
			//hacer un indexOf(searchElement: any, fromIndex?: int) antes de
			//ingresarlo al array
			lclSt.comics.push(item)

			localStorage.setItem("comics_favoritos", JSON.stringify(lclSt));

			console.log(lclSt.comics)
		}
	}


})();