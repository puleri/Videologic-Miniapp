<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "root", "database-manager");

$strDescript = $_POST['strDescript'];
$strDate = $_POST['strDate'];
$strExpected = $_POST['strExpected'];
$strActual = $_POST['strActual'];
$bolPass = $_POST['bolPass'];
$strAdditional = $_POST['strAdditional'];


if ($bolPass === "true") {
  $bolPass = 1;
} else {
  $bolPass = 0;
}

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Attempt insert query execution
$sql = "INSERT INTO test_cases (description, test_date, expected_results, actual_results, passing, additional_notes) VALUES ('$strDescript', '$strDate', '$strExpected' ,'$strActual', '$bolPass','$strAdditional')";

if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
