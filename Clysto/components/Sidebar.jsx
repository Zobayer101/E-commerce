import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { bar } = useSelector((state) => state.Bar);

  return (
    <div className={bar ? "MainSide MSow" : "MainSide Show"}>
      <div className="mainItem">
        <Link to={"/"}>
        <div className="grocery">
          <img src="../src/Icon/sidebar/IconPng/download (3).png" />
          <p>Grocery </p>
        </div>
        </Link>
        <div className="Pharmacy">
          <img src="../src/Icon/sidebar/IconPng/download (5).png" />
          <p>Pharmacy</p>
        </div>
        <div className="cookups">
          <img src="../src/Icon/sidebar/IconPng/download (1).png" />
          <p>Cookups</p>
        </div>
      </div>
      <hr />
      <Link to={"/offers"}>
        <div className="offer">
          Offer <div className="box">65</div>
        </div>
      </Link>
      <Link to={"/egg-club"}>
        <div className="EggClub">Egg Club</div>
      </Link>
      <Link to={"/deal-of-the-day"}>
        <div className="DealOFThe">
          Deal of the Day <img src="../src/Icon/sidebar/DailyDeal.gif" />
        </div>
      </Link>
      <hr />
      {/* ------------- */}

      <Link to={"/favourites"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/Love.png" />
          Favourites
        </div>
      </Link>
      <Link to={"/summer-collection"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/summer-collection.webp" />
          Summer Collection
        </div>
      </Link>
      <Link to={"/flash-sales"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/flash-sales.webp" />
          Flash Sales
        </div>
      </Link>
      <Link to={"/popular"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/popular.webp" />
          Popular
        </div>
      </Link>
      <Link to={"/food"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/food.webp" />
          Food
        </div>
      </Link>
      <Link to={"/cleaning"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/home-cleaning.png" />
          Cleaning Supplies
        </div>
      </Link>
      <Link to={"/personal-care"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/personal-care (1).webp" />
          Personal Care
        </div>
      </Link>
      <Link to={"/hygiene"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/health-wellness.webp" />
          Health & Wellness
        </div>
      </Link>
      <Link to={"/baby-care"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/baby-care.webp" />
          Baby Care
        </div>
      </Link>
      <Link to={"/home-kitchen"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/home-kitchen.webp" />
          Home & Kitchen
        </div>
      </Link>
      <Link to={"/stationery-office"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/stationery-office.webp" />
          Stationery & Office
        </div>
      </Link>
      <Link to={"/pet-care"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/pet-care.webp" />
          Pet Care
        </div>
      </Link>
      <Link to={"/toys-sports"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/toys-sports.webp" />
          Toys & Sports
        </div>
      </Link>
      <Link to={"/beauty"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/beauty-makeup.webp" />
          Beauty & MakeUp
        </div>
      </Link>
      <Link to={"/fashion-lifestyle"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/fashion-lifestyle.webp" />
          Fashion & Lifestyle
        </div>
      </Link>
      <Link to={"/vehicle-essentials"}>
        <div className="Collection">
          <img src="../src/Icon/sidebar/vehicle-essentials.webp" />
          Vehicle Essentials
        </div>
      </Link>

      <hr />
    </div>
  );
};
export default Sidebar;
