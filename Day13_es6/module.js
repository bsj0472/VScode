function show(){
    document.write("show!!<br>");
}

//다른 js에서 사용하게 하려면 
export default show; //이 js문서의 대표 export (1개만 지정가능)

//함수를 만들때 부터 export 명시
export function add(a,b){
    return a+b;
}

//추출하기..export
//export default add;//에러.. default는 1개만 가능

//당연히 변수와 상수도 export
export let age=20;
export const name="sam";