<?php
include ("db_con.php");
$con = conect_db();
$password = $_POST['password'];
$hash_password = $password;
//$hash_password = password_hash($password, PASSWORD_DEFAULT);
mysqli_select_db($con, 'bookstore');
$stmt = $con->prepare("INSERT INTO user (name, username, email, password, mobile_num) VALUES (?,?,?,?,?)");
if ($stmt) {
    // Bind parameters
    $stmt->bind_param("sssss", $_POST['name'], $_POST['username'], $_POST['email'], $hash_password, $_POST['mobile_num']);
    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    // Close the statement
    $stmt->close();
} else {
    echo "Error preparing statement: " . $con->error;
}

// Close the connection
$con->close();

?>