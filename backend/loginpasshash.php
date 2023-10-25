<?php

$cleardb_server   = "localhost";
$cleardb_username = "root";
$cleardb_password = "";
$cleardb_dbname   = "project";

$active_group = 'default';
$query_builder = TRUE;

$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_dbname);

$uname = $_POST['uname'];
$pass = $_POST['pass'];

	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$hashpass = hash('sha512',$pass);

$sql = "SELECT * FROM users WHERE username = '$uname' AND password = '$hashpass'";
$result = mysqli_query($conn, $sql);
$check = mysqli_fetch_array($result);

if(isset($check)){
	echo '<h1>Connection is successful</h1>';
}
else {
	echo '<h1>Connection failed.</h1><p>Wrong user credentials</p>';
}

mysqli_close($conn);

?>
