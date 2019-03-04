import React, { useEffect, useReducer } from "react";
import Person from "./components/Person/index";

const reducer = (store, action) => {
  switch (action.type) {
    case "addPerson":
      return [...store, action.store];
    case "removePerson":
      return [...action.store];
    default:
      return store;
  }
};

function App() {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    addPerson();
  }, []);

  const addPerson = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => dispatch({ store: data.results, type: "addPerson" }));
  };

  const removePerson = i => {
    const tempstore = [...store];
    tempstore.forEach((task, id) => {
      if (task[0].login.uuid === i) tempstore.splice(id, 1);
      dispatch({ store: tempstore, type: "removePerson" });
    });
  };
  const users = store.map((task, key) => (
    <Person click={removePerson} key={key} store={task[0]} />
  ));
  return (
    <>
      <button onClick={addPerson}>Dodaj osobę</button>
      {users}
    </>
  );
}

export default App;
