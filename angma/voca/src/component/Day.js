//특정날짜를 클릭했을 때 단어들이 나오는 페이지
import { useParams } from "react-router-dom";
import Word from "./Word.tsx";
import useFetch from "../Hooks/useFetch";

export default function Day() {
  // dummy.words 사용
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

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
