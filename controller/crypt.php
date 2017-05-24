<?php

	//ini_set('error_reporting', E_ALL|E_STRICT);
	//ini_set('display_errors', 1);
	
	header('content-type: aplication/json; charset=utf-8');

	/**
	 * Esta clase encripta y desencripta valores
	 */
	include("codifica.php"); 
	
	$accion= isset($_GET['tipo'])?$_GET['tipo']:"x";

 	$r = array();

 	//echo $_GET['valor'];

	switch ($accion) {		
 		
		//----------------------------------------------------------------------------------------------------
	 	case 'md5':

	 		$codifica_inst = new codifica($_GET['valor']);
	 		/**/
	 		$encriptado = $codifica_inst->p_md5();
	 		
	 		
	 		if($encriptado){
	 			
	 			$r["encriptado"] = $encriptado;
	 			//$r["get"] = $_GET['valor']; 			

	 		}else{

	 			$r["estado"] = "Error";
	 			$r["mensaje"] = "No se encriptó md5.";
	 		}

	 	break;
		//----------------------------------------------------------------------------------------------------

		//----------------------------------------------------------------------------------------------------
	 	
		//----------------------------------------------------------------------------------------------------

	}
	
	//print_r($r);
	echo json_encode($r); //imprime el json

 ?>