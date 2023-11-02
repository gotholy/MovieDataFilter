import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="bg-slate-400 py-1 px-4 rounded-xl" onClick={onClick}>
      {text}
    </button>
  );
}
