<?php

include "connect.php";

if(isset($_GET['productId'])){
	$productId=$_GET['productId'];
    if(!empty($productId)){
		$sql="select * from product where productId='$productId'";

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