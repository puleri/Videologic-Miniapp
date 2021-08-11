<?php

require_once './db_connection.php';
require_once './admin_creds.php';

require_once '../vendor/autoload.php';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

$strEmail = $_POST['email'];
$strPassword = $_POST['password'];
//  First check if user exists
$sql = "SELECT COUNT(1) FROM `user` WHERE username = 'test@test.com'";

$index = [];

$result = $link->query($sql);

while($row = $result->fetch_assoc())
{
$user_row = ['COUNT(1)'=> $row['COUNT(1)']] ;
array_push($index, $user_row);
}
// Pulls the nested 1:0 telling if user exists
foreach ($index as $v) {
  foreach ($v as $j)  {
    if ($j === "1") {
      $sql_password = "SELECT password FROM `user` WHERE username = 'test@test.com'";
      $passValidation = mysqli_query($link,"SELECT password FROM `user` WHERE username = 'test@test.com'");
      while($passRow = mysqli_fetch_assoc($passValidation))
      {
      $check[] = $passRow;
      // prints password
      echo json_encode($check);
      }
      echo json_encode($j);
    }
  }
}
// echo json_encode($index);

mysqli_close($link);

// $token = hash('sha256', uniqid());
// echo "hello, $token";
