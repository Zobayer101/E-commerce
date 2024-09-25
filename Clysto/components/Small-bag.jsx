import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";
const SmallBag = () => {
    const {bag} = useSelector((state) => state.Bar);
    const dispach = useDispatch();
    console.log(bag);
    return (
      <div
        className={bag ? "smallBag Hide" : "smallBag"}
        onClick={() => dispach(openBag())}
      >
        <div className="bagImg">
          <img src="../src/Icon/sidebar/IconPng/Bag.png" />
          <p>12 Item</p>
        </div>
        <div className="PricE">৳ 150</div>
      </div>
    );
}

export default SmallBag;