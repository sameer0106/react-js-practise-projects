import AddTodo from "./Components/AddTodo";
import AddItems1 from "./Components/AddItems";
import AppName from "./Components/AppName";
import Welcome from "./Components/InitialGreeting";
import ContextProvider from "./Components/Context";
import "./App.css";

function TodoApp() {
  return (
    <center>
      <ContextProvider>
        <div className="App-Container">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <Welcome />
          <div className="Items-Container">
            <AddItems1></AddItems1>
          </div>
        </div>
      </ContextProvider>
    </center>
  );
}
export default TodoApp;
