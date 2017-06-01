(function(){

	self.comics = function(){
		//this.div_personajes = div_personajes;
		this.url_todo = "https://gateway.marvel.com/v1/public/comics";
	}

	self.comics.prototype = {

		loadComic: function(url){
			//1009368

			var res;			

			var dataComic = getData();
			//this.resetDiv();

			var search = ajax_req_exe(url, dataComic, false);

			search.done(function(data){
				//console.log(data.data.results);
				res = data.data.results;
			});

			return res;
		},
		createDivMd6: function(item){
			return '<div class="col-md-6">'+item+'</div>';
		},
		createDivMd12: function(item){
			return '<div class="col-md-12 div-12-favoritos">'+item+'</div>';
		},
		createDivRow: function(cont){
			return '<div class="row">'+cont+'</div>';
		},
		createIconComic: function(src_img){
			return '<img src="'+src_img+'" class="icon-personaje-marvel" width="215" height="330">';
		},
		createDecComic: function(desc, limit){
			desc = (desc == "") || (desc == null)  ? "Not Found." : desc;

			return '<p>'+this.limitStr(desc, limit)+'</p>';
		},
		createBtnFavoritos: function(id_comic){
			//si el comic ya es favorito carga el boton con la imagen btn-comic-favoritos-primary
			//de lo contrario carga el default
			//crear metodo de verififcacion de favorito
			var valComic = data_storage.validateComic(id_comic.toString());
			console.log(id_comic)
			var iconFav = valComic ? "favourites-default" : "favourites-primary";
			//var dis = valComic ? " disabled='disabled' " : "";
			var msg = valComic ? "Quitar comic de favoritos" : "Añadir a Favoritos";

			return '<a class="btn-comic-favoritos-default" href="" data-id-comic="'+id_comic+'"><img src="../export/icons/btn-'+iconFav+'.png" alt=""> '+msg+'</a>';
		},
		renderModalComic: function(data){
			var self = this;
			console.log(data[0])
			$(".modal-title").html(data[0].title);
			$(".modal-body").html(
				this.createDivRow(
					this.createDivMd6(this.createIconComic(data[0].thumbnail.path+"."+data[0].thumbnail.extension))+
				    this.createDivMd6(		
				    	this.createDecComic(data[0].description, 2000)			    
					)+
					this.createDivMd12(
						this.createBtnFavoritos(data[0].id)
					)
				)
			);
			
			$(".btn-comic-favoritos-default").click(function(event) {
				
				var valComic = data_storage.validateComic($(this).attr('data-id-comic').toString());
				console.log(valComic)
				/**/
				if (!valComic) {
					console.log($(this).attr('data-id-comic'))
					self.addComicFavs($(this).attr('data-id-comic'));
					self.renderModalComic(self.loadComic(self.url_todo+"/"+$(this).attr('data-id-comic')))
				} else {
					//alert("Este comic ya está en tus favoritos!")
					self.rmComicFavs($(this).attr('data-id-comic'));
					self.renderModalComic(self.loadComic(self.url_todo+"/"+$(this).attr('data-id-comic')))
					
				}

				self.renderFavsComics()
				
				return false;
			});			
		},
		renderFavsComics: function(){
			var self = this;
			//tomar el array de comics favoritos
			var comics_favs = data_storage.getLcsObjt().comics;
			/**/
			$("#div_comics_favs").html("");

			$.each(comics_favs, function(index, val) {
				console.log(val)

				//console.log(this.loadComic(this.url_todo+"/"+comics_favs[0]))
				
				var comic = self.loadComic(self.url_todo+"/"+val);
				console.log(comic[0])
				/**/
				$("#div_comics_favs").append(
					self.createContFav(
						self.createIconComicFav(comic[0].thumbnail.path+"."+comic[0].thumbnail.extension)+
						self.createTitleFav(comic[0].title)
					)
				)

			});

		},
		createContFav: function(item){
			return '<div class="comic-fav text-center">'+item+'</div>';
		},
		createTitleFav: function(title){
			return '<p class="title-fav-comic">'+title+'</p>';
		},
		createIconComicFav: function(src_img){
			return '<img src="'+src_img+'" width="140" height="200">';
		},
		limitStr: function(str, max){
			return str = str.length > max ? str.substring(0, max)+"..." : str;
		},
		addComicFavs: function(id){
			data_storage.addComic(id)
		},
		rmComicFavs: function(id){
			data_storage.removeComic(id)
		},
		randomComicsP: function(){
			
			var cant_links = $("[class*='link-comic-related']").length;			

			//obtener los 3 links random
			for (var i = 0; i < 3; i++) {				
				
				var index = Math.floor(Math.random() * cant_links);				
				
				var comic_rand = this.loadComic($("[class*='link-comic-related']")[index]["dataset"]["urlIdc"]);				
				
				var valComic = data_storage.validateComic(comic_rand[0].id.toString());
				
				/**/
				if (!valComic) {
					//si no existe el comic como favorito
					this.addComicFavs(comic_rand[0].id.toString());					
				}
			}

			//renderiza de nuevo los favoritos desde el localStorage
			this.renderFavsComics()			
		}	
		
	}

})();