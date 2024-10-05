import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import SmallBag from "../components/Small-bag";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { UpdateProduct, FromAPI} from "../Fetuare/Product";
import { useFetchSummerProductsQuery } from "../lib/ApiSlice";
import { useEffect } from "react";
import { SummerControll } from "../Fetuare/ApiController";


const Summer = () => {
  const { ProductData } = useSelector((state) => state.product);
  const { summer } = useSelector((state) => state.apiCon);
  const dispatch = useDispatch();
  const { data: fetchSummerProducts, isSuccess: summerSuccess } =
    useFetchSummerProductsQuery();
  useEffect(() => {
    // (async () => {

    //    let url= "http://localhost:3300/route/api/product/summer"

    //   const responce = await fetch(url, { method: "GET" });
    //   let Data = await responce.json();
    //   if (ProductData < 1) {
    //     dispatch(clearData());
    //     dispatch(FromAPI(Data));
    //   }
    // })();
    if (summerSuccess && summer) {
      console.log(fetchSummerProducts);
      dispatch(FromAPI([...fetchSummerProducts]));
      dispatch(SummerControll(false));
    }
  }, [dispatch, fetchSummerProducts, summerSuccess,summer]);
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
              <img src="../src/img/summer-collection.webp" />
            </div>
            <div className="connection">
              <p className="bar">Summer Collection</p>
              <div className="ItemSection">
              
                {ProductData.map((value, index) => {
                  if (value.Catagori == "summer") {
                 
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
                          <img
                            src={`http://localhost:3300/uploads/${value.Image}`}
                          />
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
};

export default Summer;
