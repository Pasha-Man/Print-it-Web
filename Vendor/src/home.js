import React from "react";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import Graph from "./Graph";
import "./style.css";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
    {
      label: "Water",
      backgroundColor: "rgba(0,0,0)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};




function Home() {
  return (
    <div>
      <Header printer="printer" />
      <NotificationPopup />
      <div className="custom-container mt-5 mb-5" style={{ backgroundImage: "./backgroundAll.png"}}>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <h3 className="service-h3">Printer Shop 2</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">Show how your business is going</h4>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-file"></i>
                <span>8</span>
                <p className="boldspan">Order Today</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-times"></i>
                <span>1</span>
                <p className="boldspan">Cancelled Order</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-file"></i>
                <span>9</span>
                <p className="boldspan">Total Order Today</p>
              </div>
            </div>
          </div>
          <h4 className="boldspan mb-5 mt-5">
            Show how your business is going
          </h4>
        </div>
        <Graph  />
      </div>
    </div>
  );
}
export default Home;
