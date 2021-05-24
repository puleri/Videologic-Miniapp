<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "db_connection.php";

// Here we want to follow similar pattern to demo.php 
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

$arrResponse = array("strUsername" => $strUsername, "bolAll" => $bolAll, "bolCreate" => $bolCreate, "bolDelete" => $bolDelete, "bolDrop" => $bolDrop, "bolExecute" => $bolExecute, "bolInsert" => $bolInsert, "bolSelect" => $bolSelect, "bolShow" => $bolShow, "bolUpdate" => $bolUpdate);
echo json_encode($arrResponse);
