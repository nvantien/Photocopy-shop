<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertkh":
    $makh=$_GET['makh'];
    $tenkh=$_GET['tenkh']; 
    $phone=$_GET['phone'];
    $email=$_GET['email'];  
        $sql="INSERT INTO `khachhang` (makh,tenkh,phone,email) VALUES('".$makh."','".$tenkh."','".$phone."','".$email."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deletekh":
       
        $makh=$_GET['makh'];
		
        $sql="DELETE FROM `khachhang` WHERE makh='".$makh."'";
        mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "updatekh":
        $makh=$_GET['makh'];
        $tenkh=$_GET['tenkh']; 
        $phone=$_GET['phone'];
        $email=$_GET['email'];  
        $sql="UPDATE  `khachhang` SET tenkh='".$tenkh."' , phone='".$phone."' , email='".$email."' WHERE makh='".$makh."'";
            
                 if (mysqli_query($conn, $sql)) {
                     $res[$event] = 1;
                 } else {
                     $res[$event] = 0;
                 }
             
             echo json_encode($res);
             mysqli_close($conn);
             break;
    case "getDSKhachHang":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select makh,tenkh,phone,email from khachhang ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['makh'];
            $usertemp['makh']=$rows['makh'];
            $usertemp['tenkh']=$rows['tenkh'];
            $usertemp['phone']=$rows['phone'];
            $usertemp['email']=$rows['email'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from khachhang");
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