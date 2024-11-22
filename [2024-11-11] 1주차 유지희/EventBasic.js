export default function EventBasic({ type }) {
  //click 이벤트 핸들러
  const current = () => {
    const d = new Date();
    //type 속성 값에 따라 현재 날짜 및 시각을 로그에 출력
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
    case 'time':
        console.log(d.toLocaleTimeString());
        break;
        default;
    default:
        console.log(d.toLocaleDateString());
        break;
    }
  };

  return(
    <div>
        {/* 버튼 클릭 시 current 함수 호출 */}
        <button onClick={current}>현재 시각 가져오기</button>
    </div>
  );
}
