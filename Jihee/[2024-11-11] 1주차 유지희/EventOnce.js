import { useState } from "react";

export default function EventOnce(){
    //클릭여부를 관리하기 위한 플래그
    const [clicked, setClicked]=useState(false);
    //오늘의 운세(점수)
    const [result ,setResult] = useState('-');
    const handleClick=e=>{
    //클릭하지 않은 경우에만 운세를 계산
    if(!clicked){
        setResult(Math.floor(Math.random()*100+1));
        //플래그 반견
        setClicked(true);
    }
    };
    return(
        <>
        <button onClick={handleClick}>결과보기</button>
        <p>오늘의 운세는 {result}점입니다.</p>
        </>
    );
}