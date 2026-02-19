import React, { useContext } from "react";
import { ContextAPI } from "./Context";

function AddItems1() {
  const { EnteredItem, handleOnDelete } = useContext(ContextAPI);

  return (
    <div className="Item-1">
      <div className="row">
        {EnteredItem.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-6">{item.taskName}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleOnDelete(item.taskName)}
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default AddItems1;
