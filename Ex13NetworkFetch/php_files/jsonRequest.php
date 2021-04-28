<?php

    header('Content-Type:text/plain; charset=utf-8');

    //슈퍼전역변수 $_POST는 json문자열을 파싱하여 받지 못함
    // 클라이언트가 보낸 json은 별도의 공간에 임시적으로 파일로 저장됨.
    //이를 읽어오는 코드 작성
    $jsonData= file_get_contents('php://input');
    
    //제대로 왔는지 확인을 위해 곧바로 echo
    //echo $jsonData;

    //대분은 곧바로 echo하지 않고 json문자열을 해독해서
    //각각의 값들을 DB에 저장하는 작업을 함.
    //연습으로 각각의 값들만 분리해보기

    //json --> object
    $obj= json_decode($jsonData);
    echo "이름 : " . $obj->name . "\n";
    echo "나이 : " . $obj->age . "\n";
    echo "메세지 : " . $obj->msg . "\n";

    //실무에서는 echo결과가 json문자열일 것임
    // object or 연관배열-> json
    // $json= json_encode($obj);
    // echo $json;



?>