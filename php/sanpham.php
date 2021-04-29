<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertsp":
    $masp=$_GET['masp'];
    $tensp=$_GET['tensp'];
    $maloai=$_GET['maloai'];
    $hinhanhsp=$_GET['hinhanhsp'];
    $model=$_GET['model'];
    $mausac=$_GET['mausac'];
    $giabansp=$_GET['giabansp'];
    $khuyenmai=$_GET['khuyenmai'];

        $sql="INSERT INTO `sanpham` (masp, tensp, maloai, hinhanhsp, model, mausac, giabansp, khuyenmai) VALUES('".$masp."','".$tensp."','".$maloai."','".$hinhanhsp."','".$model."','".$mausac."','".$giabansp."','".$khuyenmai."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
case "deletesp":
       
            $masp=$_GET['masp'];
            
            $sql="DELETE FROM `sanpham` WHERE masp='".$masp."'";
            mysqli_query($conn, $sql);
                if (mysqli_affected_rows($conn)>0) {
                    $res[$event] = 1;
                } else {
                    $res[$event] = 0;
                }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;
	case "updatesp":
        $masp=$_GET['masp'];
        $tensp=$_GET['tensp'];
        $maloai=$_GET['maloai'];
        $hinhanhsp=$_GET['hinhanhsp'];
        $model=$_GET['model'];
        $mausac=$_GET['mausac'];
        $giabansp=$_GET['giabansp'];
        $khuyenmai=$_GET['khuyenmai'];

        $sql="UPDATE  `sanpham` SET tensp='".$tensp."',maloai='".$maloai."',hinhanhsp='".$hinhanhsp."',model='".$model."', mausac='".$mausac."', giabansp='".$giabansp."', khuyenmai='".$khuyenmai."' WHERE masp='".$masp."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
   
    case "getDSSanPham":
		
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