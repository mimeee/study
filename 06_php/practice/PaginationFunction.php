<?php

		function getPage($page,$pageSize,$info){
			$pageNum = ceil(count($info) / $pageSize);
			$page = dealPageNum($page,$pageNum);
			$showInfo = array();

			$start = ($page - 1) * $pageSize;
			$end = $start + $pageSize;
		

			$pages = '<ul class="pagination">';
			if($page == 1){
				$pages .= '<li class="page-item disabled">';
			}else{
				$pages .= '<li class="page-item">';
			}
			$pages .= '<a class="page-link" href="?page='.($page - 1).'">Previous</a>';
			$pages .= '</li>';
			for($i = 1; $i <= $pageNum; $i++){
				if( $i == $page){
					$pages .= '<li class="page-item active"><a class="page-link" href="?page='.$i.'">'. $i .'</a></li>';
				}else{
					$pages .= '<li class="page-item"><a class="page-link" href="?page='.$i.'">'. $i .'</a></li>';
				}
				
			}

			if($page == $pageNum){
				$pages .= '<li class="page-item disabled"><a class="page-link" href="?page='.($page + 1).'">Next</a></li>';
			}else{
				$pages .= '<li class="page-item"><a class="page-link" href="?page='.($page + 1).'">Next</a></li>';
			}
			$pages .= "</ul>"; 
			return array('page'=> $pages,'range'=> array("start"=>$start,'end'=>$end));
		}	

		function dealPageNum($page,$limit){
			if(isset($page)){
				if(preg_match('/\D|0/',$page)){
					return 1;
				}else{
					if($page > $limit){
						return $limit;
					}
					return floor(abs($page));
				}
			}else{
				return 1;
			}
		}

?>