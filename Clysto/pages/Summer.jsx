
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bag from "../components/Bag";
import Bottom_bag from "../components/HoroiganralBag";
import Card from "../components/Card";

function Summer() {
  return (
    <>
      <Header />
      <div className="countentSection">
        <Sidebar />
        <Bag />
        <div className="MainContent">
          <div className="summerCounter">
            <div className="Carosol">
              <img src="../src/img/summer-collection.webp" />
            </div>
            <div className="connection">
              <p className="bar">Summer Collection</p>
              <div className="ItemSection">
                {/* -------------------------------------------- */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
               
               
                
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