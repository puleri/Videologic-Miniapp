<?php



class User {
  public $test = "test";

  function __construct($strId, $strEmail, $strPassword)
  {
    $this->strId = $strId;
    $this->strEmail = $strEmail;
    $this->strPassword = $strPassword;

  }

  public function test() {
    print_r($this->strId);

  }

  public function login_user() {
    require_once './db_connection.php';
    require_once './admin_creds.php';
    //
    require_once '../vendor/autoload.php';
    $link = mysqli_connect($db_host, $db_user, $db_password, $db_db);

    // $strEmail = $_POST['email'];
    // $strPassword = $_POST['password'];
    //  First check if user exists
    $sql = "SELECT COUNT(1) FROM `user` WHERE username = '$this->strEmail'";

    $index = [];

    $result = $link->query($sql);

    while($row = $result->fetch_assoc())
    {
      $user_row = ['COUNT(1)'=> $row['COUNT(1)']] ;
      array_push($index, $user_row);
    }
    // Pulls the nested 1:0 telling if user exists
    foreach ($index as $v) {
      foreach ($v as $j)  {
        if ($j === "1") {
          // $sql_password = "SELECT password FROM `user` WHERE username = '${strEmail}'";
          $passValidation = mysqli_query($link,"SELECT password FROM `user` WHERE username = '$this->strEmail'");
          while($passRow = mysqli_fetch_assoc($passValidation))
          {
            $check[] = $passRow;
            // prints password
            $strValidPassword = $check[0]['password'];
            // cleaning the data
            substr_replace($strValidPassword ,"", -1);
            // echo json_encode($strValidPassword);
            if ($strValidPassword == $this->strPassword)
            {
              $bytes = random_bytes(20);
              $strBytes = strval(bin2hex($bytes));
              // set the login token SQL
              $tokenSQL = "UPDATE `user` SET `token` = '${strBytes}' WHERE `user`.`username` = '${strEmail}'";
              mysqli_query($link, $tokenSQL);
              echo json_encode("Logging in..." . $strBytes);
            }
          }
          // Returning 1 or 0 if user exists
          // echo json_encode($j);
        }
      }
    }
    // echo json_encode($index);

    mysqli_close($link);

  }


  public function delete_user()
  {
    $link = mysqli_connect("localhost", "root", "root", "database-manager");
    // echo "after link <br />";
    // print_r($this->strId);
    // echo "<br/> after class variable reference";
    $sql = "DELETE FROM `user` WHERE `user_number` = $this->strId";

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


    echo json_encode("Record deleted successfully");
  }

}

// $objUser = new User('29');
// var_dump($objUser);
// $objUser->delete_user();



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
