<?php

require_once('./db_connection.php');
require_once('./admin_creds.php');

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

if (($_POST['email'] === $email) && ($_POST['password'] === $password))
{
  // $respone = "Logging in";
  echo( "Logging in");
}
else
{
  echo "error!";
}

// mysqli_close($link);

// $token = hash('sha256', uniqid());
// echo "hello, $token";
