import { useRef, useState } from "react";
import useFetch from "../Hooks/useFetch.ts"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import { IDay } from "./DayList";

export default function CreateWord() {
    const days: IDay[] = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!isLoading
            && dayRef.current && engRef.current && korRef.current
        ) {
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;
            fetch(`http://localhost:3001/words/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert('생성이 완료되었습니다.');
                    history.push(`/day/${day}`)
                    setIsLoading(false);
                }
            });
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

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

            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}
            >
                {isLoading ? "Saving..." : "저장"}
            </button>
            {/* 버튼을 누르면 새로고침이 되는데 이는 form 태그로 감싸져있어서 그럼 */}
        </form>
    )
}