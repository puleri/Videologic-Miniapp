<?php

require_once './db_connection.php';
require_once './admin_creds.php';

require_once '../vendor/autoload.php';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

$strEmail = $_POST['email'];
$strPassword = $_POST['password'];

$sql = "SELECT COUNT(1) FROM `user` WHERE username = '${strEmail}'";

$index = [];

$result = $link->query($sql);

while($row = $result->fetch_assoc()) {

$user_row = ['COUNT(1)'=> $row['COUNT(1)']] ;

array_push($index, $user_row);
}
echo json_encode($index);

mysqli_close($link);

// $token = hash('sha256', uniqid());
// echo "hello, $token";
