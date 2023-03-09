import "./App.css";
import Body from "./body/Body";
import Loadmore from "./body/Loadmore";
import Filter from "./body/Filter";
import FilterBrand from "./body/FilterBrand";
import Add from "./body/Add";
import { useEffect, useState } from "react";
// import Data from "../data/Data.js";

let btnNames = [
  { name: "All product", value: "all", component: <Body/> },
  { name: "Load more", value: "load", component: <Loadmore /> },
  { name: "Filter by category", value: "fCategory", component: <Filter /> },
  { name: "Filter by Brand", value: "fBrand", component: <FilterBrand /> },
  { name: "Add product", value: "add", component: <Add /> },
];

function App() {
  const [current, setCurrent] = useState(btnNames[0]);
  useEffect(() => {
    if (localStorage.getItem("btnVal")) {
      setCurrent(
        btnNames.find((btn) => btn.value === localStorage.getItem("btnVal"))
      );
    }
  }, []);

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.setItem("btnVal", btn.value);
  }
  return (
    <div className="App">
      <div className="outer">
        {btnNames.map((btn, index)=>(
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={
              current.value === btn.value ? "activeBtn" : "inactiveBtn"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.component}</div>
    </div>
  );
}

export default App;
