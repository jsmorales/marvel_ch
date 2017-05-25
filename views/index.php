<?php 
	include("../controller/scripts_cont.php");

	$scripts = new scripts_pag();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>MARVEL</title>

	<?php

		$scripts->standarCss();

		$arr=[
			"helper_global.js",
			"personajes.js",
			"principal.js"
		];

		$scripts->special($arr);
	 ?>
</head>
<body>

<nav class="navbar navbar-default barra-nav-marvel" role="navigation">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			
			<a class="navbar-brand" href="#">
				<img class="logo-marvel" src="../export/marvel_logo.png">
			</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse navbar-ex1-collapse">
			

			<form class="navbar-form" role="search">
				<div class="form-group frm-group-marvel">
					<input type="text" class="form-control input-search-marvel" placeholder="Buscar Personaje">
				</div>
				<button type="submit" class="btn btn-default btn-search-marvel"><span class="glyphicon glyphicon-search span-glyph-icon-marvel"></span></button>
			</form>

		</div><!-- /.navbar-collapse -->
	</div>
</nav>

<!--contenedor -->

<div class="contenedor-marvel">
	
	<!--encabezado contenido -->
	<div class="col-md-6">
		<img src="../export/icons/characters.png" alt=""><h2 class="subtitle-marvel">Personajes</h2>		
	</div>
	<div class="col-md-6">
	
	</div>
	<!--encabezado contenido -->
	
	<!--contenido principal -->
	<div id="div_personajes" class="col-md-12 div-personajes">
		<!--PERSONAJES -->
		<div class="col-md-6">

			<div class="panel panel-default panel-personaje-marvel">
				<div class="panel-body">

					<div class="col-md-6">
						<img src="../export/iron_man.jpg" class="img-rounded icon-personaje-marvel" width="200" height="175">
					</div>
					<div class="col-md-6">
						<h3 class="name-personaje-marvel text-right">Iron Man</h3>

						<p>ñaskdjf añsldkjfas d ufihasldkjhfals dkfhalksdjfglashdgflkajsdhflkajsdhf
						sdljfaskjdfhlkajsdhf laksjdfh laksjdfh lakjsdfh lkajsdhf lasjkdfh laskjdfh las
						kalsjdfh lkajsdhfl kajsdfhlkajsd hflkjasdhf lkajsdhflkjsadh lsdakjhf laskjd fh
						akjsdhf lkjasdh flkjashdf lkjasdhfl kajsdhflkajsdhfl kjasdhfl jkasdf.
						</p>
					</div>			
					
				</div>
			</div>

		</div>

		<div class="col-md-6">

			<div class="panel panel-default panel-personaje-marvel">
				<div class="panel-body">

					<div class="col-md-6">
						<img src="../export/iron_man.jpg" class="img-rounded icon-personaje-marvel" width="200" height="175">
					</div>
					<div class="col-md-6">
						<h3 class="name-personaje-marvel text-right">Iron Man</h3>

						<p>ñaskdjf añsldkjfas d ufihasldkjhfals dkfhalksdjfglashdgflkajsdhflkajsdhf
						sdljfaskjdfhlkajsdhf laksjdfh laksjdfh lakjsdfh lkajsdhf lasjkdfh laskjdfh las
						kalsjdfh lkajsdhfl kajsdfhlkajsd hflkjasdhf lkajsdhflkjsadh lsdakjhf laskjd fh
						akjsdhf lkjasdh flkjashdf lkjasdhfl kajsdhflkajsdhfl kjasdhfl jkasdf.
						</p>
					</div>			
					
				</div>
			</div>

		</div>

		<div class="col-md-6">

			<div class="panel panel-default panel-personaje-marvel">
				<div class="panel-body">

					<div class="col-md-6">
						<img src="../export/iron_man.jpg" class="img-rounded icon-personaje-marvel" width="200" height="175">
					</div>
					<div class="col-md-6">
						<h3 class="name-personaje-marvel text-right">Iron Man</h3>

						<p>ñaskdjf añsldkjfas d ufihasldkjhfals dkfhalksdjfglashdgflkajsdhflkajsdhf
						sdljfaskjdfhlkajsdhf laksjdfh laksjdfh lakjsdfh lkajsdhf lasjkdfh laskjdfh las
						kalsjdfh lkajsdhfl kajsdfhlkajsd hflkjasdhf lkajsdhflkjsadh lsdakjhf laskjd fh
						akjsdhf lkjasdh flkjashdf lkjasdhfl kajsdhflkajsdhfl kjasdhfl jkasdf.
						</p>
					</div>			
					
				</div>
			</div>

		</div>

		<div class="col-md-6">

			<div class="panel panel-default panel-personaje-marvel">
				<div class="panel-body">

					<div class="col-md-6">
						<img src="../export/iron_man.jpg" class="img-rounded icon-personaje-marvel" width="200" height="175">
					</div>
					<div class="col-md-6">
						<h3 class="name-personaje-marvel text-right">Iron Man</h3>

						<p>ñaskdjf añsldkjfas d ufihasldkjhfals dkfhalksdjfglashdgflkajsdhflkajsdhf
						sdljfaskjdfhlkajsdhf laksjdfh laksjdfh lakjsdfh lkajsdhf lasjkdfh laskjdfh las
						kalsjdfh lkajsdhfl kajsdfhlkajsd hflkjasdhf lkajsdhflkjsadh lsdakjhf laskjd fh
						akjsdhf lkjasdh flkjashdf lkjasdhfl kajsdhflkajsdhfl kjasdhfl jkasdf.
						</p>
					</div>			
					
				</div>
			</div>

		</div>
		<!--PERSONAJES -->
	</div>
	<!--contenido principal -->

</div>
<!--contenedor -->

</html>