(function(){

	self.personajes= function(div_personajes){
		this.div_personajes = div_personajes;
		this.url_todo = "https://gateway.marvel.com/v1/public/characters";
	}

	self.personajes.prototype = {

		loadAllPersonajes: function(){

			var res;

			data.limit = 100;

			var all_personajes = ajax_req_exe(this.url_todo, data);

			all_personajes.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});
			//this.loadAllPersonajes()
			return res;
		},
		loadPersonaje: function(id_char){
			//1009368

			var res;			

			//this.resetDiv();

			var search = ajax_req_exe(this.url_todo+"/"+id_char, data);

			search.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});

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

			console.log(data.length)

			if (data.length > 0) {

				var itr = $.each(data, function(index, val) {
					console.log(val)
					self.div_personajes.attr('hidden', 'true').append(self.createDivMainPersonaje(val));
					//div_personajes
				});

				//console.log(this.createDivMainPersonaje())
				$.when(itr).then(function(){

				});

			} else {
				self.div_personajes.append('<h3 class="lbl-msg-marvel">No hay resultados.</h3>')
			}
			
		},
		createDivMainPersonaje: function(data){
			return this.createDivMd6(
						this.createPanelMain(
							this.createPanelBody(data.thumbnail.path+'.'+data.thumbnail.extension,data.name,data.description, data.id)
						)
					);
		},
		createPanelMain: function(body){
			return '<div class="panel panel-default panel-personaje-marvel">'+body+'</div>';
		},
		createDivMd6: function(item){
			return '<div class="col-md-6">'+item+'</div>';
		},
		createPanelBody: function(src_img, name, desc, id){
			return ('<div class="panel-body">'+
				this.createDivMd6(this.createIconPersonaje(src_img)))+
			    this.createDivMd6(
			    	this.createNamePersonaje(name)+
			    	this.createDecPersonaje(desc)+
			    	this.createBtnVer(id)
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
			desc = desc == "" ? "Not Found." : desc;

			return '<p>'+this.limitStr(desc, 100)+'</p>';
		},
		createBtnVer: function(id_c){
			return '<button type="button" class="btn btn-info btn-ver-personaje" data-id-personaje="'+id_c+'">Ver Personaje</button>';
		},
		limitStr: function(str, max){
			return str = str.length > max ? str.substring(0, max)+"..." : str;
		},
		resetDiv: function(){
			this.div_personajes.html("");
		}
	}

})();