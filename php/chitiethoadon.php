<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertcthd":
    $maspcthd=$_GET['maspcthd'];
    $sohdct=$_GET['sohdct']; 
    $sl=$_GET['sl'];
    $dongia=$_GET['dongia'];  
        $sql="INSERT INTO `chitiethd` (maspcthd, sohdct, sl, dongia) VALUES('".$maspcthd."','".$sohdct."','".$sl."','".$dongia."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deletecthd":
       
        $maspcthd=$_GET['maspcthd'];
		
        $sql="DELETE FROM `chitiethd` WHERE maspcthd='".$maspcthd."'";
        mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "updatecthd":
        $maspcthd=$_GET['maspcthd'];
        $sohdct=$_GET['sohdct']; 
        $sl=$_GET['sl'];
        $dongia=$_GET['dongia'];    
        $sql="UPDATE  `chitiethd` SET sohdct='".$sohdct."' , sl='".$sl."', dongia='".$dongia."'   WHERE maspcthd='".$maspcthd."'";
            
                 if (mysqli_query($conn, $sql)) {
                     $res[$event] = 1;
                 } else {
                     $res[$event] = 0;
                 }
             
             echo json_encode($res);
             mysqli_close($conn);
             break;
    case "getDSCTHD":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select maspcthd, sohdct, sl, dongia from chitiethd ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['maspcthd'];
            $usertemp['maspcthd']=$rows['maspcthd'];
            $usertemp['sohdct']=$rows['sohdct'];
            $usertemp['sl']=$rows['sl'];
            $usertemp['dongia']=$rows['dongia'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from chitiethd");
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