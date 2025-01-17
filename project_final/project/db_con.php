<?php
function conect_db()
{
    $host = 'localhost';
    $db = 'bookstore';
    $user = 'root';
    $pass = '';
    $con = mysqli_connect("localhost","root","");
    if (!$con)
    {
        die('Could not connect: ' . mysqli_error($con)."\n");
    }
    echo "Successfully connected to database\n";
    return $con;
}
function creat_db($con){

    $db_name = 'bookstore';
    if (mysqli_query($con, "CREATE DATABASE IF NOT EXISTS $db_name"))
    {
        echo "Database created\n";
    }
    else
    {
        echo "Error creating database: " . mysqli_error($con)."\n";
    }
    return $db_name;
}

function create_usertable($con, $db_name){
    $sql = "CREATE TABLE IF NOT EXISTS User(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        name VARCHAR(30) NOT NULL,
        mobile_num VARCHAR(30) NOT NULL,
        username VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL
         )";
    mysqli_select_db($con, $db_name);
    if (mysqli_query($con,$sql)){
        echo "User_Table created successfully\n";
    }
    else{
        echo "Error creating user table: " . mysqli_error($con)."\n";
    }

}
function creat_booktable($con, $db_name){
    $sql = "CREATE TABLE IF NOT EXISTS Book(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    author VARCHAR(30) NOT NULL,
    price int(11) NOT NULL)";
    mysqli_select_db($con, $db_name);
    if (mysqli_query($con,$sql)){
        echo "User_Table created successfully\n";
    }
    else{
        echo "Error creating book table: " . mysqli_error($con);
    }
    
}
$con = conect_db();
$db_name = creat_db($con);
create_usertable($con, $db_name);
creat_booktable($con, $db_name);
//$con = conect_db();
//$name = 'name';
//$email = 'email';
//$password = 'password';
//$mobile = 'mobile';
//$username = 'phone';
////$stmt = $con->prepare("INSERT INTO users (name, username, email, password, mobile_num) VALUES (?,?,?,?,?)");
////$stmt->bind_param("sssss", $name, $username, $email, $password, $mobile);
//    mysqli_select_db($con, 'bookstore');
//    mysqli_query($con,"INSERT INTO user (name,username,email,password) VALUES ($name,$username,$email,$password,$mobile)");
////    echo $con[0];
//$stmt = $con->prepare("INSERT INTO User (name, username, email, password, mobile_num) VALUES (?, ?, ?, ?, ?)");
//if ($stmt) {
//    // Bind parameters
//    $stmt->bind_param("sssss", $name, $username, $email, $password, $mobile);
//    // Execute the statement
//    if ($stmt->execute()) {
//        echo "New record created successfully";
//    } else {
//        echo "Error: " . $stmt->error;
//    }
//    // Close the statement
//    $stmt->close();
//} else {
//    echo "Error preparing statement: " . $con->error;
//}
//
//// Close the connection
//$con->close();



?>