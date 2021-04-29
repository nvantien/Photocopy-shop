<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertctdh":
    $id=$_GET['id'];
    $sodhct=$_GET['sodhct']; 
    $maspct=$_GET['maspct'];
    $soluong=$_GET['soluong'];  
    $giatien=$_GET['giatien']; 

        $sql="INSERT INTO `chitietdh` (id, sodhct, maspct, soluong, giatien) VALUES('".$id."','".$sodhct."','".$maspct."','".$soluong."','".$giatien."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deletectdh":
       
        $id=$_GET['id'];
		
        $sql="DELETE FROM `chitietdh` WHERE id='".$id."'";
        mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;

        case "updatectdh":
            $id=$_GET['id'];
            $sodhct=$_GET['sodhct']; 
            $maspct=$_GET['maspct'];
            $soluong=$_GET['soluong'];  
            $giatien=$_GET['giatien'];     
            $sql="UPDATE  `chitietdh` SET sodhct='".$sodhct."', maspct='".$maspct."' , soluong='".$soluong."' , giatien='".$giatien."' WHERE id='".$id."'";
                
                    if (mysqli_query($conn, $sql)) {
                        $res[$event] = 1;
                    } else {
                        $res[$event] = 0;
                    }
                
                echo json_encode($res);
                mysqli_close($conn);
                break;
    case "getDSCTDH":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select id, sodhct, maspct, soluong, giatien from chitietdh ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['id'];
            $usertemp['id']=$rows['id'];
            $usertemp['sodhct']=$rows['sodhct'];
            $usertemp['maspct']=$rows['maspct'];
            $usertemp['soluong']=$rows['soluong'];
            $usertemp['giatien']=$rows['giatien'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from chitietdh");
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