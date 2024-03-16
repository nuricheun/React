import React, { useState } from "react";

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "Eggy",
    title: "First Child",
    mentor: {
      name: "Nuri",
      title: "Life Teacher & Mommy",
    },
  });
  return (
    <div>
      <h1>{`${person.name} is ${person.title}`}</h1>
      <p>
        {`${person.name}'s mentor is`} {person.mentor.name} (
        {person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name } }));
        }}
      >
        Change the name of the mentor
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, title } }));
        }}
      >
        Change the title of the mentor
      </button>
    </div>
  );
}
