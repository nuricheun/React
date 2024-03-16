import React from "react";

export default function AppWrap() {
  return (
    <div>
      <NavBar>
        <p>Hello there</p>
      </NavBar>
    </div>
  );
}

function NavBar({ children }) {
  return (
    <header>
      <Avatar
        image='https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        name='Bob'
        size={200}
      />
      {children}
    </header>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img src={image} alt={name} width={size} />
    </div>
  );
}
