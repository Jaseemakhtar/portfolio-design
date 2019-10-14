<?php
    session_start();
    
    if(isset($_SESSION['loggedInUser'])){
        header('Location: panel.php');
    }
    $error = '';
    include('connection.php');

    if(isset($_POST['login'])){
        $name = '';
        $email = val_input($_POST['email']);
        $password = val_input($_POST['password']);

        $hash = password_hash($password, PASSWORD_DEFAULT);
        echo($hash);
        if(( isset($email) && trim($email) != '') &&  ( isset($password) && trim($password) != '' )){
            $sql = "SELECT name, email, password FROM user where email = '$email' ";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                
                while($row = mysqli_fetch_assoc($result)) {
                    if(password_verify($password, $row['password'])){
                        $name = $row['name'];
                        $_SESSION['loggedInUser'] = $name;
                        $_SESSION['loggedInEmail'] = $email;
                        mysqli_close($conn);
                        header('Location: panel.php');
                        exit;
                    }else{
                        $error = "Incorrect password.";
                    }
                }
            } else {
                $error = "You are not registered.";
            }
        }
    }

    function val_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style-admin.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800" rel="stylesheet">
        <title>Admin Panel</title>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h4>Admin Login</h4>
            </div>
            <div class="error"> <?= $error ?> </div>
            <div class="form">
                <form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
                    <input class="input-single" placeholder="Email" type="text" name="email">
                    <input class="input-single" placeholder="Password" type="password" name="password">
                    <input class="input-single button" type="submit" value="Submit!" name="login">
                </form>
            </div>
            <div>
                <a href="#">Forgot Password?</a>
                <a href="#">Register!</a>
            </div>
        </div>    
    </body>
</html>