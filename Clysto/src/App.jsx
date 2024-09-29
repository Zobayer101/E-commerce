import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import Egg_Club from "../pages/Egg_Club";
import Deal_of_the_DAy from "../pages/Deal_of_the_DAy";
import Summer from "../pages/Summer";
import Flash from "../pages/Flash";
import Popular from "../pages/Popular";
import Food from "../pages/Food";
import Cleaning from "../pages/Cleaning";
import Personal from "../pages/Personal";
import Health from "../pages/Health";
import Baby from "../pages/Baby";
import Kitchen from "../pages/Kitchen";
import Stationery from "../pages/Stationery";
import Pet from "../pages/Pet";
import Toyes from "../pages/Toyes";
import Beauty from "../pages/Beauty";
import Fashion from "../pages/Fashion";
import Vehicle from "../pages/Vehicle";
import Favourites from "../pages/Favourites";
import NotFound from "../pages/NotFound";
import Dashbord from "./Admin/Dashbord";

const App = () => {
  return (
    <div>
      <div className="body">
        {/* <Header />
        <div className="countentSection">
          <Sidebar />
          <div className="MainContent"> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/egg-club" element={<Egg_Club />} />
            <Route path="/deal-of-the-day" element={<Deal_of_the_DAy />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/summer-collection" element={<Summer />} />
            <Route path="/flash-sales" element={<Flash />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/food" element={<Food />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/personal-care" element={<Personal />} />
            <Route path="/hygiene" element={<Health />} />
            <Route path="/baby-care" element={<Baby />} />
            <Route path="/home-kitchen" element={<Kitchen />} />
            <Route path="/stationery-office" element={<Stationery />} />
            <Route path="/pet-care" element={<Pet />} />
            <Route path="/toys-sports" element={<Toyes />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/fashion-lifestyle" element={<Fashion />} />
            <Route path="/vehicle-essentials" element={<Vehicle />} />
            <Route path="/admin-dashbord" element={<Dashbord />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/header" element={<Header />} /> */}
          </Routes>
        </BrowserRouter>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
