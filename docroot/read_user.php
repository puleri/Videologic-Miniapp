<?php

$link = mysqli_connect("localhost", "root", "root", "database-manager");

$username = $_POST["username"];

$sql = "SELECT `firstname`, `lastname` FROM `user` WHERE `username` LIKE '${username}'";

$index = [];

$result = $link->query($sql);

while($row = $result->fetch_assoc()) {

$user_row = ['strFirst'=> $row['firstname'], 'strLast'=>$row['lastname']] ;

array_push($index, $user_row);
}
echo json_encode($index);

$link->close();
?>
