
<?php

$event=$_POST["event"]; 
switch ($event)
{
	case "guidata":
		echo "Hello. Tao da nhan duoc roi";
		break;
	default:
		echo "get out!!";
		break;
}

?>