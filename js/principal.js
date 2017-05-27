$(function(){

    //console.log(data)
    //------------------------------------------------------------------------------------
    self.prsnjs = new personajes($("#div_personajes"));
    
    //------------------------------------------------------------------------------------
    //function inicial
    $("#div-loading").hide();

    prsnjs.createPersonajes(prsnjs.loadAllPersonajes());

    //------------------------------------------------------------------------------------
    $("#btn_search_characther").click(function(event) {

        $("#div_lbl_search_term").removeAttr('hidden');

        self.term = $("#search_characther").val();

        if(term != ""){
            $("#lbl_search_term").html("").append("Buscando: '"+term+"'");
            $("#search_characther").val("");
            prsnjs.createPersonajes(prsnjs.searchName(term));
        }else{
            $("#lbl_search_term").html("")
            prsnjs.createPersonajes(prsnjs.loadAllPersonajes());
        }

        //------------------------------------------------------------------------------------
        $(".btn-ver-personaje").click(function(event) {
            //console.log(prsnjs.loadPersonaje($(this).data('id-personaje')));
            prsnjs.renderModalPersonajes(prsnjs.loadPersonaje($(this).data('id-personaje')));
        });
        //------------------------------------------------------------------------------------        

        return false;
    });
    //------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------
    $(".btn-ver-personaje").click(function(event) {
        //console.log(prsnjs.loadPersonaje($(this).data('id-personaje')));
        prsnjs.renderModalPersonajes(prsnjs.loadPersonaje($(this).data('id-personaje')));
    });
    //------------------------------------------------------------------------------------
    
    //------------------------------------------------------------------------------------    
    //localStorage.setItem("comics_favoritos");
    self.data_storage = new localComicsFavs();
    data_storage.setUp()

    cmcs.renderFavsComics();
    //------------------------------------------------------------------------------------

})