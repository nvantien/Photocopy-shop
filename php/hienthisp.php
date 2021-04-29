<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {

   
    case "getDShienthisp":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select masp, tensp, maloai, hinhanhsp, model, mausac, giabansp, khuyenmai from sanpham ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['masp'];
            $usertemp['masp']=$rows['masp'];
            $usertemp['tensp']=$rows['tensp'];
            $usertemp['maloai']=$rows['maloai'];
            $usertemp['hinhanhsp']=$rows['hinhanhsp'];
            $usertemp['model']=$rows['model'];
            $usertemp['mausac']=$rows['mausac'];
            $usertemp['giabansp']=$rows['giabansp'];
            $usertemp['khuyenmai']=$rows['khuyenmai'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from sanpham");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
		$jsonData['totalpage'] =ceil($row['total']/$record);
	    $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
		mysqli_close($conn);
		break;
		default:
        # code...
        break;
}
?>