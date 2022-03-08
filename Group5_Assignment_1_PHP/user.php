<?php

include "connect.php";

if(isset($_GET['email']) && isset($_GET['password'])){
	$email=$_GET['email'];
	$password=$_GET['password'];
    if(!empty($email) && !empty($password)){
		$sql="select * from user where email = '$email' && password = '$password'";
        
		$fetchdata=mysqli_query($con, $sql);
		if($fetchdata && mysqli_num_rows($fetchdata) > 0){
            $response = array();
        
            while($row = mysqli_fetch_assoc($fetchdata)){
                $response[] = $row;
            }
            echo json_encode($response);
            die;
        }
    }
}
else{
    echo "Invalid";
}

?>