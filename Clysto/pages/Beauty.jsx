import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
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
        <Bottom_bag/>
      </div>
    </>
  );
}

export default Beauty;
