(function(){

	self.comics= function(div_personajes){
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
		renderModalComic: function(data){
			console.log(data[0])
			$(".modal-title").html(data[0].title);
			$(".modal-body").html(
				this.createDivRow(
					this.createDivMd6(this.createIconComic(data[0].thumbnail.path+"."+data[0].thumbnail.extension))+
				    this.createDivMd6(		
				    	this.createDecComic(data[0].description, 2000)			    
					)
				)
			);
						
		},
		limitStr: function(str, max){
			return str = str.length > max ? str.substring(0, max)+"..." : str;
		}
		
	}

})();