import { useContext } from "react";
import { ContextAPI } from "./Context";

const Welcome = () => {
  const { EnteredItem } = useContext(ContextAPI);

  return (
    <>
      {EnteredItem.length === 0 && (
        <>
          <h4>Enjoy Your Day</h4>
          <i>(You Have No Task To Do)</i>
        </>
      )}
    </>
  );
};
export default Welcome;
