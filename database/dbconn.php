<?php 
    $server = "localhost";
    $user = "root";
    $pwd = "";
    $db = "SampleDB";

    $conn = new mysqli($server, $user, $pwd, $db);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>