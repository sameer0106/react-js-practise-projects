import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="Container">
      <Sidebar></Sidebar>
      <div className="pageContainer">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
