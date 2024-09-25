import { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const Card = () => {
    const [counter, setCounter] = useState(Number);
    if (counter < 0) setCounter(0);
    
  return (
    <div className="carD">
      <div className="ProductImg">
        <div className="texts">
          <div
            className="dicrice"
            onClick={() => setCounter(counter - 1)}
          ></div>
          <div className="addBag" onClick={() => setCounter(counter + 1)}>
            {counter ? (
              <>
                <p className="price">৳49</p>
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
        <img src="../src/img/guava-premium-50-gm-1-kg.webp" />
        <p>Guava Premium (50 gm)</p>
        <p>1 kg</p>
        <p className="price">
          {" "}
          <span>৳60 </span> ৳49
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
            <AiTwotoneThunderbolt className="Thunder" /> <span>Add to bag</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
