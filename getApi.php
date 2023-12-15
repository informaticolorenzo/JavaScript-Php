<?php 
	header('Access-Control-Allow-Origin: *');
	$url="https://jsonplaceholder.typicode.com/users";
	$json = file_get_contents($url); //Aqui tengo todo el contenido
	$obj = json_decode($json);
	echo json_encode($obj); //Devuelvo el contenido a la función
	
?>  
