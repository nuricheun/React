import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  return (
    <div
      className='container'
      onPointerMove={(e) => {
        setPointer({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }}
      />
    </div>
  );
}
