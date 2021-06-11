<?php
  $link = mysqli_connect("localhost", "root", "root", "database-manager");

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

  $sql = "UPDATE user SET all_permission = $bolAll, create_permission = $bolCreate, delete_permission = $bolDelete, drop_permission = $bolDrop, execute_permission = $bolExecute, insert_permission = $bolInsert, select_permission = $bolSelect, show_permission = $bolShow, update_permission = $bolUpdate WHERE user_number = $user_number";

  if($link === false){
      die("ERROR: Could not connect. " . mysqli_connect_error());
  }
  if(mysqli_query($link, $sql)){
      echo "Records updated successfully.";
  } else{
      echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
  }

  $response = ["bolAll" => $bolAll, "bolCreate" => $bolCreate, "bolDelete" => $bolDelete, "bolDrop" => $bolDrop, "bolExecute" => $bolExecute, "bolInsert" => $bolInsert, "bolSelect" => $bolSelect, "bolShow" => $bolShow, "bolUpdate" => $bolUpdate];

  echo json_encode($response);
