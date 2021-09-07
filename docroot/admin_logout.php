<?php
require_once './db_connection.php';
require_once '../vendor/autoload.php';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

$strEmail = $_POST['email'];

// destroy session token from DB
$destroyTokenSQL = "UPDATE `user` SET `token` = NULL WHERE `user`.`username` = '${strEmail}'";
mysqli_query($link, $destroyTokenSQL);

mysqli_close($link);
