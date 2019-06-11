<?php

	if($_GET['query'] === 'f1'){
		print_r(json_encode(array(
			array( 'id' => '1' , 'name' => '1'),
			array( 'id' => '11' , 'name' => '11')
		)));
	}elseif($_GET['query'] === 'f2'){
		print_r(json_encode(array(
			array( 'id' => '2' , 'name' => '2'),
			array( 'id' => '22' , 'name' => '22'),
			array( 'id' => '222' , 'name' => '222')
		)));
	}elseif($_GET['query'] === 'f3'){
		print_r(json_encode(array(
			array( 'id' => '3' , 'name' => '3'),
			array( 'id' => '333' , 'name' => '333'),
			array( 'id' => '3333' , 'name' => '3333'),
			array( 'id' => '33333' , 'name' => '33333'),
			array( 'id' => '333333' , 'name' => '333333'),
			array( 'id' => '3333333' , 'name' => '3333333')
		)));
	}

?>

