import { useState } from "react";

export default function FormCheckMulti() {
  //State 초기화
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });
  //체크박스 변경 시 입력 값 State에 반영
  const handleFormMulti = (e) => {
    const fa = form.animal;
    //체크 시 배열에 값 추가, 체크 해제 시 삭제
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }
    //편집된 배열을 State에 반영
    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  //[보내기]버튼 클릭 시 입력값 로그 출력
  const shpw = () => {
    console.log(`좋아하는 동물:${form.animal}`);
  };

  //개별 체크박스에 체크 여부 반영
  return (
    <form>
      <fieldset>
        <legend>좋아하는 동물:</legend>
        <label htmlFor="animal_dog">개</label>
        <input
          id="animal_dog"
          name="animal"
          type="checkbox"
          value="dog"
          checked={form.animal.includes("dog")}
          onChange={handleFormMulti}
        />
        <br />
      </fieldset>
      <button type="button" onClick={show}>
        보내기
      </button>
    </form>
  );
}
