<?php
    $user = "root";
    $pass = "jaseem";
    $server = "localhost";
    $db = "sir_portfolio";
    $conn = mysqli_connect($server, $user, $pass, $db);
    if(!$conn){
        die("Database error!");
    }
?>