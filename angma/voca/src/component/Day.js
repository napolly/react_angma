//특정날짜를 클릭했을 때 단어들이 나오는 페이지
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";

export default function Day() {
  // dummy.words 사용
  const { day } = useParams();
  // const wordList = dummy.words.filter(word => word.day === day); 숫자와 문자를 비교하니 안됨
  // const wordList = dummy.words.filter(word => word.day === Number(day));
  const [words, setWords] = useState([]);

  // useEffect(()=> {},[]); // useEffect를 만들고, 빈배열로 한번만 실행하라는 의미
  useEffect(() => {
    //api 비동기 통신을 위해서 fetch를 이용
    fetch(`http://localhost:3001/words?day=${day}`) //프라미스 반환?
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
