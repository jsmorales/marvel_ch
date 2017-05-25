$(function(){

    console.log(data)
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

        $("#lbl_search_term").html("").append("Buscando: '"+term+"'");
        $("#search_characther").val("");

        //prsnjs.searchName()

        //prsnjs.loadAllPersonajes()

        var data_action = term != "" ? prsnjs.searchName(term) : prsnjs.loadAllPersonajes();
        //console.log(term.typeof())
        console.log(data_action)
        prsnjs.createPersonajes(data_action);

        return false;
    });
    //------------------------------------------------------------------------------------

})