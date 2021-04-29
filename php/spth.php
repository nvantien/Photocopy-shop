<?php
require_once("server.php");
$event=$_GET['event'];
switch ($event) {
	case "insertspth":
    $chucnangchinh=$_GET['chucnangchinh'];
    $mathuonghieu=$_GET['mathuonghieu']; 
    $masanpham=$_GET['masanpham'];
    $giaban=$_GET['giaban'];  
        $sql="INSERT INTO `sanphamthuonghieu` (chucnangchinh, mathuonghieu,masanpham,giaban) VALUES('".$chucnangchinh."','".$mathuonghieu."','".$masanpham."','".$giaban."')";
      
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
	case "deletespth":
       
        $chucnangchinh=$_GET['chucnangchinh'];
		
        $sql="DELETE FROM `sanphamthuonghieu` WHERE chucnangchinh='".$chucnangchinh."'";
        mysqli_query($conn, $sql);
            if (mysqli_affected_rows($conn)>0) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "updatespth":
        $chucnangchinh=$_GET['chucnangchinh'];
    $mathuonghieu=$_GET['mathuonghieu']; 
    $masanpham=$_GET['masanpham'];
    $giaban=$_GET['giaban'];    
        $sql="UPDATE  `sanphamthuonghieu` SET mathuonghieu='".$mathuonghieu."' , masanpham='".$masanpham."' , giaban='".$giaban."' WHERE chucnangchinh='".$chucnangchinh."'";
            
                 if (mysqli_query($conn, $sql)) {
                     $res[$event] = 1;
                 } else {
                     $res[$event] = 0;
                 }
             
             echo json_encode($res);
             mysqli_close($conn);
             break;
    case "getDSSPTH":
		
		$mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
		$vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select chucnangchinh, mathuonghieu,masanpham,giaban from sanphamthuonghieu ".$limit); 
		while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['chucnangchinh'];
            $usertemp['chucnangchinh']=$rows['chucnangchinh'];
            $usertemp['mathuonghieu']=$rows['mathuonghieu'];
            $usertemp['masanpham']=$rows['masanpham'];
            $usertemp['giaban']=$rows['giaban'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"select COUNT(*) as 'total' from sanphamthuonghieu");
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