
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
function Popular() {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag/>
        <div className="MainContent">
          <h1>Popular</h1>
          <Link to={"/offers"}>Goto The offers</Link>
        </div>
      </div>
    </>
  );
}

export default Popular