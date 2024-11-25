export default function EventObj(){
    //클릭시 이벤트 객체를 로그에 출력
    const handleClick=e=>console.log(e);
    return(
        <button onClick={handleClick}>클릭</button>
    );
}