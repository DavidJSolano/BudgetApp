import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div classname="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
      </div>
    </div>
  );
};

export default App;
