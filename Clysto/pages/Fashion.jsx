
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FromAPI, UpdateProduct } from "../Fetuare/Product";
import SmallBag from "../components/Small-bag";
import { useFetchFashionProductsQuery } from "../lib/ApiSlice";
import { useEffect } from "react";
import { FashionControll } from "../Fetuare/ApiController";
function Fashion() {
  const { ProductData } = useSelector((state) => state.product);
  const { fashion } = useSelector((state) => state.apiCon);
  const { data,isSuccess } = useFetchFashionProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess && fashion) {
      dispatch(FromAPI([...data]));
      dispatch(FashionControll(false));
    }
  }, [dispatch, data, isSuccess, fashion]);

     const AddToBag = (I, counter) => {
       if (counter >= 0) dispatch(UpdateProduct({ id: I, counter }));
     };
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag />
        <SmallBag />
        <div className="MainContent">
          <div className="summerCounter">
            <div className="Carosol">
              {/* <img src="../src/img/summer-collection.webp" /> */}
            </div>
            <div className="connection">
              <p className="bar">Fashion & Lifestyle</p>
              <div className="ItemSection">
                {ProductData.map((value, index) => {
                  if (value.Catagori == 'fashion') {
                   
                    return (
                      <div className="carD" key={index}>
                        <div className="ProductImg">
                          <div className="texts">
                            <div
                              className="dicrice"
                              onClick={() => {
                                AddToBag(value.id, Number(value.counter) - 1);
                              }}
                            ></div>
                            <div
                              className="addBag"
                              onClick={() => {
                                AddToBag(value.id, Number(value.counter) + 1);
                              }}
                            >
                              {value.counter ? (
                                <>
                                  <p className="price">
                                    ৳{value.price * value.counter}
                                  </p>
                                  <div className="box">
                                    <div className="nag">-</div>
                                    <div className="num">{value.counter}</div>
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
                          <img src={value.Image} />
                          <p>{value.text}</p>
                          <p>{value.quantity}</p>
                          <p className="price">
                            {" "}
                            <span>{value.exPrice} </span> ৳{value.price}
                          </p>
                        </div>
                        <div className="ProductBTN">
                          {value.counter ? (
                            <button className="countbtn">
                              <div
                                className="navative"
                                onClick={() => {
                                  AddToBag(value.id, Number(value.counter) - 1);
                                }}
                              >
                                {" "}
                                -{" "}
                              </div>
                              <div
                                className="inbag"
                                onClick={() => {
                                  AddToBag(value.id, Number(value.counter) + 1);
                                }}
                              >
                                {" "}
                                {value.counter} in bag
                              </div>
                              <div
                                className="positive"
                                onClick={() => {
                                  AddToBag(value.id, Number(value.counter) + 1);
                                }}
                              >
                                {" "}
                                +{" "}
                              </div>
                            </button>
                          ) : (
                            <button
                              className="Addbtn"
                              onClick={() => {
                                AddToBag(value.id, Number(value.counter) + 1);
                              }}
                            >
                              <AiTwotoneThunderbolt className="Thunder" />{" "}
                              <span>Add to bag</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                 }
                })}
                {/* _____________________________________________ */}
              </div>
            </div>
          </div>
        </div>
        <Bottom_bag />
      </div>
    </>
  );
}

export default Fashion;
