import React, { useReducer, useState } from "react";
import { personReducer } from "./reducer/person-reducer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleDelete = () => {
    const name = prompt(`Who do you want to remove?`);
    dispatch({ type: "removed", name });
  };

  const handleUpdate = () => {
    const prev = prompt(`Who's name do you want to change?`);
    const current = prompt(`Provide new name`);
    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`Provide name of your mentor`);
    const title = prompt(`Provide title of your mentor`);
    dispatch({ type: "added", name, title });
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentors are: </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Remove Mentor</button>
      <button onClick={handleUpdate}>Change Mentor's Name</button>
      <button onClick={handleAdd}>Add Mentor</button>
    </div>
  );
}

const initialPerson = {
  name: "Eggy",
  title: "Software Engineer",
  mentors: [
    {
      name: "Nuri",
      title: "Senior Software Engineer",
    },
    {
      name: "Nelly",
      title: "Master Chef",
    },
  ],
};
