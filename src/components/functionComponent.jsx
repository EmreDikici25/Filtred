import React, { useEffect, useState } from "react";

const Paper = () => {
  const [todoId, setTodoId] = useState(0);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));

    console.log("veri çekildi");
  }, [todoId]);
  return (
    <div>
      <p>{todoId}</p>
      <br />
      <p>{JSON.stringify(todo)}</p>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
        }}
      >
        Arttır
      </button>
    </div>
  );
};

export default Paper;

// useEffect yazım şekli
// 1. useEffect(() => {}) : component her render olduğunda çalışır
// 2. useEffect(() => {},[]) : component ilk oluştuğunda çalışır
// 3. useEffect(() => {},[state]) : component(state) her değiştiğinde çalışır
// 4. useEffect(() => {return () => {}},[]) : componentekrandan gittiğinde çalışır
/*

KULLANIMLAR : 
// her render olduğunda çalışır
  useEffect(() => {
    console.log("Component render oldu");
  });

  // component ilk oluştuğunda çalışır
  useEffect(() => {
    console.log("Component did mount çalıştı");
  }, []);

  // componentin içinde state her değiştiğinde çalışır
  useEffect(() => {
    console.log("Component did update çalıştı");
  }, [count]);

  // component ekrandan gittiğinde çalışır
  useEffect(() => {
    console.log("Component oluştu");
    return () => {
      console.log("component will unmount gitti");
    };
  }, []);

*/
