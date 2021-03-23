<?php

    header('Content-Type:text/html; charset=utf-8');

    $name= $_GET['name'];
    $msg= $_GET['msg'];

    echo "<h2>$name $msg 잘 받았어요</h2>";

?>