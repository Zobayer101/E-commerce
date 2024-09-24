import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";

const Home = () => {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag/>
        <div className="MainContent">
          <div className="HomeContent">

          <h1>Home page</h1>
          <Link to={"/offers"}>Goto The offers</Link>
          </div>
        </div>
        <Bottom_bag/>
      </div>
    </>
  );
};
export default Home;
