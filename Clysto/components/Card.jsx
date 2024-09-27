import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AddIn, UpdateBag ,RemoveBag} from "../Fetuare/Bag";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Card = React.memo(({props: {value: { text, price, exPrice, quantity, Image }, index,}, } = {}) => {
  const [counter, setCounter] = useState(Number);
    const { bagData } = useSelector((state) => state.bigBag);
    const dispatch = useDispatch();

    if (counter < 0) setCounter(0);

    const AddToBag = (I) => {
     
      var data = {
        id: I,
        each: counter + 1,
        TotalPrice: price,
        productName: text,
        productPrice: price,
        exPrice,
        counter,
        quintite: quantity,
        image: Image,
      };
      let Length = bagData.length;
      let isMatchFound = true;
      
        let i = 0;
        for (; Length > i; i++){
         
          if (bagData[i].id == I) {
            dispatch(
              UpdateBag({
                id: I,
                each: counter + 1,
                TotalPrice: price * (counter + 1),
                counter,
              })
            );
            isMatchFound=false;
            break;
          }
        
        }
       
      
      if (isMatchFound) {
         dispatch(AddIn(data));
       }

      
  };
  const Remove = (I) => {
    bagData.map((value) => {
      if (value.each > 1 && value.id==I) {
        dispatch(UpdateBag({
          id: value.id,
          each: value.counter - 1,
          TotalPrice: value.TotalPrice - value.productPrice,
          counter:value.counter-1,
       }))
      } else if (value.each <= 1 && value.id==I) {
        dispatch(RemoveBag({ id: I }));
      }
    })
  }

    return (
      <div className="carD">
        <div className="ProductImg">
          <div className="texts">
            <div
              className="dicrice"
              onClick={() => {setCounter(counter - 1),Remove(index)}}
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
              <div
                className="navative"
                onClick={() => {
                  setCounter(counter - 1), Remove(index);
                }}
              >
                {" "}
                -{" "}
              </div>
              <div
                className="inbag"
                onClick={() => {
                  setCounter(counter + 1), AddToBag(index);
                }}
              >
                {" "}
                {counter} in bag
              </div>
              <div
                className="positive"
                onClick={() => {
                  setCounter(counter + 1), AddToBag(index);
                }}
              >
                {" "}
                +{" "}
              </div>
            </button>
          ) : (
            <button
              className="Addbtn"
              onClick={() => {setCounter(counter + 1), AddToBag(index)}}
            >
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
