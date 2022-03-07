<?php
header('Access-Control-Allow-Origin: *');  

header('Content-Type: application/json'); 

header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With'); 

$host = "localhost";    /* Host name */
$user = "root";         /* User */
$password = "";         /* Password */
$dbname = "shopping";   /* Database name */

// Create connection
$con = new mysqli($host, $user, $password,$dbname);

// Check connection
if ($con->connect_error)
{
    die("connection failed :".$con->connect_error);
}

?>