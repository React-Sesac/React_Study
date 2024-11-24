import { useState } from "react";

//Todo 항목 id의 최대값(등록할 때마다 증가)

let maxId = 0;
export default function StateTodo() {
  //입력값(title), 할 일 목록(todo)을 State로 관리
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  //텍스트 상자에 입력한 내용을 State에 반영
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    //새 할 일 추가하기
    setTodo([
        ... todo,
        {
            id: ++maxId, //id값
            title, // Todo 본체
            created: new Date(), //생성 날짜 및 시각
            isDone: false // 실행완료?
        }
    ]);
  };

  return([
    <div>
        <label>
            해야할 일:
            <input type="text" name="title"
            value={title} onChange={handleChangeTitle}/>
        </label>
        <button type="button"
        onClick={handleClick}>추가하기</button>
        <hr />
        {/* 할 일을 목록으로 정리하기*/}
        <ul>
            {todo.map(item => (
                <li key = {item.id}>{item.title}</li>>
            ))
            }</ul>
    </div>
  ]);
}
