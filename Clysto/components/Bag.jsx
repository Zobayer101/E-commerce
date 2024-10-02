import { FcInfo } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { openBag } from "../Fetuare/Them";
import { UpdateProduct } from "../Fetuare/Product";

const Bag = () => {
  const { bag } = useSelector((state) => state.Bar);
  const { ProductData } = useSelector((state) => state.product);
  const dispach = useDispatch();
  var Item = 0;
  var Totalprice = 0;
  ProductData.map((value) => {
    if (value.counter > 0) {
      Item = Item + 1;
      Totalprice = Number(value.counter) * Number(value.price) + Totalprice;
    }
  });

  return (
    <div className={bag ? "MainBag FullShow" : "MainBag Hide"}>
      <div className={bag ? "BigBag Hide" : "BigBag "}>
        <div className="Header">
          <div className="sector">
            <img src="../src/Icon/sidebar/IconPng/Bag.png" />
            <p>{Item} Item</p>
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
          {ProductData.map((value, index) => {
            if (value.counter > 0) {
              return (
                <div className="list" key={index}>
                  <div className="counter">
                    <FcCollapse
                      className="IcoN"
                      onClick={() => {
                        dispach(
                          UpdateProduct({
                            id: value.id,
                            counter: Number(value.counter) + 1,
                          })
                        );
                      }}
                    />
                    <p>{value.counter}</p>
                    <FcExpand
                      className="IcoN"
                      onClick={() =>
                        dispach(
                          UpdateProduct({
                            id: value.id,
                            counter: Number(value.counter) - 1,
                          })
                        )
                      }
                    />
                  </div>
                  <img src={`http://localhost:3300/uploads/${value.Image}`} />
                  <div className="info">
                    <p>{value.text}</p>
                    <h6>
                      ৳ {value.price} / {value.quantity}
                    </h6>
                  </div>
                  <div className="price">
                    <p> ৳ {value.price * value.counter}</p>
                  </div>
                  <div
                    className="cross"
                    onClick={() =>
                      dispach(UpdateProduct({ id: value.id, counter: 0 }))
                    }
                  >
                    <RxCross2 />
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="spacilCod">
          <TfiArrowCircleUp />
          <p>Have a special code?</p>
        </div>
        <div className="placeOrder">
          <div className="Order">Place Order</div>
          <div className="amount">{Totalprice}৳</div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
