<?php
// Include your database connection script
include("db_con.php");

function getuserlogin($username, $providedPassword)
{
    $dbname = 'bookstore';
    $con = conect_db();
    mysqli_select_db($con, $dbname);
    $stmt = $con->prepare("SELECT password FROM user WHERE username = ?");
    if ($stmt === false) {
        die("Error preparing statement: " . $con->error);
    }
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($password);
    $stmt->fetch();
    $stmt->close();

// Verify the provided password against the hashed password
    if ($providedPassword == $password) {
        echo "<p>Login successful!!!..You will be redirected in a few seconds..Login successful!</p>";
        header("location:success.html");

//    exit();
        // Here you can start a session or redirect the user as needed
    } else {
        echo "Invalid username or password.";
    }

// Close the database connection
    $con->close();
}
function getadminlogin($username, $providedPassword)
{
    $dbname = 'bookstore';
    $con = conect_db();
    mysqli_select_db($con, $dbname);
    $stmt = $con->prepare("SELECT password FROM admin WHERE username = ?");
    if ($stmt === false) {
        die("Error preparing statement: " . $con->error);
    }
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($password);
    $stmt->fetch();
    $stmt->close();

// Verify the provided password against the hashed password
    if ($providedPassword == $password) {
        echo "<p>Login successful!!!..You will be redirected in a few seconds..Login successful!</p>";
        header("location:success.html");

//    exit();
        // Here you can start a session or redirect the user as needed
    } else {
        echo "Invalid username or password.";
    }

// Close the database connection
    $con->close();
}
if ($_POST['role']=='user'){
    getuserlogin($_POST['username'], $_POST['password']);
}
else{
    getadminlogin($_POST['username'], $_POST['password']);
}

?>
