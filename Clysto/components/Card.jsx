import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AddIn, UpdateBag } from "../Fetuare/Bag";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Card = React.memo(
  ({
    props: {
      value: { text, price, exPrice, quantity, Image },
      index,
    },
  } = {}) => {
    const [counter, setCounter] = useState(Number);
    const { bagData } = useSelector((state) => state.bigBag);
    const dispatch = useDispatch();

    if (counter < 0) setCounter(0);

    const AddToBag = (I) => {
      let data = {
        id: I,
        each: counter + 1,
        TotalPrice: price,
        productName: text,
        productPrice: price,
        exPrice,
        quintite: quantity,
        image: Image,
      };

      if (bagData[I]) {
        dispatch(
          UpdateBag({
            id: I,
            each: counter + 1,
            TotalPrice: price * (counter + 1),
          })
        );
      } else {
        dispatch(AddIn(data));
      }
    };

    return (
      <div className="carD">
        <div className="ProductImg">
          <div className="texts">
            <div
              className="dicrice"
              onClick={() => setCounter(counter - 1)}
            ></div>
            <div
              className="addBag"
              onClick={() => {
                setCounter(counter + 1), AddToBag(index);
              }}
            >
              {counter ? (
                <>
                  <p className="price">৳{price * counter}</p>
                  <div className="box">
                    <div className="nag">-</div>
                    <div className="num">{counter}</div>
                    <div className="pos">+</div>
                  </div>
                  <p className="InBag">in bag</p>{" "}
                </>
              ) : (
                <p>Add to bag</p>
              )}
            </div>

            <div className="Ditels">Details &gt;</div>
          </div>
          <img src={Image} />
          <p>{text}</p>
          <p>{quantity}</p>
          <p className="price">
            {" "}
            <span>৳{exPrice} </span> ৳{price}
          </p>
        </div>
        <div className="ProductBTN">
          {counter ? (
            <button className="countbtn">
              <div className="navative" onClick={() => setCounter(counter - 1)}>
                {" "}
                -{" "}
              </div>
              <div className="inbag" onClick={() => setCounter(counter + 1)}>
                {" "}
                {counter} in bag
              </div>
              <div className="positive" onClick={() => setCounter(counter + 1)}>
                {" "}
                +{" "}
              </div>
            </button>
          ) : (
            <button className="Addbtn" onClick={() => setCounter(counter + 1)}>
              <AiTwotoneThunderbolt className="Thunder" />{" "}
              <span>Add to bag</span>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
