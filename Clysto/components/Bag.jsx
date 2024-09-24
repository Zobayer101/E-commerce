import { FcInfo } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";


const Bag = () => {
  const { bag } = useSelector((state) => state.Bar);
  const dispach = useDispatch();

  return (
    <div className={bag?"MainBag FullShow":"MainBag Hide"}>
      <div className={bag ? "BigBag Hide" : "BigBag "}>
        <div className="Header">
          <div className="sector">
            <img src="../src/Icon/sidebar/IconPng/Bag.png" />
            <p>12 Item</p>
          </div>
          <button onClick={() => dispach(openBag())}>close</button>
        </div>
        <div className="Dcharge">
          <p>You have reduced delivery chare</p>
          <div className="item">
            <p>৳ 39</p>
            <FcInfo />
          </div>
        </div>
        <div className="Icon">
          <img src="../src/Icon/sidebar/IconPng/Horse.png" />
          <p>Express Delivery</p>
        </div>

        <div className="components">
          {/* -------------------------------------- */}
          <div className="list">
            <div className="counter">
              <FcCollapse className="IcoN" />
              <p>2</p>
              <FcExpand className="IcoN" />
            </div>
            <img src="../src/img/baby-care.png" />
            <div className="info">
              <p>Nestle KitKat 4 Finger Chocolate Wafer (India)</p>
              <h6>৳ 70 / 36.5 gm</h6>
            </div>
            <div className="price">
              <p>39৳</p>
            </div>
            <div className="cross">
              <RxCross2 />
            </div>
          </div>
          <div className="list">
            <div className="counter">
              <FcCollapse className="IcoN" />
              <p>2</p>
              <FcExpand className="IcoN" />
            </div>
            <img src="../src/img/baby-care.png" />
            <div className="info">
              <p>Nestle KitKat 4 Finger Chocolate Wafer (India)</p>
              <h6>৳ 70 / 36.5 gm</h6>
            </div>
            <div className="price">
              <p>39৳</p>
            </div>
            <div className="cross">
              <RxCross2 />
            </div>
          </div>
          <div className="list">
            <div className="counter">
              <FcCollapse className="IcoN" />
              <p>2</p>
              <FcExpand className="IcoN" />
            </div>
            <img src="../src/img/baby-care.png" />
            <div className="info">
              <p>Nestle KitKat 4 Finger Chocolate Wafer (India)</p>
              <h6>৳ 70 / 36.5 gm</h6>
            </div>
            <div className="price">
              <p>39৳</p>
            </div>
            <div className="cross">
              <RxCross2 />
            </div>
          </div>
          <div className="list">
            <div className="counter">
              <FcCollapse className="IcoN" />
              <p>2</p>
              <FcExpand className="IcoN" />
            </div>
            <img src="../src/img/baby-care.png" />
            <div className="info">
              <p>Nestle KitKat 4 Finger Chocolate Wafer (India)</p>
              <h6>৳ 70 / 36.5 gm</h6>
            </div>
            <div className="price">
              <p>39৳</p>
            </div>
            <div className="cross">
              <RxCross2 />
            </div>
          </div>
          <div className="list">
            <div className="counter">
              <FcCollapse className="IcoN" />
              <p>2</p>
              <FcExpand className="IcoN" />
            </div>
            <img src="../src/img/baby-care.png" />
            <div className="info">
              <p>Nestle KitKat 4 Finger Chocolate Wafer (India)</p>
              <h6>৳ 70 / 36.5 gm</h6>
            </div>
            <div className="price">
              <p>39৳</p>
            </div>
            <div className="cross">
              <RxCross2 />
            </div>
          </div>
          {/* ------------------------- */}
        </div>

        <div className="spacilCod">
          <TfiArrowCircleUp />
          <p>Have a special code?</p>
        </div>
        <div className="placeOrder">
          <div className="Order">Place Order</div>
          <div className="amount">39৳</div>
        </div>
      </div>
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
      
    </div>
  );
};

export default Bag;
