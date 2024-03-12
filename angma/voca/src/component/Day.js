//특정날짜를 클릭했을 때 단어들이 나오는 페이지
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
    // dummy.words 사용
  const { day } = useParams();
  // const wordList = dummy.words.filter(word => word.day === day); 숫자와 문자를 비교하니 안됨
  const wordList = dummy.words.filter(word => word.day === Number(day));
  console.log(wordList);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
