(function(){

	self.personajes= function(div_personajes){
		this.div_personajes = div_personajes;
		this.url_todo = "https://gateway.marvel.com/v1/public/characters";
	}

	self.personajes.prototype = {

		loadAllPersonajes: function(){

			//ajax_req_exe();
			//console.log(this.url_todo)
			//console.log(data)
			var res;

			data.limit = 10;

			var all_personajes = ajax_req_exe(this.url_todo, data);

			all_personajes.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});
			//this.loadAllPersonajes()
			return res;
		},
		searchName: function(term){
			var res;

			data.limit = 10;
			data.nameStartsWith = term;

			this.resetDiv();

			var search = ajax_req_exe(this.url_todo, data);

			search.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});

			return res;
		},
		createPersonajes: function(data){
			
			var self= this;			
			
			this.resetDiv();

			var itr = $.each(data, function(index, val) {
				console.log(val)
				self.div_personajes.attr('hidden', 'true').append(self.createDivMainPersonaje(val));
				//div_personajes
			});

			//console.log(this.createDivMainPersonaje())
			$.when(itr).then(function(){

			});
			
		},
		createDivMainPersonaje: function(data){
			return this.createDivMd6(
						this.createPanelMain(
							this.createPanelBody(data.thumbnail.path+'.'+data.thumbnail.extension,data.name,data.description)
						)
					);
		},
		createPanelMain: function(body){
			return '<div class="panel panel-default panel-personaje-marvel">'+body+'</div>';
		},
		createDivMd6: function(item){
			return '<div class="col-md-6">'+item+'</div>';
		},
		createPanelBody: function(src_img, name, desc){
			return ('<div class="panel-body">'+
				this.createDivMd6(this.createIconPersonaje(src_img)))+
			    this.createDivMd6(
			    	this.createNamePersonaje(name)+
			    	this.createDecPersonaje(desc)
			    )+'</div>';
		},
		createIconPersonaje: function(src_img){
			return '<img src="'+src_img+'" class="img-rounded icon-personaje-marvel" width="200" height="175">';
		},
		createNamePersonaje: function(name){
			console.log(name.length)
			return '<h3 title="'+name+'"" class="name-personaje-marvel text-right">'+this.limitStr(name, 20)+'</h3>';
		},
		createDecPersonaje: function(desc){			
			return '<p>'+this.limitStr(desc, 200)+'</p>';
		},
		limitStr: function(str, max){
			return str = str.length > max ? str.substring(0, max)+"..." : str;
		},
		resetDiv: function(){
			this.div_personajes.html("");
		}
	}

})();