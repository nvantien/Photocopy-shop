
<?php

$event=$_GET["event"]; 
switch ($event)
{
	case "guidata":
		echo "Hello. Nhan duoc roi";
		break;
	default:
		echo "get out!!";
		break;
}

?>