<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "root", "database-manager");

$strToken = $_POST['strToken'];
$strOldPW = $_POST['strOldPW'];
$strNewPW = $_POST['strNewPW'];

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Check if old password matches credentials
if($strOldPW === $sqlOldPW) {
  
}

// Update password SQL
$sql = "UPDATE `user` SET `password` = '${strNewPW}' WHERE `token` LIKE '${strToken}'";

$user = [];

$result = $link->query($sql);

while($row = $result->fetch_assoc()) {

$user_row = ['strUsername'=> $row['username']] ;

array_push($user, $user_row);
}

echo json_encode($user);


$link->close();
?>
