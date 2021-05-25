<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



$strUsername = $_POST['strUsername'];
$bolAll = $_POST['bolAll'];
$bolCreate = $_POST['bolCreate'];
$bolDelete = $_POST['bolDelete'];
$bolDrop = $_POST['bolDrop'];
$bolExecute = $_POST['bolExecute'];
$bolInsert = $_POST['bolInsert'];
$bolSelect = $_POST['bolSelect'];
$bolShow = $_POST['bolShow'];
$bolUpdate = $_POST['bolUpdate'];

// require_once ("db_connection.php");

// echo json_encode($conn);


// Prepare an insert statement
$sql = "INSERT INTO user (user_number, username, all_permision, create_permission, delete_permission, drop_permission, execute_permission, insert_permission, select_permission, show_permission, update_permission) VALUES (NULL, '$bolAll', '$bolCreate', '$bolDelete', '$bolDrop', '$bolExecute', '$bolInsert', '$bolSelect', '$bolShow', '$bolUpdate')";

// echo "hello"

// $mysqli->query($sql);
// $mysqli->close();
// header("location: index.php");


$arrResponse = array("strUsername" => $strUsername, "bolAll" => $bolAll, "bolCreate" => $bolCreate, "bolDelete" => $bolDelete, "bolDrop" => $bolDrop, "bolExecute" => $bolExecute, "bolInsert" => $bolInsert, "bolSelect" => $bolSelect, "bolShow" => $bolShow, "bolUpdate" => $bolUpdate);
echo json_encode($arrResponse);
