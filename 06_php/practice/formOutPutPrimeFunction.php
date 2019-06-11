<?php





	function getClassName($classname){
			switch ($_POST['style']) {
				case 'one':
					$className = "table";
					break;
				case 'two':
					$className = "table table-bordered";
					break;
				case 'three':
					$className = "table table-bordered table-hover";
					break;
				case 'four':
					$className = "table table-bordered";
					break;		
			}			
			return $className;
	}




	//找出一定范围内的素数
	function printPrime($start, $end){
		$arr = array();
		for($i = $start; $i < $end; $i++){
			if(isPrime($i)) $arr[] = $i;
		}
		return $arr;
	}

	function isPrime($num){
		if($num != 1){			
			for($i = 2;$i < $num;$i ++){
				if($num % $i === 0){ 
					return false;
				}			
			}
			return true;
		}
	}

	function calcMultiTableLine($totalNum){
		return floor(sqrt($totalNum) - 0.5);
	}


	function echoTable($prime,$style = 'one',$className = 'table',$limit = 5){
		echo "<table class='$className'>";
		echo "<tr>";
		$echoTdNum = 0;	
		if($style === 'four'){
			$echoTdNumLimit = 1;
		}else{
			$echoTdNumLimit = $limit;
		}
		
		foreach ($prime as $key => $value) {
			if($echoTdNum === $echoTdNumLimit){
				echo "</tr>";
				echo "<tr>";
				$echoTdNum = 0;
				if($style === 'four'){
					$echoTdNumLimit++;
				}
			}
									
			echo "<td>$value</td>";
			$echoTdNum++;					
		}		
		while($echoTdNum !== $echoTdNumLimit){
			echo "<td></td>";
			$echoTdNum ++;
		}
		echo "</table>";
	}

?>