<?php

  $link = mysqli_connect("localhost", "root", "root", "database-manager");

  $sql = "SELECT * FROM user";

  $index = [];

  $result = $link->query($sql);

  while($row = $result->fetch_assoc()) {

  $user_row = ['user_number'=> $row['user_number'], 'username'=>$row['username'], 'all_permission' => $row['all_permission'], 'create_permission' => $row['create_permission'], 'delete_permission' => $row['delete_permission'], 'drop_permission' => $row['drop_permission'], 'execute_permission' => $row['execute_permission'], 'insert_permission' => $row['insert_permission'], 'select_permission' => $row['select_permission'], 'show_permission' => $row['show_permission'], 'update_permission' => $row['update_permission']] ;

  array_push($index, $user_row);
  }
  echo json_encode($index);

  $link->close();
  ?>
