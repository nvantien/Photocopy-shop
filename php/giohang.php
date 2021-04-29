<?php
require_once("server.php");
$event=$_GET['event'];

switch($event){
    case "insert":
        $maspgh=$_GET['masp'];
        $tenspgh=$_GET['tensp'];
        $hinhanhgh=$_GET['hinhanhsp'];
        $giabangh=$_GET['giabansp'];
        $soluonggh=$_GET['soluongsp'];
        $tongtien=$giabangh*$soluonggh;

        $sql="INSERT INTO `giohang` (maspgh,tenspgh,hinhanhgh,giabangh,soluonggh,tongtien) 
        VALUES('".$maspgh."','".$tenspgh."','".$hinhanhgh."','".$giabangh."','".$soluonggh."','".$tongtien."')";
        if (mysqli_query($conn, $sql)){
            $res[$event] = 1;
        }else{
            $res[$event] = 0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    
    case "delete":

        $maspgh=$_GET['maspgh'];

        $sql="DELETE FROM `giohang` WHERE maspgh='".$maspgh."'";
        mysqli_query($conn, $sql);
        if (mysqli_affected_rows($conn)>0){
            $res[$event]=1;
        }else{
            $res[$event]=0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "update":
        $soluonggh=$_GET['soluonggh'];
        $giabangh=$_GET['giabangh'];
        $tongtien=$giabangh*$soluonggh;
            $sql="UPDATE  `giohang` SET tenspgh='".$tenspgh.
            $hinhanhgh=$_GET['hinhanhgh'];
            $giabangh=$_GET['giabangh'];
            $soluonggh=$_GET['soluonggh'];
            $tongtien=$giabangh*$soluonggh;
            "'WHERE maspgh='".$maspgh."'";
        
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;
        
    case "getDSGioHang":
    
        $mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
        $vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"SELECT maspgh,tenspgh,hinhanhgh,giabangh,soluonggh,tongtien FROM giohang ".$limit); 
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['maspgh'];
            $usertemp['maspgh']=$rows['maspgh'];
            $usertemp['tenspgh']=$rows['tenspgh'];
            $usertemp['hinhanhgh']=$rows['hinhanhgh'];
            $usertemp['giabangh']=$rows['giabangh'];
            $usertemp['soluonggh']=$rows['soluonggh'];
            $usertemp['tongtien']=$rows['tongtien'];
            
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"SELECT COUNT(*) as 'total' from giohang");
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