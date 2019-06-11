<?php 
class readXML
{
	public function __construct(){
		

		/*
		$pattern = '/<([^>]+)?( name="[^\"]+")?( type="[^\"]+")?>(.+?)<\/\1>?/s';
		
		print_r(count($con));
		$matches = array();
		preg_match($pattern,$con,$matches);
		print_r($matches);
		  $xml=new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><UsersInfo />');
		  $item=$xml->addchild("item");
		  $item->addchild("name","冯绍峰");
		  $item->addchild("age","30"); 
		  $item2=$xml->addchild("item");
		  $item2->addchild("name","潘玮柏");
		  $item2->addchild("age","29");
		  $item2->addAttribute("id","02");
		  header("Content-type: text/xml");
		  echo $xml->asXml();
		  $xml->asXml("student.xml");
		*/	
	}

	public function xmlToArr($filename){
		$file = $filename;
		$con = file_get_contents($file);
		$con = new SimpleXMLElement($con);
		$this->tranToArr($con);
		return $con;
	}


/*
	Array
	(
	    [stc] => Array(
            [@attributes] => Array(
                    [name] => STC
                    [type] => string
             )
			[version] => 4.90
        )
	    [stcPort] => Array(
            [0] => Array(
                [@attributes] => Array(
                        [name] => stcPort1
                        [type] => string
                )
                [IP] => 16.16.16.16
                [slot] => 1
                [port] => 1
                [MediaType] => fiber
                [speed] => SPEED_100G
                [FEC] => FALSE
                [AutoNegotiation] => FALSE
            )
            [1] => Array(
                [@attributes] => Array(
                        [name] => stcPort1
                        [type] => string
                )
                [IP] => 1.1.1.1
                [slot] => 1
                [port] => 1
                [MediaType] => fi
                [speed] => SPEED_
                [FEC] => FAL
                [AutoNegotiation] => FAL
            )
        )
    )
 */

	public function ArrToXml($arr,$root="",$dir=""){
		if($root === ""){
			$initstr = '<?xml version="1.0" encoding="utf-8"?><options/>';
		}else{
			$initstr = '<?xml version="1.0" encoding="utf-8"?><'.$root.'/>';
		};

		$xml=new SimpleXMLElement($initstr);
		foreach($arr as $key => $value){
			if(is_array($value)){
				$change = $this->circle($xml,$key,$value);		
			}else{
				$xml->addchild($key,$value);
			}		
		}
		if($dir === ""){
			$xml->asXml();
		}else{
			$xml->asXml($dir);
		}
		
	}


	public function circle(&$xml,$key,$value){
		if($this->is_assoc($value)){
			$item = $xml->addchild($key);
			$this->setAttr($item,$value);
		}else{
			foreach ($value as $k => $v) {
				// $item = $xml->addchild($key);					
				$this->circle($xml,$key,$v);
			}
		}
	}

	public function setAttr(&$item,$arr){
		foreach ($arr as $key => $value) {
			if($key === "@attributes"){
				foreach ($value as $kk => $vv) {
					$item->addAttribute($kk,$vv);
				}					
			}elseif(is_array($value)){
				$this->circle($item,$key,$value);
			}else{
				$item->addchild($key,$value);
			}
		}
	}

	public function singlechange(&$arr){
		return (array)$arr;
	}

	public function is_assoc($arr) {
		return array_keys($arr) !== range(0, count($arr) - 1);
	} 

	public function tranToArr(&$arr){
		if(is_array($arr)){		
			foreach ($arr as $key => $value) {
				$this->tranToArr($arr[$key]);
			}
		}elseif (is_object($arr)) {
			$arr = (array)$arr;
			$this->tranToArr($arr);
		}
	}
}
	  
	
?>