<?php

$link = mysqli_connect("localhost", "root", "root", "database-manager");

  if(isset($_GET["user_number"])) {

    $id = $_GET["user_number"];

    $sql = "SELECT * FROM user WHERE user_number = $id";

    
  };
