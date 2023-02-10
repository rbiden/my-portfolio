<?php 
    include_once "./dbconn.php";

    if (isset($_GET['create'])) {
        $user = $_GET['user'];
        $pwd = $_GET['pwd'];

        $sql = "INSERT INTO tblUsers (UserEmail, UserPwd) VALUES ('$user', '$pwd');";
        $result = $conn -> query($sql);

        $conn->close();

        header("Location: /index.php");
    }

    if (isset($_GET['update'])) {
        $user = $_GET['user-update'];
        $pwd = $_GET['pwd-update'];

        $sql = "UPDATE tblUsers SET UserEmail = '$user', UserPwd = '$pwd' WHERE ";
        $result = $conn -> query($sql);

        $conn->close();

        header("Location: /index.php");
    }
?>