//특정날짜를 클릭했을 때 단어들이 나오는 페이지
import dummy from "../db/data.json";
// import { useParams } from "react-router-dom";

export default function Day() {
    // dummy.words 사용
//   const { day } = useParams();
const day=1;
  const wordList = dummy.words.filter(word => word.day === day);
  console.log(wordList);

  return (
    <>
      {/* <h2>Day {day}</h2> */}
      <table>
        <tbody>
          {wordList.map(word => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
