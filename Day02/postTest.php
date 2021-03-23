<?php

header('Content-Type:text/html; charset=utf-8');

$name= $_POST['name'];
$password= $_POST['pw'];
$gender= $_POST['gender'];
$message= $_POST['msg'];
$car= $_POST['car'];

//textatra에 입력된 메세지 문자열의 줄바꿈문자가 \n 임.
//$message str_replace("\n", "<br>", $message); //글씨 바꿔치기
// \n을 <br>로 자동변경해주는 함수가 php에 기본으로 제공됨..
$message=nl2br($message);

echo "$name <br>";
echo "$password <br>";
echo "$gender <br>";
echo "$message <br>";
echo "$car <br>";

//멀티초이스에 의해 전달된 과일들은 배열로 전달되어 옴.
$fruits = $_POST['fruits'];
//전달받은 값들을 가진 $fruits는 배열변수임
$num= count($fruits); //배열의 길이를 구해주는 php의 기본제공 함수

for($i=0; $i<$num; $i++){
    echo $fruits[$i].",";

}

?>