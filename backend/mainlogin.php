<?php

$cleardb_server   = "localhost";
$cleardb_username = "root";
$cleardb_password = "";
$cleardb_dbname   = "project";

$active_group = 'default';
$query_builder = TRUE;

$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_dbname);

$email = $_POST['email'];
$password = $_POST['password'];

	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM customers WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $sql);
$check = mysqli_fetch_array($result);

if ($check) {
    echo '<script>alert("Connection Successfull"); window.location.href = "../index.html";</script>';
    exit();
} else {
    echo '<script>alert("Invalid credentials"); window.location.href = "../login.html";</script>';
}
mysqli_close($conn);

?>
