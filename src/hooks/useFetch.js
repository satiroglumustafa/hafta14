import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json_data) => setData(json_data));
  }, [url]); // url değişirse diye buraya depencency url içine  [] url koyduk ve böylece defalarca çaışır. istek gider. 
  // eğer url değişmeyecekse yani apiden gelen url'nin değişmeyeceğine eminsek dependency array kullanmamıza gerek yok.

  return [data];
};

export default useFetch;