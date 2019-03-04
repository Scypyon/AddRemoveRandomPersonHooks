import React, { useEffect, useReducer } from "react";
import Person from "./components/Person/index";

const reducer = (users, action) => {
  switch (action.type) {
    case "addPerson":
      return [...users, ...action.users];
    case "removePerson":
      return [...action.users];
    default:
      return users;
  }
};

function App() {
  const [users, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    addPerson();
  }, []);

  const addPerson = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => dispatch({ users: data.results, type: "addPerson" }));
  };

  const removePerson = id => {
    const filteredUsers = users.filter(user => user.login.uuid !== id);
    dispatch({ users: filteredUsers, type: "removePerson" });
  };

  const user = users.map((task, key) => (
    <Person click={removePerson} key={key} users={task} />
  ));
  return (
    <>
      <button onClick={addPerson}>Dodaj osobę</button>
      {user}
    </>
  );
}

export default App;
