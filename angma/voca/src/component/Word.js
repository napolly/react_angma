import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false); //초기값은 false : 그래야 단어를 외웠는지 안외웠는지
  const [isDone, setIsDone] = useState(word.isDone);


  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if(res.ok){
        setIsDone(!isDone);
      }
    });
  }

  function del(){
    if(window.confirm("삭제 하시겠습니까?")){
      fetch(`http://localhost:3001/words/${word.id}`,{
        method: 'DELETE'
      }).then(res => {
        if(res.ok){
          setWord({id:0});
        }
      });
    }
  }

  if(word.id == 0){
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone}
          onChange={toggleDone}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      {/*  isShow : True 일때만 뜻보여줌 */}
      <td>
        <button onClick={toggleShow}>
          뜻 {isShow ? '숨기기' : '보기'}
        </button>
        <button onClick={del} className="btn_del">삭제</button>
       {/* 삭제를 클릭하면 데이터는 삭제되나 화면은 그대로 유지된다. 삭제 후 다시 그려주지 않았기 때문이다. */}
      </td>
    </tr>
  );
}