import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const scroll = useRef([]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    scroll.current.style = `transform: translateX(${slide}px);`;
  
  }, [slide]);
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag />
        <div className="MainContent">
          <div className="HomeContent">
            <div className="headers">
              <div className="InnerBox">
                <div className="texts">
                  <h2>Grocery Deleivered at your Doorstep</h2>
                </div>
                <div className="Img">
                  <img src="../src/img/imageBanner.png" alt="imageBanner" />
                </div>
              </div>
            </div>
            <div className="OurFasility">
              <div className="smallbox">
                <img src="../src/Icon/content/Grocery Bag.png" />
                <p>
                  {" "}
                  <span>+15000 products</span> to shop from
                </p>
              </div>
              <div className="smallbox">
                <img src="../src/Icon/content/Wallet.png" />
                <p>
                  Pay <span>after</span> receiving products
                </p>
              </div>
              <div className="smallbox">
                <img src="../src/Icon/content/Grocery Bag.png" />
                <p>
                  Get your delivery within <span>1 hour</span>
                </p>
              </div>
              <div className="smallbox">
                <img src="../src/Icon/content/download (10).png" />
                <p>
                  Get offers that <span>Save Money</span>
                </p>
              </div>
            </div>
            <div className="titleText">Popular Categories</div>
            <div className="popularCat">
              <div className="Left" onClick={() => setSlide(slide + 200)}>
                <FcPrevious />
              </div>
              <div className="Right" onClick={() => setSlide(slide - 200)}>
                <FcNext />
              </div>
              <div className="CardWraper" ref={scroll}>
                {/* ---------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/meatAndFish.png" />
                    <p>Meat & Fish</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/cooking.png" />
                    <p>Cooking</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/beverages.png" />
                    <p>Beverages</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/sidebar/home-cleaning.png" />
                    <p>Home & Cleaning</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/img/pest-control.png" />
                    <p>Pest Control</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
              </div>
              {/* -------------------------- */}
            </div>
            <div className="titleText">Popular on Clysto</div>
          </div>
        </div>
        <Bottom_bag />
      </div>
    </>
  );
};
export default Home;
