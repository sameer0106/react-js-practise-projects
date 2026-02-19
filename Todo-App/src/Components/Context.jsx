import { createContext, useState } from "react";

// 1. creating context
export const ContextAPI = createContext();

// 2. creating context provider
const ContextProvider = ({ children }) => {
  const [EnteredItem, setEnteredItem] = useState([]);

  const handleAddBtn = (TodoName, TodoDate) => {
    console.log(`New Item Added Name:${TodoName} Date:${TodoDate}`);
    setEnteredItem([...EnteredItem, { taskName: TodoName, date: TodoDate }]);
  };

  const handleOnDelete = (TodoName) => {
    setEnteredItem(EnteredItem.filter((item) => item.taskName !== TodoName));
    console.log(`${TodoName} item got deleted`);
  };

  return (
    <>
      <ContextAPI.Provider
        value={{ handleAddBtn, EnteredItem, handleOnDelete }}
      >
        {children}
      </ContextAPI.Provider>
    </>
  );
};

export default ContextProvider;
