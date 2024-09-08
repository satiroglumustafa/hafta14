import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [veri] = useFetch("https://jsonplaceholder.typicode.com/todos");

  const [yorumlar] = useFetch("https://jsonplaceholder.org/comments");

  return (
    <>
      {veri &&
        veri.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}

      { yorumlar &&
        yorumlar.map((item) => {
          return <p key={item.id}>{item.comment}</p>;
        })} 
    </>
  );
}

export default App;
