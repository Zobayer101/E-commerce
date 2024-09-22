import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";

const Baby = () => {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag />
        <div className="MainContent">
          <h1>Hello my Baby....</h1>
          <Link to={"/offers"}>Goto The offers</Link>
        </div>
      </div>
    </>
  );
};

export default Baby;
