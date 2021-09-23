<?php

// $link = mysqli_connect("localhost", "root", "root", "database-manager");

class User {
  public $strId;
  public $test = "test";

  function __construct($strId)
  {
    $this->strId = $strId;
  }

  public function test() {
    print_r($this->strId);

  }


  public static function delete_user()
  {
    echo "hello <br />";
    $link = mysqli_connect("localhost", "root", "root", "database-manager");
    echo "after link <br />";
    print_r($this->strId);
    echo "<br/> after class variable reference";
    // echo "DELETE FROM `user` WHERE `user_number` = $this['strId']";

    // if($link === false)
    // {
    //     die("ERROR: Could not connect. " . mysqli_connect_error());
    // }
    // if(mysqli_query($link, $sql))
    // {
    //     echo "Record deleted successfully.";
    // }
    // else
    // {
    //     echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    // }


    // echo json_encode("Record deleted successfully");
  }

}

$objUser = new User('29');
// var_dump($objUser);
$objUser::delete_user();



  // $id = $_POST['user_number'];
  //
  // // echo json_encode("The id is " . $id);
  //
  // $sql = "DELETE FROM user WHERE user_number = $id";
  //
  // if($link === false)
  // {
  //     die("ERROR: Could not connect. " . mysqli_connect_error());
  // }
  // if(mysqli_query($link, $sql))
  // {
  //     echo "Record deleted successfully.";
  // }
  // else
  // {
  //     echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
  // }
  //
  //
  // echo json_encode("Record deleted successfully");
