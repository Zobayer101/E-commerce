import { FaBarsStaggered } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useDispatch} from "react-redux";
import { barMode } from "../Fetuare/Them";
import { Link } from "react-router-dom";

const Header = () => {
  
  const dispach = useDispatch();
  
  return (
    <div >
      <div className="barCountuner">
        <div className="section1">
          <div className="bar" onClick={()=>dispach(barMode())}>
            <FaBarsStaggered />
          </div>
          <div className="logo">
            <Link to={"/"}>
            <img src="../src/Icon/sidebar/Clysto.png" />
            </Link>
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
