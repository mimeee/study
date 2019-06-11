<?php
      
    include 'Classes/PHPExcel/IOFactory.php';
    date_default_timezone_set('Asia/Shanghai');

    $db = mysql_connect("localhost","root","");
    mysql_select_db("repaircenter");
    mysql_query("set names utf8");

    $inputFileName = './2.xlsx';
    // 读取excel文件
    try {
        $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
        $objReader = PHPExcel_IOFactory::createReader($inputFileType);
        $objPHPExcel = $objReader->load($inputFileName);
    } catch(Exception $e) {
        die('加载文件发生错误：'.pathinfo($inputFileName,PATHINFO_BASENAME).': '.$e->getMessage());
    }

    // 确定要读取的sheet，什么是sheet，看excel的右下角，真的不懂去百度吧
    $sheet = $objPHPExcel->getSheet(0);
    $highestRow = $sheet->getHighestRow();
    $highestColumn = $sheet->getHighestColumn();

    // 获取一行的数据
    for ($row = 2; $row <= $highestRow; $row++){
    // Read a row of data into an array
    echo $row;
    $rowData = $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row, NULL, TRUE, FALSE);
        dealData( $rowData[0] );
    }
    







    function dealData( $dataRow ){
        unset($dataRow[0]);
        if(empty(array_filter($dataRow))) return false;
        //对导入的时间进行格式化
        $dataRow[10] = gmdate('Y-m-d H:i:s',\PHPExcel_Shared_Date::ExcelToPHP($dataRow[10]));
        $dataRow[11] = gmdate('Y-m-d H:i:s',\PHPExcel_Shared_Date::ExcelToPHP($dataRow[11]));
        $dataRow[15] = gmdate('Y-m-d H:i:s',\PHPExcel_Shared_Date::ExcelToPHP($dataRow[15]));

        $customer = array();
        $custom_id = 0;
        $good = array();
        $good_id = 0;
        $log = array();
        $ship = array();
        $receiving = array();
        

         //创建要插入的客户数据   
        $matches = array();
        preg_match('/\d{6}/',$dataRow[7],$matches);
        $customer['customer_name'] = trim($dataRow[6]); 
        if(!empty($matches)) $customer['post_code'] = trim($matches[0]);      
        $customer['customer_address'] = $dataRow[7];
        // $customer['customer_number'] = trim(preg_replace("/[^\d|\+|\s|-]/","",$dataRow[8]));
        $customer['customer_number'] = trim($dataRow[8]);
        //默认customer_company是""
        $customer['customer_company'] = 41;

        //有客户数据的情况下
        if(trim($dataRow[6])){
            //判断客户是否存在，存在则取出id，不存在则添加，客户公司都默认为""，其id为41 
            $sql = "select id from customer where customer_name = '".$customer['customer_name']."'";
            $arrtemp = select($sql);
            if(empty($arrtemp)){
                //插入客户，获得id
                $custom_id = insert($customer,'customer')['id'];          
            }else{
                $custom_id = $arrtemp['id'];
            }
        }

        $good['sr'] = $dataRow[1] ;
        $good['rma'] = $dataRow[2];
        $good['jde'] = $dataRow[3];
        $good['pn'] = $dataRow[4];
        $good['sn'] = $dataRow[5];
        $good['sr_owner'] = srOwner($dataRow[9]);
        $good['created_time'] = $dataRow[10];
        $good['update_user'] = 'admin';
        $good['last_update_time'] = date("Y-m-d H:i:s");
        $good['equipment_cleanliness'] = $dataRow[20];
        $good['to_factory'] = $dataRow[11];
        //默认记录状态是repair-done
        $good['status'] = 12;
        //默认记录创建人是admin
        $good['creator'] = 'admin';
        $good['custom_id'] = $custom_id;
        $good['isDisabled'] = 'NO';

        //插入good记录
        $good_id = insert($good,'good')['id'];


        if(trim($dataRow[18]) && is_numeric($dataRow[18])){
            $ship['create_time'] = $dataRow[15];
            $ship['shipping_number'] = $dataRow[18];
            $ship['order_type'] = "SHP";
            //默认记录创建人是admin
            $ship['creator'] = 'ADMIN';
            $ship['main_id'] = $good_id;
            //默认shipping_company是""
            $ship['shipping_company'] = 33;
            //插入ship记录
            insert($ship,'shipping');
        }

        if(trim($dataRow[16]) && is_numeric($dataRow[16])){
            $receiving['shipping_number'] = $dataRow[16];
            $receiving['create_time'] = $dataRow[10];
            $receiving['order_type'] = "REC";
            //默认记录创建人是admin
            $receiving['creator'] = 'ADMIN';
            $receiving['main_id'] = $good_id;
            //默认shipping_company是""
            $receiving['shipping_company'] = 33;
            //插入ship记录
            insert($receiving,'shipping');
        }

        //默认记录创建人是admin
        $log['user'] = "ADMIN"; 
        $log['good'] = $good_id;
        //默认记录状态是repair-done
        $log['status'] = 12; 
        $log['date'] = date("Y-m-d H:i:s"); 
        $log['type'] = "EXCEL IMPORT"; 
        $log['comment'] = ""; 
        $log['current_assigned_owner'] = 0; 
        $log['receiving_number'] = "";
    
        if(trim($dataRow[16]) && is_numeric($dataRow[16])){
            $log['receiving_number'] .= "[REC ".$dataRow[16]."]";
        }
        if(trim($dataRow[18]) && is_numeric($dataRow[18])){
            $log['receiving_number'] .= "<br/>[SHP ".$dataRow[18]."]";
        }
        //插入log记录
        insert($log,'log');
    }


    function select($sql){
        $stmt = mysql_query($sql);
        return mysql_fetch_assoc($stmt);
    }

    function insert($data,$table){
        $keys = implode(",",array_keys($data));
        $values = implode("','",array_values($data));
        $sql = "INSERT INTO $table ($keys) VALUES ('$values')";
        $stmt = mysql_query($sql);
        $arr = select("select * from $table WHERE id = (select max(id) from $table)
"); 
        return $arr;
    }

    function srOwner($sr_owner){
        $array = array(
            'CXIAO'=>'Betty.Xiao',
            'YU'=>'Lina.Yu',
            'CXIE'=>'Emily.Xie',
            'YJIN'=>'Yu.Jin',
            'WLI1'=>'Will.Du',
            'XWANG'=>'XWANG'
        );
        if(!in_array(strtoupper($sr_owner),array_keys($array))) return 0;
        $person = $array[strtoupper($sr_owner)];
        return select("SELECT * from brc_users WHERE username = '$person'")['id'];
     
    }
?>