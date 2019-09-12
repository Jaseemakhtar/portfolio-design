<?php 
    session_start();
        
    if(!isset($_SESSION['loggedInUser'])){
        header('Location: admin.php');
    }
    
    include('connection.php');
    
    $msg = '';
    $dmsg = '';

    if(isset($_POST['accept'])){

        if(isset($_POST['ids'])){
            $ids = $_POST['ids'];
            
            foreach ($ids as $id){ 
                $countS = 0;
                $countF = 0;
                $sqlE = "SELECT email FROM request WHERE id = $id";
                $resE = mysqli_query($conn, $sqlE);
                $email = '';
                if (mysqli_num_rows($resE) > 0) {
                    while($row = mysqli_fetch_assoc($resE)) {
                        $email = $row['email'];
                        $subject = "Response to your request for dataset.";
                        $message = "Thank you for showing interest in our dataset,\n to get what you requested for just follow the below link.\n https://bit.ly/2m5ODv4";
                        $headers= "From: jaseemamaljeri@gmail.com";
                        
                        if(mail($email, $subject, $message)){
                            $countS = $countS + 1;
                        }else{
                            $countF = $countF + 1;
                        }

                        $dmsg = "Mail sent to $countS records, failed $countF ";
                        $sqlU = "UPDATE request SET status=1 WHERE id = $id";

                        if (mysqli_query($conn, $sqlU)) {
                            
                        } 
                    }
                }
            }
        }
    }

    $sql = "SELECT * FROM request WHERE status = 0";
    $result = mysqli_query($conn, $sql);
    $requests = array();
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $requests[] = $row;
        }
    }else{
        $msg =  "No records found.";
    }
    
    mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Panel</title>
    <link href="panel.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800" rel="stylesheet">
    
</head>
<body>
    <div class="container">
        <main>
            <h2>Requests</h2>
            <form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
                <table>
                        <tr>
                            <th>Name</th>
                            <th colspan="2">Email</th>
                        </tr>
                        <?php 
                            for($i = 0; $i < count($requests); $i++){ 
                                echo '<tr>';
                                echo "<td>" . $requests[$i]['uname'] . " </td>" ;
                                echo "<td>" . $requests[$i]['email'] . " </td>" ;
                                echo '<td> <input type="checkbox" name="ids[]" value="' . $requests[$i]['id'] . '"> </td>' ;
                                echo '</tr>';
                            } 
                        ?>
                        
                        <tr>
                            <td colspan="4"><input class="btn-approve" type="submit" value="Approve" name="accept"></td>
                        </tr>
                </table>
                
            </form>
            <p><?= $dmsg ?></p>
        </main>
    </div>
</body>
</html>