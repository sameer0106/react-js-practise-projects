import styles from "../CSS/AddTodo.module.css";
import { useContext, useState } from "react";
import { ContextAPI } from "./Context";

function AddTodo() {
  const { handleAddBtn } = useContext(ContextAPI);

  const [TodoName, setTodoName] = useState("");
  const [TodoDate, setTodoDate] = useState("");

  const handleName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnAddClick = () => {
    handleAddBtn(TodoName, TodoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="Add-container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            value={TodoName}
            placeholder="Todo Text ..."
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={handleDate}
            value={TodoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
