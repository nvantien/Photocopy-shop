<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
    case "UpdateAvatar":
        $avatar=$_GET['avatar'];
        $username=$_GET['username']; 
           $sql="update user set avatar='".$avatar."' where username='".$username."'";
          
           
                if (mysqli_query($conn, $sql)) {
                    $res[$event] = 1;
                } else {
                    $res[$event] = 0;
                }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;
	case "inserttl":
    $matl=$_GET['matl'];
	$tentl=$_GET['tentl'];   
      

        $sql="INSERT INTO `theloai` (matl,tentl) VALUES('".$matl."','".$tentl."')";
      
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deletetl":
       
        $matl=$_GET['matl'];
		
        $sql="DELETE FROM `theloai` WHERE matl='".$matl."'";
       mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "updatetl":
       $matl=$_GET['matl'];
	   $tentl=$_GET['tentl'];
       

        $sql="UPDATE  `theloai` SET tentl='".$tentl."' WHERE matl='".$matl."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSTheLoai":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select matl,tentl from theloai ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['matl'];
            $usertemp['matl']=$rows['matl'];
            $usertemp['tentl']=$rows['tentl'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from theloai");
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