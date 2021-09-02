<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "root", "database-manager");

$strUsername = $_POST['strUsername'];
$strFirst = $_POST['strFirst'];
$strLast = $_POST['strLast'];
$bolAll = $_POST['bolAll'];
$bolCreate = $_POST['bolCreate'];
$bolDelete = $_POST['bolDelete'];
$bolDrop = $_POST['bolDrop'];
$bolExecute = $_POST['bolExecute'];
$bolInsert = $_POST['bolInsert'];
$bolSelect = $_POST['bolSelect'];
$bolShow = $_POST['bolShow'];
$bolUpdate = $_POST['bolUpdate'];

if ($bolAll === "true") {
  $bolAll = 1;
} else {
  $bolAll = 0;
}

if ($bolCreate === "true") {
  $bolCreate = 1;
} else {
  $bolCreate = 0;
}

if ($bolDelete === "true") {
  $bolDelete = 1;
} else {
  $bolDelete = 0;
}

if ($bolDrop === "true") {
  $bolDrop = 1;
} else {
  $bolDrop = 0;
}

if ($bolExecute === "true") {
  $bolExecute = 1;
} else {
  $bolExecute = 0;
}

if ($bolInsert === "true") {
  $bolInsert = 1;
} else {
  $bolInsert = 0;
}

if ($bolSelect === "true") {
  $bolSelect = 1;
} else {
  $bolSelect = 0;
}

if ($bolShow === "true") {
  $bolShow = 1;
} else {
  $bolShow = 0;
}

if ($bolUpdate === "true") {
  $bolUpdate = 1;
} else {
  $bolUpdate = 0;
}

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Attempt insert query execution
$sql = "INSERT INTO user (username, firstname, lastname, all_permission, create_permission, delete_permission, drop_permission, execute_permission, insert_permission, select_permission, show_permission, update_permission) VALUES ('$strUsername', '$strFirst', '$strLast' ,'$bolAll', '$bolCreate','$bolDelete','$bolDrop','$bolExecute','$bolInsert','$bolSelect','$bolShow','$bolUpdate')";

if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
