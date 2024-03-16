import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleUpdate}
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleUpdate}
      />
      <button>Submit</button>
    </form>
  );
}
