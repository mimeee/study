<?php

	$array = array(20, 5, 10, 0);

	for ($i = 0; $i < count($array); $i++) {
		for ($j = $i + 1; $j < count($array); $j++) {
			if( $array[$i] > $array[$j]){
				switches( $array[$i] , $array[$j] );
			}
		}
	}
	print_r($array);
	function switches( &$v1, &$v2 ){
		$temp = $v1;
		$v1 = $v2;
		$v2 = $temp;
	}

?>