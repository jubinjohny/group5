<?php

include "connect.php";

if(isset($_GET['orderTotal']) && isset($_GET['email'])){
	$orderTotal=$_GET['orderTotal'];
    $email=$_GET['email'];
    if(!empty($orderTotal)){
		$sql="insert into orders (email, orderTotal) values ('$email','$orderTotal')";

		$fetchdata=mysqli_query($con, $sql);
        echo $fetchdata;
    }
    else{
        echo "Invalid";
    }
}
else{
    echo "Invalid";
}

?>