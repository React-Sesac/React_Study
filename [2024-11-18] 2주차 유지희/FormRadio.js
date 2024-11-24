import { useState } from "react";

export default function FormRadio() {
  //State 초기화
  const [form, setForm] = useState({
    os: "windows",
  });

  //라디오 버튼 변경 시 입력 값을 State에 반영
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //[보내기]버튼 클릭 시 입력값 로그 출력
  const show = () => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //[보내기]버튼 클릭시 입력값 로그 출력
  const show = () => {
    console.log(`사용OS:${form.os}`);
  };

  //State의 현재 값에 따라 checked 속성 값을 결정
  return (
    <form>
      <fieldset>
        <legend>사용OS:</legend>
        <label htmlFor="os_win">windows</label>
        <input
          id="os_win"
          name="os"
          type="radio"
          value="windows"
          checked={form.os === "mac"}
          onChange={handleForm}
        />
      </fieldset>
      <button type="button" onClick={show}>
        보내기
      </button>
    </form>
  );
}
