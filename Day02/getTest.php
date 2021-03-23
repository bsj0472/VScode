<?php

//사용자측에서 보내온 데이터가 있는 슈퍼전역변수
$title=$_GET['title'];
$message= $_GET['msg'];

echo "<h2>$title</h2>";
echo "<P>$message</p>";


?>