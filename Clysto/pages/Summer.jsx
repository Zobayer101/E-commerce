
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import Card from "../components/Card";
import SmallBag from "../components/Small-bag";
import { useState } from "react";
//import { AiTwotoneThunderbolt } from "react-icons/ai";

const Summer=()=> {
   const [counter, setCounter] = useState(Number);
  if (counter < 0) setCounter(0);
  const arr = [
    {
      text: "Guava Premium (50 gm)",
      price: "50",
      exPrice: "70",
      quantity: "1 kg",
      Image: "../src/img/guava-premium-50-gm-1-kg.webp",
    },
    {
      text: "RC Q Lemon Pet",
      price: "25",
      exPrice: "",
      quantity: "250 ml",
      Image: "../src/Product/rc-q-lemon-pet-250-ml.webp",
    },
    {
      text: "Mojo Soft Drink",
      price: "100",
      exPrice: "",
      quantity: "2 L",
      Image: "../src/Product/mojo-soft-drink-2-ltr.webp",
    },
    {
      text: "Daab (Green Coconut)",
      price: "139",
      exPrice: "149",
      quantity: "each",
      Image: "../src/Product/daab-green-coconut-1-pcs.webp",
    },
    {
      text: "Kagozi Lebu (Kagozi Lemon)",
      price: "35",
      exPrice: "40",
      quantity: "4 pcs",
      Image: "../src/Product/kagozi-lebu-kagozi-lemon-4-pcs.webp",
    },
    {
      text: "Whole Hilsha Fish (Asto llish)",
      price: "979",
      exPrice: "1050",
      quantity: "700 gm",
      Image: "../src/Product/whole-hilsha-fish-asto-ilish-50-gm-700-gm.webp",
    },
  ];

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
                {
                  arr.map((value, index) => {
                    return (
                      
                      <Card key={index} props={ {value,index}} />
                    )
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