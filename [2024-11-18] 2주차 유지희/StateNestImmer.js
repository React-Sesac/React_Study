import { useImmer } from "use-immer";

export default function StateNestImmer() {
  //폼으로 취급하는 값을 State로 선언
  const [form, setForm] = useImmer({
    name: "홍길동",
    address: {
      do: "충청남도",
      city: "태안",
    },
  });

  //1단계 요소를 업데이트하는 핸들러
  const handleForm = (e) => {
    setForm((form) => {
      form[e.target.name] = e.target.value;
    });
  };

  //2단계 요소를 업데이트하는 핸들러
  const handleFormNest = (e) => {
    setForm((form) => {
      form.address[e.target.name] = e.target.value;
    });
  };
}
