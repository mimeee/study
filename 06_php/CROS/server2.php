<?php 
	header("Access-Control-Allow-Origin:http://localhost:8082");
	header("Access-Control-Allow-Headers:content-type");
	header("Access-Control-Allow-Methods:GET, POST, PUT");
	print_r(json_encode(array('d'=>4)));
?>