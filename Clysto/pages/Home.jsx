import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import SmallBag from "../components/Small-bag";

const Home = () => {
  const scroll = useRef([]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (slide > 0 || slide < -1400) setSlide(0);

    scroll.current.style = `transform: translateX(${slide}px);`;

    // console.log(slide);
  }, [slide]);
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag />
        <SmallBag />
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
                <img src="../src/Icon/content/download (10).png" />
                <p>
                  Get your delivery within <span>1 hour</span>
                </p>
              </div>
              <div className="smallbox">
                <img src="../src/Icon/content/download (9).png" />
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
                  <Link to={"/food"}>
                    <img src="../src/Icon/web/fruitsAndVegs.png" />
                    <p>Fruits & Vegetables</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/food"}>
                    <img src="../src/Icon/web/meatAndFish.png" />
                    <p>Meat & Fish</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/flash-sales"}>
                    <img src="../src/Icon/web/cooking.png" />
                    <p>Cooking</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/summer-collection"}>
                    <img src="../src/Icon/web/beverages.png" />
                    <p>Beverages</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/cleaning"}>
                    <img src="../src/Icon/sidebar/home-cleaning.png" />
                    <p>Home & Cleaning</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/hygiene"}>
                    <img src="../src/img/pest-control.png" />
                    <p>Pest Control</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/stationery-office"}>
                    <img src="../src/img/stationary.png" />
                    <p>Stationery & Office</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/beauty"}>
                    <img src="../src/img/beauty.png" />
                    <p>Beauty Products</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/personal-care"}>
                    <img src="../src/img/healthCare.png" />
                    <p>Health Products</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/pet-care"}>
                    <img src="../src/Icon/web/petFood.png" />
                    <p>Pet Care</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/home-kitchen"}>
                    <img src="../src/img/kitchen-appliances.png" />
                    <p>Kichen Appliances</p>
                  </Link>
                </div>
                {/* -------------------------- */}
                <div className="card">
                  <Link to={"/baby-care"}>
                    <img src="../src/img/baby-care.png" />
                    <p>Baby Care</p>
                  </Link>
                </div>
                {/* -------------------------- */}
              </div>
            </div>
            <div className="titleText">Popular on Clysto</div>
            <div className="allTime">
              <div className="ImgBox">
                <img src="../src/Icon/web/pran.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/nestle.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/reckitt.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/uniliver.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/godrej-seeklogo.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/coca-cola.png" />
              </div>
              <div className="ImgBox">
                <img src="../src/Icon/web/fresh.png" />
              </div>
            </div>
            <div className="titleText">Shop & Get More</div>
            <div className="eventCard">
              <div className="mainCard">
                <div className="textSection">
                  <h2>Deal of the Day</h2>
                  <p>
                    Stock up on your favorite groceries for less with our
                    unbeatable deals! Don&#39;t miss out - limited stock
                  </p>
                </div>
                <img src="../src/img/image.jpg" />
              </div>
              <div className="mainCard1">
                <div className="textSection">
                  <h2>Premium Care</h2>
                  <p>
                    Too busy to place an order or handling order issuse no need
                    to worry as we give you option to take premium assistance
                  </p>
                </div>
                <img src="../src/img/dailyDealsShopInfo.jpg" />
              </div>
              <div className="mainCard2">
                <div className="textSection">
                  <h2>Shop & Earn Points</h2>
                  <p>
                    The more you shop the more you earn - cash back, free
                    shipping, exclusive offers and more. Discover the perks of
                    Egg Club membrship
                  </p>
                </div>
                <img src="../src/img/premiumImage.jpg" />
              </div>
            </div>
          </div>
        </div>
        <Bottom_bag />
      </div>
    </>
  );
};
export default Home;
