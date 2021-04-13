<?php
   require('functions.php');

    
   if (isset($_GET['user'])) {
       $user = getUser($pdo);
   }

   if(isset($_GET['create'])) {
    //Note: This resolves as true even if all $_POST values are empty strings
    $username =htmlspecialchars($_GET["uname"]);
    $password =htmlspecialchars($_GET["pword"]);
    $name =htmlspecialchars($_GET["nickname"]);
    $email =htmlspecialchars($_GET["email"]);
    $pin =htmlspecialchars($_GET["pin"]);

    $newuser = array("username" => $username, "password" => $password, "name" => $name, "email" => $email, "pin" => $pin);
   // echo json_encode($newuser);
    $complete = addUser($pdo, $newuser);
}

 //echo $user;