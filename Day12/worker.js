//Worker 스레드가 실행할 코드

var n=0;

// while(true){
//     n++;
//     //document.getElementById('hh').innerHTML= n;
//     //UI변경 작업은 별도 Worker가 할 수 없음

//     //Worker를 사용하는 MainThread에게 출력하고 싶은 값(n)을 전달
//     postMessage(n);
// }
// while문이 너무 빨리 반복해서 n값을 화면에 그려낼 시간조차 없는
// 명령을 내리기에 코드 오류

function fff(){
    n++;
    postMessage(n);

    setTimeout(fff, 500);
}

fff();