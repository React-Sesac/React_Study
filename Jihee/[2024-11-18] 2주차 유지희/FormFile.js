import { useRef } from "react";

export default function FormFile() {
  //파일 입력창에 대한 참조
  const file = useRef(null);

  //[보내기] 버튼 클릭 후 파일 정보 로그 출력
  function show() {
    const fs = file.current.files;
    //획득한 파일군을 순서대로 스캔
    for (const f of fs) {
      console.log(`파일명:${f.name}`);
      console.log(`종류: ${f.type}`);
      console.log(`크기:${Math.trunc(f.size / 1024)}KB`);
    }
  }

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        보내기
      </button>
    </form>
  );
}
