-=]<?php
require_once './db_connection.php';
require_once '../vendor/autoload.php';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

$strEmail = $_POST['email'];
$strToken= $_POST['token'];

// destroy session token from DB
$getTokenSQL = "SELECT `token`  FROM `user` WHERE `username` LIKE '{$strEmail}'";

$index = [];

$result = $link->query($getTokenSQL);

while($row = $result->fetch_assoc())
{
$token_row = ['token'=> $row['token']] ;
array_push($index, $token_row);
}
$tokenSQL = $index[0]['token'];

if ($tokenSQL == $strToken) {
    return (True);
} else {
  // header('HTTP/1.1 401 Unauthorized');
}


mysqli_close($link);
