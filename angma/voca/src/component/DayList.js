import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function DayList() {
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onclick(){
        setCount(count +1);
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
    </>
    );
}