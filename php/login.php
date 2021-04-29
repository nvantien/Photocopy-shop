<?php
require_once("server.php");
$event=$_POST['event'];
switch ($event) {
    case "login":
		$u=$_POST['username'];
		$p=md5($_POST['password']);
		$check='';
		$sql=mysqli_query($conn,"select username,password,avatar from user where username ='".$u."'and password='".$p."'"); 
		while($rows=mysqli_fetch_array($sql))
        {
            $usertemp['username']=$rows['username'];
            $usertemp['password']=$rows['password'];
			$usertemp['avatar']=$rows['avatar'];
			$check=$rows['username'];      
        }
        if($check!=''){
			$jsonData['event']=1;
			$jsonData['items']=$usertemp;
		
        	echo json_encode($jsonData);
		}else
		{
			$jsonData['event']=0;
			echo json_encode($jsonData);
		}	
		mysqli_close($conn);
		 break;
		default:
        # code...
        break;
}
?>