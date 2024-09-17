import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const App = () => {
  useEffect(() => {
    let x = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(x);
  }, []);
  const { them } = useSelector((state) => state.Thims);

  return (
    <div className={them ? "Light" : "Drack"}>
      <div className="body">
        <Header />
        <div className="countentSection">
          <Sidebar />
          <div className="MainContent">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={""} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
