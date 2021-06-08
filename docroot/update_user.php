<?php
  $link = mysqli_connect("localhost", "root", "root", "database-manager");

  // $sql = "UPDATE user SET all_permission = ";
  // set variables equal to SQL query items, at the end, make a statement with all of those variables and reset the variables with changed data from the post request.

  $user_number = $_POST['user_number'];
  $bolAll = $_POST['bolAll'];
  $bolCreate = $_POST['bolCreate'];
  $bolDelete = $_POST['bolDelete'];
  $bolDrop = $_POST['bolDrop'];
  $bolExecute = $_POST['bolExecute'];
  $bolInsert = $_POST['bolInsert'];
  $bolSelect = $_POST['bolSelect'];
  $bolShow = $_POST['bolShow'];
  $bolUpdate = $_POST['bolUpdate'];

  $sqlcheck = "UPDATE user SET  WHERE user_number = $user_number";



  if (isset($bolAll)) {
    echo $bolAll;
  };
  if (isset($bolCreate)) {
    echo $bolCreate;
  };
  if (isset($bolDelete)) {
    echo $bolDelete;
  };
  if (isset($bolDrop)) {
    echo $bolDrop;
  };
  if (isset($bolExecute)) {
    echo $bolExecute;
  };
  if (isset($bolInsert)) {
    echo $bolInsert;
  };
  if (isset($bolSelect)) {
    echo $bolSelect;
  };
  if (isset($bolShow)) {
    echo $bolShow;
  };
  if (isset($bolUpdate)) {
    echo $bolUpdate;
  };

$response = ["bolAll" => $bolAll, "bolCreate" => $bolCreate, "bolDelete" => $bolDelete, "bolDrop" => $bolDrop, "bolExecute" => $bolExecute, "bolInsert" => $bolInsert, "bolSelect" => $bolSelect, "bolShow" => $bolShow, "bolUpdate" => $bolUpdate];

// echo json_encode($response);
