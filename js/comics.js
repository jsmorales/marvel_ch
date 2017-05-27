(function(){

	self.comics = function(){
		//this.div_personajes = div_personajes;
		//this.url_todo = "https://gateway.marvel.com/v1/public/comics";
	}

	self.comics.prototype = {

		loadComic: function(url){
			//1009368

			var res;			

			var dataComic = getData();
			//this.resetDiv();

			var search = ajax_req_exe(url, dataComic);

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
			return '<a class="btn-comic-favoritos-default" href="" data-id-comic="'+id_comic+'"><img src="../export/icons/btn-favourites-primary.png" alt=""> Añadir a Favoritos</a>';
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
				
				console.log($(this).attr('data-id-comic'))
				self.addComicFavs($(this).attr('data-id-comic'));
				return false;
			});			
		},
		limitStr: function(str, max){
			return str = str.length > max ? str.substring(0, max)+"..." : str;
		},
		addComicFavs: function(id){
			data_storage.addComic(id)
		}		
		
	}

})();