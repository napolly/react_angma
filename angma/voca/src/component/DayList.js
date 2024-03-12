import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function DayList() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        //api 비동기 통신을 위해서 fetch를 이용
        fetch('http://localhost:3001/days') //프라미스 반환?
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setDays(data);
        });
    }, []);
    //다른 함수에 영향을 미치는 것을 방지하기 위하여, useEffect의 두번째 매개변수에 배열을 전달해서.
    //이렇게 하면count가 변경됐을 때만 이 함수가 실행된다.
    //의존성 배열
    //의존성 배열의 값이 변경되는 경우에만 이 함수가 실행됨.

    return (
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
    );
}