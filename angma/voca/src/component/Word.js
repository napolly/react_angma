import { useState } from "react";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false); //초기값은 false : 그래야 단어를 외웠는지 안외웠는지

    function toggleShow() {
        setIsShow(!isShow);
    }

    return (
        <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{word.eng}</td>
              <td>{isShow && word.kor}</td> 
              {/*  isShow : True 일때만 뜻보여줌 */}
              <td>
                <button onClick={toggleShow}>뜻 보기</button>
                <button class="btn_del">삭제</button>
              </td>
            </tr>
    );
}