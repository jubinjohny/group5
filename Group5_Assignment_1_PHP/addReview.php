<?php

include "connect.php";

if(isset($_GET['productId']) && isset($_GET['rating'])){
	$productId=$_GET['productId'];
    $rating=$_GET['rating'];
    $text=$_GET['text'];
    $email=$_GET['email'];
    if(!empty($productId) && !empty($rating)){
		$sql="insert into review (email, productId, rating, text) values ('$email','$productId','$rating','$text')";

		$fetchdata=mysqli_query($con, $sql);
        echo $fetchdata;
    }
}
else{
    echo "Invalid";
}

?>