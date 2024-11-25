import { userState, useState } from "react";

export default function StateBasic({ init }) {
  //Props(init)로 State(count)초기화하기
  const [count, setCount] = useState(init);
  //[카운트]버튼 클릭 시 카운트 값을 증가시킨다.
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>카운트</button>
      <p>{count}번 클릭했습니다.</p>
    </>
  );
}
