<?php
require_once './classes/test.php';

$strId = $_POST['strId'];

$objTest = new Test($strId);

$objTest->delete_test();
