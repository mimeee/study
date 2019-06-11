<?php
Include "getDocx.class.php" ;
// 实例化
$text = new GetDocx();
// 加载docx文件
$text->setDocx('123.docx','img/');
// 将内容存入$docx变量中
$docx = $text->extract();
// 调试输出
var_dump($docx);
// $dom = new DomDocument();
// $dom->load('2.xml');
// $bodyNode = $dom->getElementsByTagName('body');//获取people的节点数组
// $bodyNode = $bodyNode->item(0);
// $xpath = new DOMXPath($dom);
// $query = 'w:t/w:pict';
// $xmlLists = $xpath->query($query, $bodyNode);
// $xmlLists = $xmlLists->item(0);
// $xml = $bodyNode->ownerDocument->saveXML($bodyNode);

// $str2 = '</w:binData>';
// $xml = preg_replace($str,'<img src="data:image/jpeg;base64,',$xml);
// $xml = str_replace($str2,'"/>',$xml);
// var_dump($xml);