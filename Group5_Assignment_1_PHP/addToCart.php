<?php

include "connect.php";

if(isset($_GET['productId'])){
	$productId=$_GET['productId'];
    $cartItemQty=$_GET['cartItemQty'];
    $email=$_GET['email'];
    $price=$_GET['price'];
    $totalPrice=$_GET['totalPrice'];
    if(!empty($productId)){
		$sql="insert into cart (email, productId, price, totalPrice, cartItemQty) values ('$email','$productId','$price','$totalPrice','$cartItemQty')";

		$fetchdata=mysqli_query($con, $sql);
        echo $fetchdata;
    }
}
else{
    echo "Invalid";
}

?>