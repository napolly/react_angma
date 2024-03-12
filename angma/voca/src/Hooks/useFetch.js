import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);


    useEffect(() => {
        //api 비동기 통신을 위해서 fetch를 이용
        fetch(url) //프라미스 반환?
          .then(res => {
            return res.json();
          })
          .then(data => {
            setData(data);
          });
      }, [url]);

      return data;
    }
    //useState 부분과 useEffect() 부분을 옮겨옴
    //바뀔 수 있는 부분은 주소밖에 없으므로 주소를 url로 받고 변경해줌
