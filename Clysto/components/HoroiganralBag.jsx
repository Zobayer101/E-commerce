import { HiOutlineChatAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";



const Bottom_bag = () => {
    const { bag } = useSelector((state) => state.Bar);
    const dispach = useDispatch(openBag());
  return (
    <div className={bag ? "lowerBag " : "lowerBag Shows"}>
      <div className="bagContent">
        <div className="Icons">
          <HiOutlineChatAlt2 />
        </div>
        <div className="pLaceOrder">Place Order</div>
        <div className="ImG" onClick={() => dispach(openBag())}>
          <img src="../src/Icon/sidebar/IconPng/Bag.png" />
          <span>16</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom_bag;
