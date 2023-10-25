<?php

$cleardb_server   = "localhost";
$cleardb_username = "root";
$cleardb_password = "";
$cleardb_dbname   = "project";

$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    
    if ($password !== $cpassword) {
        echo '<script>alert("Passwords do not match."); window.history.back();</script>';
    }
    $sql = "INSERT INTO customers (username, email, password) VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo '<script>alert("Registration successful. You can now login."); window.location.href = "../login.html";</script>';
    } else {
        echo 'Error: ' . $sql . '<br>' . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo 'Invalid request';
}
?>
