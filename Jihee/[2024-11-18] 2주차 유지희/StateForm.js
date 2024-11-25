import { useState } from "react";

export default function StateForm() {
  //폼으로 취급하는 값을 State로 선언
  const [form, StateForm] = useState({
    name: "홍길동",
    age: 18,
  });
  //폼 요소의 변경사항을 State에 반영(
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //[보내기] 버튼으로 로그에 메시지 출력하기
  const show = () => {
    console.log(`안녕하세요, ${form.name} (${form.age}세) 님!`);
  };

  return (
    <form>
      {/*개별 폼 요소에 State 값 할당 */}
      <div>
        <label htmlFor="name">이름: </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          보내기
        </button>
      </div>
      <p>
        안녕하세요, {form.name} ({form.age}세) 님!
      </p>
    </form>
  );
}
