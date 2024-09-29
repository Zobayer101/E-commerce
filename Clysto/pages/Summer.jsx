
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
// import Card from "../components/Card";
import SmallBag from "../components/Small-bag";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { UpdateSummer } from "../Fetuare/Summer";

const Summer=()=> {
  const { Summer } = useSelector((state) => state.sumer);
  const dispatch = useDispatch();
  // const arr = [

  //   {
  //     text: "Guava Premium (50 gm)",
  //     price: "50",
  //     exPrice: "70",
  //     quantity: "1 kg",
  //     Image: "../src/img/guava-premium-50-gm-1-kg.webp",
  //   },
  //   {
  //     text: "RC Q Lemon Pet",
  //     price: "25",
  //     exPrice: "",
  //     quantity: "250 ml",
  //     Image: "../src/Product/rc-q-lemon-pet-250-ml.webp",
  //   },
  //   {
  //     text: "Mojo Soft Drink",
  //     price: "100",
  //     exPrice: "",
  //     quantity: "2 L",
  //     Image: "../src/Product/mojo-soft-drink-2-ltr.webp",
  //   },
  //   {
  //     text: "Daab (Green Coconut)",
  //     price: "139",
  //     exPrice: "149",
  //     quantity: "each",
  //     Image: "../src/Product/daab-green-coconut-1-pcs.webp",
  //   },
  //   {
  //     text: "Kagozi Lebu (Kagozi Lemon)",
  //     price: "35",
  //     exPrice: "40",
  //     quantity: "4 pcs",
  //     Image: "../src/Product/kagozi-lebu-kagozi-lemon-4-pcs.webp",
  //   },
  //   {
  //     text: "Whole Hilsha Fish (Asto llish)",
  //     price: "979",
  //     exPrice: "1050",
  //     quantity: "700 gm",
  //     Image: "../src/Product/whole-hilsha-fish-asto-ilish-50-gm-700-gm.webp",
  //   },
  // ];

//--------------------------function--------------------
  const AddToBag = (I, counter) => {
    if (counter >= 0) dispatch(UpdateSummer({ id: I, counter }));
  }
     
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
                {/* -------------------------------------------- */}
                {/* {
                  arr.map((value, index) => {
                    return (
                      
                      <Card key={index} props={ {value,index}} />
                    )
                  })
                } */}
                {
                  Summer.map((value, index) => {
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
                  })
              }
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

export default Summer