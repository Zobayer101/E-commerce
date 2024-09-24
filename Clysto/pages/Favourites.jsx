
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";

const Favourites = () => {
    return (
      <>
        <Header />
        <div className="countentSection">
          <Sidebar />
          <Bag/>
          <div className="MainContent">
            <h1>Hello my Baby....</h1>
            <Link to={"/offers"}>Goto The offers</Link>
          </div>
          <Bottom_bag/>
        </div>
      </>
    );
}

export default Favourites;