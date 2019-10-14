<?php 
    include('connection.php');
    $msg = '';
    
    if(isset($_POST['add'])){
        $response_array = array();

        $name = $_POST['name'];
        $email = $_POST['email'];

        $sql = "INSERT INTO request (id, uname, email, status ) VALUES (NULL, '$name', '$email', 0)";
        
        if(mysqli_query($conn, $sql)){
            $msg = "Thanks for requesting.";
            $response_array['status'] = 'success';  
        }else{
            $msg = "Request Submit Failed";
            $response_array['status'] = 'error';
        }
        
        $response_array['data'] = $msg;
        mysqli_close($conn);
        header('Content-type: application/json');
        echo json_encode($response_array);
    }
    
?>
