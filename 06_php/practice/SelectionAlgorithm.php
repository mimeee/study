<?php

	$array = array(20, 5, 10, 0);
	
	for ($i = 0; $i < count($array); $i++) {
		$temp = $i;
		for ($j = $i + 1; $j < count($array); $j++) {			
			if( $array[$temp] > $array[$j]){							
				$temp = $j;
			}
		}

		switches( $array[$i] , $array[$temp] );
	}

	function switches( &$v1, &$v2 ){
		$temp = $v1;
		$v1 = $v2;
		$v2 = $temp;
	}

	print_r($array);
?>