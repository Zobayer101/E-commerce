import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";



function Deal_of_the_DAy() {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag/>
        <div className="MainContent">
          <h1>Deal of the day</h1>
          <Link to={"/offers"}>Goto The offers</Link>
        </div>
      </div>
    </>
  );
}

export default Deal_of_the_DAy
