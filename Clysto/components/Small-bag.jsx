import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";

const SmallBag = () => {
  const { bag } = useSelector((state) => state.Bar);
  const { ProductData } = useSelector((state) => state.product);
  const dispach = useDispatch();
  var Item = 0;
  var TotalPrice = 0;
  ProductData.map((value) => {
    if (value.counter > 0) {
      Item += 1;
      TotalPrice = Number(value.counter) * Number(value.price) + TotalPrice;
    }
  });
 
    return (
      <div
        className={bag ? "smallBag Hide" : "smallBag"}
        onClick={() => dispach(openBag())}
      >
        <div className="bagImg">
          <img src="../src/Icon/sidebar/IconPng/Bag.png" />
          <p>{Item} Item</p>
        </div>
        <div className="PricE">৳ {TotalPrice}</div>
      </div>
    );
}

export default SmallBag;