<?php
    require('connect.php');

    function getUser($conn) {

       $getUser = 'SELECT * FROM users';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
           // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
       }

       echo json_encode($result);
       return json_encode($result);
    }

    function addUser($conn, $newuser) {
       $username = $newuser["username"];
       $password = $newuser["password"];
       $name = $newuser["name"];
       $email = $newuser["email"];
       $pin = $newuser["pin"];

    try {
        $addUser = "INSERT INTO users (uname, pword, nickname, email, pin)
        VALUES ('$username', '$password', '$name', '$email', '$pin')";
 
        $conn->exec($addUser);
        return "New record created successfully";
    } catch(PDOException $e) {
        echo $addUser . "<br>" . $e->getMessage();
    }
    }