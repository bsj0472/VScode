<?php

    header('Content-Type:text/html; charset=utf-8');

    $name= $_POST['name'];
    $msg= $_POST['msg'];
    
    echo "<h3>$name</h3>";
    echo "<p>$msg</p>"

?>