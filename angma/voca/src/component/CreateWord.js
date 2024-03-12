import { useRef } from "react";
import useFetch from "../Hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");

    function onSubmit(e){
        e.preventDefault();

        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);

        fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day : dayRef.current.value,
        eng : engRef.current.value,
        kor : korRef.current.value,
        isDone : false,
      }),
    }).then(res => {
      if(res.ok){
        alert('생성이 완료되었습니다.');
      }
    });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
            {/* 버튼을 누르면 새로고침이 되는데 이는 form 태그로 감싸져있어서 그럼 */}
        </form>
    )
}