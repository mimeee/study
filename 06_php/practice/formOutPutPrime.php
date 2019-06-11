<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<style>
		body{
			padding-top: 10px;
		}
	</style>
</head>
<body>
		<div class="container">
			<form action="" method="post">
					<div class="form-group row">
						<div class="col-md-2 text-right">
							<label for="min" class="col-form-label"> 最小值 </label>
						</div>
						<div class="col-md-8">
							<input type="text" name="min" id="min" class="form-control" value="<?php if(isset($_POST['min'])) echo $_POST['min']?>">
						</div>
					</div>

					<div class="form-group row">
						<div class="col-md-2 text-right">
							<label for="max" class="col-form-label"> 最大值 </label>
						</div>
						<div class="col-md-8">
							<input type="text" name="max" id="max" class="form-control" value="<?php if(isset($_POST['min']))  echo $_POST['max']?>">
						</div>
					</div>

					<div class="form-group row">
						<div class="col-md-2 text-right">
							<label for="style" class="col-form-label"></label>
						</div>
						<div class="col-md-8">
							<div class="form-check form-check-inline">
								<input type="radio" name="style" id="one" 
								<?php 
								if( isset($_POST['style'])){
									if($_POST['style'] == 'one') echo "checked"; 
								}else{
									echo "checked";
								}
								?>
								
								value="one" class="form-check-input">
								<label for="one" class="form-check-label" >默认</label>
							</div>
							<div class="form-check form-check-inline">
								<input type="radio" name="style" id="two" value="two" class="form-check-input" 
								<?php 
								if(isset($_POST['style']) && $_POST['style'] === 'two') echo "checked"; ?>
								>
								<label for="two" class="form-check-label">条纹</label>
							</div>
							<div class="form-check form-check-inline">
								<input type="radio" name="style" id="three" value="three" class="form-check-input" <?php if(isset($_POST['style']) && $_POST['style'] === 'three') echo "checked"; ?>>
								<label for="three" class="form-check-label">hover</label>
							</div>
							<div class="form-check form-check-inline">
								<input type="radio" name="style" id="four" value="four" class="form-check-input" <?php if(isset($_POST['style']) && $_POST['style'] === 'four') echo "checked"; ?>>
								<label for="four" class="form-check-label">乘法表</label>
							</div>
						</div>
					</div>

					<div class="form-group row">
						<div class="col-md-2 text-right">
							<label for="sort" class="col-form-label"></label>
						</div>
						<div class="col-md-8">
							<div class="form-check form-check-inline">
								<input type="radio" name="sort" id="minToMax" checked value="1" class="form-check-input" <?php if(isset($_POST['sort']) && $_POST['sort'] === '1') echo "checked"; ?>">
								<label for="minToMax" class="form-check-label" >从小到大</label>
							</div>
							<div class="form-check form-check-inline">
								<input type="radio" name="sort" id="maxToMin" value="2" class="form-check-input" <?php if(isset($_POST['sort']) && $_POST['sort'] === '2') echo "checked"; ?>">
								<label for="maxToMin" class="form-check-label">从大到小</label>
							</div>
						</div>
					</div>

					<div class="form-group row">
						<div class="offset-md-2 col-md-8">
							<input type="submit" value="submit" name="submit" class="btn btn-primary w-100">
						</div>
					</div>
			</form>

		</div>
</body>
</html>
<?php
	
	require('formOutPutPrimeFunction.php');
	
	if(isset($_POST['min']) && isset($_POST['max'])){
		$prime = printPrime($_POST['min'], $_POST['max']);

		if(isset($_POST['style'])){
			$className = getClassName($_POST['style']);
		}

		if(isset($_POST['sort'])){
			if($_POST['sort'] === "2"){
				$prime = array_reverse($prime);
			}
		}


		//循环打印出prime
		echoTable($prime,$_POST['style'],$className,5);

	}



?>