<?php

    header('Content-Type:text/html; charset=utf-8');

    $name= $_GET['name'];
    $email= $_GET['email'];

    //echo "<h2>$name $email 이 등록되었습니다.</h2>";

    //이 서버프로그램의 echo를 기존 04_noAjax.html과 같은 모양으로
    //출력하면 브라우저에서는 똑같이 보이겠죠.
    // echo ("
    //     <!DOCTYPE html>
    //     <html>
    //         <head>
    //             <meta charset='utf-8'>
    //             <title></title>
    //         </head>
    //         <body>
                
    //             <h3>회원가입 페이지</h3>
        
    //             <form action='./signup.php' method='GET'>
    //                 <input type='text' name='name' value='$name'>
    //                 <input type='text' name='email' value='$email'>
        
    //                 <input type='submit'>
    //             </form>
        
    //             <hr>
    //             <textarea id='ta' cols='50' rows='3'>$name $email 이 등록되었습니다.</textarea>
        
    //         </body>
    //     </html>        
    // ");
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        
        <h3>회원가입 페이지</h3>

        <form action="./signup.php" method="GET">
            <input type="text" name="name" value="<?php echo $name ?>">
            <input type="text" name="email" value="<?= $email?>">

            <input type="submit">
        </form>

        <hr>
        <textarea id="ta" cols="50" rows="3"></textarea>

    </body>
</html>

