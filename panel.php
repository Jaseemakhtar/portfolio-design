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
            <form action="<?= $_SERVER['PHP_SELF'] ?>">
                <table>
                    
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th colspan="2">Dataset</th>
                        </tr>
                        <tr>
                            <td>Jaseemakhtar</td>
                            <td>jaseem@gmail.com</td>
                            <td>Face</td>
                            <td> <input type="checkbox"> </td>
                        </tr>
                        <tr>
                            <td>Bruce</td>
                            <td>bruce@gmail.com</td>
                            <td>Gamma</td>
                            <td> <input type="checkbox"> </td>
                        </tr>
                        <tr>
                            <td colspan="4"><input class="btn-approve" type="submit" value="Approve"></td>
                        </tr>
                </table>
                
            </form>
        </main>
    </div>
</body>
</html>