<?php 
header("Access-Control-Allow-Origin:http://localhost:8082");
	print_r(json_encode(array(
		'now'=>'eat',
		'then'=>'heapache',
		'tomo'=>'boxing'
	)))
?>