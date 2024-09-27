import { FcInfo } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";
import { RemoveBag } from "../Fetuare/Bag";

const Bag = () => {
  const { bag } = useSelector((state) => state.Bar);
  const { bagData } = useSelector((state) => state.bigBag);
  const dispach = useDispatch();
  var totalPrice=0;
  
  console.log(bagData);
  return (
    <div className={bag ? "MainBag FullShow" : "MainBag Hide"}>
      <div className={bag ? "BigBag Hide" : "BigBag "}>
        <div className="Header">
          <div className="sector">
            <img src="../src/Icon/sidebar/IconPng/Bag.png" />
            <p>{bagData.length} Item</p>
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
          {bagData.map((value, index) => {
            totalPrice += Number(value.TotalPrice);
            return (
              <div className="list" key={index}>
                <div className="counter">
                  <FcCollapse className="IcoN" />
                  <p>{value.counter+1}</p>
                  <FcExpand className="IcoN" />
                </div>
                <img src={value.image} />
                <div className="info">
                  <p>{value.productName}</p>
                  <h6>
                    ৳ {value.productPrice} / {value.quintite}
                  </h6>
                </div>
                <div className="price">
                  <p> ৳ {value.TotalPrice}</p>
                </div>
                <div className="cross" onClick={()=>dispach(RemoveBag({id:value.id}))}>
                  <RxCross2 />
                </div>
              </div>
            );
          })}
        </div>

        <div className="spacilCod">
          <TfiArrowCircleUp />
          <p>Have a special code?</p>
        </div>
        <div className="placeOrder">
          <div className="Order">Place Order</div>
          <div className="amount">{totalPrice}৳</div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
