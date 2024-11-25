export default function EventArgs(){
    //자체 인수를 추가한 이벤트 핸들러
    const current = (e, type)=>{
        const d = new Date();
        switch(type){
            case 'date':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
        }
    };
    return (
    <div>
        {/* 화살표 함수를 통해 핸들러를 호출 */}
        <button id="dt" onClick={e=>current(e,'datetime')}>현재날짜 및 시각</button>
        <button id="date" onClick={e=>current(e,'date')}>현재날짜</button>
        <button id="time" onClick={e=>current(e,'time')}>현재 시각</button>
    </div>
    );
}