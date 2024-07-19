import "./ToDoList.css";
import { useState } from "react";

export const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState("");

  const ul = document.querySelector("#list");
  const newLi = document.createElement("li");

  const handleOnChange = (event) => {    
    setInputText(event.target.value);
  };
  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13 && inputText != "") {
      newLi.innerHTML = inputText;
      ul.append(newLi);
      setInputText("");
    }
  };
  
  return (
    <>
      <h1>MIS TAREAS</h1>
      <div className="container">
        <input
          placeholder="Ingresa una tarea"
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          value={inputText}
        />
        <ul id="list">
        </ul>
        <p>Tareas pendientes: 1</p>
      </div>
    </>
  );
};
