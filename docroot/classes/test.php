<?php

class Test {

  public $className = "Test";

   function __construct($strId) {
    $this->strId = $strId;
  }


  public function index_tests()
  {
    $link = mysqli_connect("localhost", "root", "root", "database-manager");
    $sql = "SELECT * FROM test_cases";
    $index = [];

    $result = $link->query($sql);

    while($row = $result->fetch_assoc()) {

      $cases_row = ['id'=> $row['id'], 'description'=>$row['description'], 'test_date' => $row['test_date'], 'expected_results' => $row['expected_results'], 'actual_results' => $row['actual_results'], 'passing' => $row['passing'], 'additional_notes' => $row['additional_notes']];

      array_push($index, $cases_row);
    }
    echo json_encode($index);
    $link->close();

  }


  public function delete_test()
    {
      $link = mysqli_connect("localhost", "root", "root", "database-manager");

          $sql = "DELETE FROM `test_cases` WHERE `id` = '$this->strId'";

          if($link === false)
          {
              die("ERROR: Could not connect. " . mysqli_connect_error());
          }
          if(mysqli_query($link, $sql))
          {
              echo "Record deleted successfully.";
          }
          else
          {
              echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
          }

    }





}
