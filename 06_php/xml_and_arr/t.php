<?php
	require "xml.class.php";

	$file = new readXML();
	$arr = $file->xmlToArr("1.xml");
	$file->ArrToXml($arr,"options","xmll.xml");
	$file->ArrToXml($arr);
	
?>