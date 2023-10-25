<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$uname = $_POST['uname'];
$pass = $_POST['pass'];

if (!$conn) {
    die("Connection unsuccessfull: " . mysqli_connect_error());
}

$sql = "SELECT * FROM users WHERE username = ? AND password = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $uname, $pass);

mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);
$check = mysqli_fetch_array($result);

if (isset($check)) {
    echo '<h1>Connection is successful</h1>';
} else {
    echo '<h1>Connection failed.</h1><p>Wrong user credentials</p>';
}

mysqli_close($conn);

?>
