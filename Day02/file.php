<?php

    //파일은 데이터의 양이 너무 커서 변수로 받아올 수 없음.
    //그래서 파일의 실제 데이터들을 임시저장소(/tmp)에 별도로 저장되고
    //이 php의 $_FILES 라는 배열에는 파일의 이름,사이즈 등의 정보를 받게 됨.
    $file= $_FILES['aaa'];

    //$file변수는 파일이 아니라 파일의 정보를 가지고 있는 배열변수임.
    //그 정보는 총 5개가 존재함(원본이름/ 파일사이즈/파일형식/임시저장소의 경로/에러정보)
    //언제나 $file변수는 길이 5인 배열변수임

    //파일의 정보들을 얻어오기
    $srcName= $file['name'];      //원본이름
    $size= $file['size'];         //파일 크기 byte값
    $type= $file['type'];         //파일 형식 MIME타입
    $tmpName= $file['tmp_name'];  //임지저장소의 파일 경로
    $errorInfo= $file['error'];   //에러가 있을 때만 값이 존재함

    //잘 받았는지 확인
    echo "$srcName <br>";
    echo "$size <br>";
    echo "$type <br>";
    echo "$tmpName <br>";
    echo "$errorInfo <br>";

    //실제파일은 임시저장소에 있기에 서버에 보관이 안됨.
    //영구적으로 저장하기 위해 임시저장소의 파일을 다른 곳으로 이동
    //이동시킬곳의 파일경로 만들기
    $dstName="./" . date('Ymdhis') . $srcName;

    //파일을 이동시켜주는 기능 함수 실행 (php에 기본 제공 함수)
    move_uploaded_file($tmpName, $dstName);




?>