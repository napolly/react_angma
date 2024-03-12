import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function DayList() {
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onclick() {
        setCount(count + 1);
    }

    function onclick2() {
        setDays([
            ...days,
            {
                id: Math.random(),
                day: 1,
            }
        ])
    }

    useEffect(() => {
        console.log("Count change");
    });

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={onclick}>{count}</button>
            <button onClick={onclick2}>Day change</button>
            {/* onclick2 버튼 클릭시 log에 보면 count도 계속 증가하고 있는것을 볼 수 있다. 버튼의count는 그대로인데 */}
        </>
    );
}