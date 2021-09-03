<?php
// this will print a random token at http://localhost:9000/docroot/random_token_test.php
$bytes = random_bytes(20);
print_r(bin2hex($bytes));
?>
