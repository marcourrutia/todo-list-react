import "./ToDoList.css";

export const ToDoList = () => {
  return (
    <>
      <h1>TAREAS</h1>
      <div className="container">
        <input placeholder="Ingresa una tarea"></input>
        <ul>
            <li>tarea</li>
        </ul>
        <p>Tareas pendientes: 1</p>
      </div>
    </>
  );
};
