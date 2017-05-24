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
			"prueba.js"
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
			

			<form class="navbar-form navbar-left" role="search">
				<div class="form-group">
					<input type="text" class="form-control input-search-marvel" placeholder="Search">
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>

		</div><!-- /.navbar-collapse -->
	</div>
</nav>



</html>