import { FaBarsStaggered } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div >
      <div className="barCountuner">
        <div className="section1">
          <div className="bar">
            <FaBarsStaggered />
          </div>
          <div className="logo">
            <img src="../src/Icon/sidebar/Clysto.png" />
          </div>
        </div>
        <div className="section2">
          <input type="search"  placeholder="Search for products"/>
          <div className="SerBtn" >
            <IoIosSearch />
          </div>
        </div>
        <div className="section3">
          <div className="conLoc">
            <CiLocationOn /> Dhaka
          </div>
          <div className="BTn">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
