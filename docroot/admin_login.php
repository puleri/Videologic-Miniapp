<?php

require_once './db_connection.php';
require_once './admin_creds.php';

// require_once '../vendor/autoload.php';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

$strEmail = $_POST['email'];
$strPassword = $_POST['password'];

if (("mpuleri@vectorventures.com" == $email) && ("12345" == $password))
{
  // $respone = "Logging in";
  var_dump($strEmail);
}
else
{
  echo "error!";
}

// mysqli_close($link);

// $token = hash('sha256', uniqid());
// echo "hello, $token";
