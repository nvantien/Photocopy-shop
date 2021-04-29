<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertdh":
    $sodh=$_GET['sodh'];
    $ngaydh=$_GET['ngaydh'];
    $trangthaidh=$_GET['trangthaidh'];
    $ngaydukiengiao=$_GET['ngaydukiengiao'];
    $manvdh=$_GET['manvdh'];
    $makhdh=$_GET['makhdh'];

        $sql="INSERT INTO `dondathang` (sodh, ngaydh, trangthaidh, ngaydukiengiao, manvdh, makhdh) VALUES('".$sodh."','".$ngaydh."','".$trangthaidh."','".$ngaydukiengiao."','".$manvdh."','".$makhdh."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
case "deletedh":
       
            $sodh=$_GET['sodh'];
            
            $sql="DELETE FROM `dondathang` WHERE sodh='".$sodh."'";
            mysqli_query($conn, $sql);
                if (mysqli_affected_rows($conn)>0) {
                    $res[$event] = 1;
                } else {
                    $res[$event] = 0;
                }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;
	case "updatedh":
        $sodh=$_GET['sodh'];
        $ngaydh=$_GET['ngaydh'];
        $trangthaidh=$_GET['trangthaidh'];
        $ngaydukiengiao=$_GET['ngaydukiengiao'];
        $manvdh=$_GET['manvdh'];
        $makhdh=$_GET['makhdh'];

        $sql="UPDATE  `dondathang` SET ngaydh='".$ngaydh."',trangthaidh='".$trangthaidh."', ngaydukiengiao='".$ngaydukiengiao."', manvdh='".$manvdh."' , makhdh='".$makhdh."' WHERE sodh='".$sodh."'";
       
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSDonHang":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select sodh, ngaydh, trangthaidh, ngaydukiengiao, manvdh, makhdh from dondathang ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['sodh'];
            $usertemp['sodh']=$rows['sodh'];
            $usertemp['ngaydh']=$rows['ngaydh'];
            $usertemp['trangthaidh']=$rows['trangthaidh'];
            $usertemp['ngaydukiengiao']=$rows['ngaydukiengiao'];
            $usertemp['manvdh']=$rows['manvdh'];
            $usertemp['makhdh']=$rows['makhdh'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from dondathang");
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