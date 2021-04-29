<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertnv":
    $manv=$_GET['manv'];
    $hotennv=$_GET['hotennv']; 
    $gt=$_GET['gt'];
    $ns=$_GET['ns'];  
        $sql="INSERT INTO `nhanvien` (manv,hotennv,gt,ns) VALUES('".$manv."','".$hotennv."','".$gt."','".$ns."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
case "deletenv":
       
            $manv=$_GET['manv'];
            
            $sql="DELETE FROM `nhanvien` WHERE manv='".$manv."'";
            mysqli_query($conn, $sql);
                if (mysqli_affected_rows($conn)>0) {
                    $res[$event] = 1;
                } else {
                    $res[$event] = 0;
                }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;
	case "updatenv":
        $manv=$_GET['manv'];
        $hotennv=$_GET['hotennv']; 
        $gt=$_GET['gt'];
        $ns=$_GET['ns']; 

        $sql="UPDATE  `nhanvien` SET hotennv='".$hotennv."',gt='".$gt."',ns='".$ns."' WHERE manv='".$manv."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSNhanVien":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select manv, hotennv, gt, ns from nhanvien ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['manv'];
            $usertemp['manv']=$rows['manv'];
            $usertemp['hotennv']=$rows['hotennv'];
            $usertemp['gt']=$rows['gt'];
            $usertemp['ns']=$rows['ns'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from nhanvien");
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