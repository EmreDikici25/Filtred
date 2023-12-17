import React, { useEffect, useRef, useState } from "react";

const Filter = () => {
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUser] = useState(null);
  const searchRef = useRef("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltredUser(data);
      });
  }, []);

  const handleFilter = () => {
    let inputState = searchRef.current.value.toLowerCase();

    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(inputState)
    );

    setFiltredUser(filtred);
  };

  if (filtredUsers === null) return "Yükleniyor...";
  return (
    <div className="filter-area">
      <h1>Kullanıcılar</h1>
      <input ref={searchRef} type="text" onChange={handleFilter} />
      <ul>
        {filtredUsers.map((user) => (
          <li>
            Name : {user.name} | Tel : {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
