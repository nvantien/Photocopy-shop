<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertth":
    $math=$_GET['math'];
	$tenth=$_GET['tenth'];   
      

        $sql="INSERT INTO `thuonghieu` (math,tenth) VALUES('".$math."','".$tenth."')";
      
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deleteth":
       
        $math=$_GET['math'];
		
        $sql="DELETE FROM `thuonghieu` WHERE math='".$math."'";
       mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "updateth":
       $math=$_GET['math'];
	   $tenth=$_GET['tenth'];
       
        $sql="UPDATE  `thuonghieu` SET tenth='".$tenth."' WHERE math='".$math."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSThuongHieu":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select math,tenth from thuonghieu ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['math'];
            $usertemp['math']=$rows['math'];
            $usertemp['tenth']=$rows['tenth'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from thuonghieu");
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