import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
function Beauty() {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag/>
        <div className="MainContent">
          <h1>Beauty page</h1>
          <Link to={"/"}>Goto The offers</Link>
        </div>
      </div>
    </>
  );
}

export default Beauty;
