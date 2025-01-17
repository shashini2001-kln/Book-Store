<?php

$pw2 = "kasun";
 if (password_verify($pw2, "$2y$10$2FjwhRmp7Qu0sL8sKvrK/ej"))
 {
     echo "ok";
 }
?>