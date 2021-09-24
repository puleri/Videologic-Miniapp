<?php
require_once './classes/user.php';

// $test = new User('test');
// $test->test();
// $link = mysqli_connect("localhost", "root", "root", "database-manager");

$strId = $_POST['user_number'];

$objUser = new User(29);

$objUser->delete_user();
//
//
//
//   $id = $_POST['user_number'];
//
//   // echo json_encode("The id is " . $id);
//
//   $sql = "DELETE FROM user WHERE user_number = $id";
//
//   if($link === false)
//   {
//       die("ERROR: Could not connect. " . mysqli_connect_error());
//   }
//   if(mysqli_query($link, $sql))
//   {
//       echo "Record deleted successfully.";
//   }
//   else
//   {
//       echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
//   }
//
//
//   echo json_encode("Record deleted successfully");
