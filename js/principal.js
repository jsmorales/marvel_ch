$(function(){

	console.log(data)
  //------------------------------------------------------------------------------------
  self.prsnjs = new personajes($("#div_personajes"));
  //------------------------------------------------------------------------------------

  prsnjs.createPersonajes(prsnjs.loadAllPersonajes());

  //------------------------------------------------------------------------------------
  $("#btn_search_characther").click(function(event) {

    $("#div_lbl_search_term").removeAttr('hidden');

    var term = $("#search_characther").val();

    $("#lbl_search_term").html("").append("Buscando por: '"+term+"'");
    $("#search_characther").val("");

    //prsnjs.searchName()

    //prsnjs.loadAllPersonajes()

    var data_action = term != "" ? prsnjs.searchName(term) : prsnjs.loadAllPersonajes();

    prsnjs.createPersonajes(data_action);

    return false;
  });
  //------------------------------------------------------------------------------------

})