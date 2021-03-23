<?php

    $files= $_FILES['bbb'];

    //$files변수는 파일여러개의 정보를 가지고 있는 배열변수
    echo count($files) . "<br>"; //출력 : 5개 
    echo count($files['name']) . "<br>"; //출력 : 선택된 파일의 개수
    echo "<hr>";

    //선택된 파일의 개수
    $num= count($files['name']);

    //파일 개수만큼 반복
    for($i=0; $i<$num; $i++){
        $srcName= $files['name'][$i];
        $tmpName= $files['tmp_name'][$i];
        $size= $files['size'][$i];

        //임시저장소 파일을 원하는 곳으로 이동
        $dstName= "./".date('Ymdhis') . $srcName;
        move_uploaded_file($tmpName, $dstName);

        //잘되었는지 확인하기위해 echo(출력)
        echo "<h3>$srcName</h3>";
        echo "<img src='$dstName' width='200'>";
        echo "<hr>";
    }

?>

<h1>Nice to meet you. <?php echo $dstName ?> </h1>
