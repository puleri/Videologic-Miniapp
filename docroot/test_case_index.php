<?php

require_once './classes/test.php';

$objTests = new Test();
// var_dump ($objTests);

$objTests->index_tests();

  // $link = mysqli_connect("localhost", "root", "root", "database-manager");
  //
  // $sql = "SELECT * FROM test_cases";
  //
  // $index = [];
  //
  // $result = $link->query($sql);
  //
  // while($row = $result->fetch_assoc()) {
  //
  // $cases_row = ['id'=> $row['id'], 'description'=>$row['description'], 'test_date' => $row['test_date'], 'expected_results' => $row['expected_results'], 'actual_results' => $row['actual_results'], 'passing' => $row['passing'], 'additional_notes' => $row['additional_notes']];
  //
  // array_push($index, $cases_row);
  // }
  // echo json_encode($index);
  //
  // $link->close();
  ?>
