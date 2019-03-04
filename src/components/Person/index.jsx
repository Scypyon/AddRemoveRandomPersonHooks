import React from "react";
import "./index.css";

const Person = props => {
  const { name, email, picture, dob, login } = props.users;
  const { click } = props;
  return (
    <div className="person">
      <img src={picture.large} alt="RandomPicture" />
      <h1>
        {name.title} {name.last}
      </h1>
      <p>Email: {email}</p>
      <p>Age: {dob.age}</p>
      <button onClick={() => click(login.uuid)}>
        <b>Delete Person</b>
      </button>
    </div>
  );
};

export default Person;
