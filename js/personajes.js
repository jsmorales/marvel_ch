(function(){

	self.personajes= function(){
		this.url_todo = "https://gateway.marvel.com/v1/public/characters";
	}

	self.personajes.prototype = {

		loadAllPersonajes: function(){

			//ajax_req_exe();
			//console.log(this.url_todo)
			//console.log(data)
			var res;

			var all_personajes = ajax_req_exe(this.url_todo, data);

			all_personajes.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});

			return res;
		},
		createAllPersonajes: function(){

			$.each(this.loadAllPersonajes(), function(index, val) {
				console.log(val)
			});

			console.log(this.createDivMainPersonaje())
		},
		createDivMainPersonaje: function(){
			return '<div class="col-md-6"> </div>';
		}
	}

})();