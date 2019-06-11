<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<style>
		div{
			margin:10px;
			border: 1px solid #eee;
			padding: 10px;
		}
	</style>
</head>
<body>

	
		<?php

		require("PaginationFunction.php");

		$info = array(
			"<div>1</div>",
			"<div>2</div>",
			"<div>3</div>",
			"<div>4</div>",
			"<div>5</div>",
			"<div>6</div>",
			"<div>7</div>",
			"<div>8</div>",
			"<div>9</div>",
			"<div>10</div>",
			"<div>11</div>"
		);
		$page = $_GET['page'];
		$pageSize = 3;
		$a = getPage($page,$pageSize,$info);
		$start = $a['range']['start'];
		$end = $a['range']['end'];

		for($i = $start; $i < $end; $i++){
			if(!isset($info[$i])){
				$b[] = "<p><div>&emsp;</div></p>" . "<hr/>";
			}else{
				$b[] = "<p>" . $info[$i] ."</p>" . "<hr/>";
			}
			
		}
		echo implode("",$b);
		echo $a['page'];
		
		?>
	

</body>
</html>

