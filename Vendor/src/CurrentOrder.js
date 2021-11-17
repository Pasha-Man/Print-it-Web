import * as  React from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar"; 
function Current() {
  return (
    <div className="cover-all">
      <div>
        <Header printer="printer" />
        <NotificationPopup />
        <div
          className="custom-container mt-5 mb-5"
          style={{ backgroundImage: "./backgroundAll.png" }}
        >
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h33">Current Order</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h3 className="boldspan mb-5">See Current Progress of order</h3>
            <div
              style={{
                background: "#F6F6F6",
                borderRadius: "8px",
                padding: "20px 15px",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "5px",
                  padding: "50px 30px",
                  border: "1px solid #F6F6F6",
                }}
              >
                <div className="row mt-3 mb-3">
                  <div className="col-md-4">
                    <div className="print-inner">
                      <span>8</span>
                      <p className="boldspan">Order in Queue</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="print-inner">
                      <span>1</span>
                      <p className="boldspan">Order Completed</p>
                    </div>
                  </div>

                  <h5 className="boldspan mb-5 mt-5">
                    Order of Turn #1 is currently printing
                  </h5>

                  <ProgressBar
                    completed={60}
                    maxCompleted={100}
                    bgColor="#008000"
                  /> 
                  {/* Check the link bellow for progressbar details and dependencies */}
                  {/* https://www.npmjs.com/package/@ramonak/react-progress-bar#examples */}
                  <div
                    style={{
                      background: "#F6F6F6",
                      borderRadius: "8px",
                      padding: "20px 15px",
                      marginTop: "20px",
                    }}
                  >
                    <h5 className="boldspan ">Order Details:</h5>
                    <ul
                      style={{
                        padding: "5px 15px",
                        marginLeft: "130px",
                        
                      }}
                    >
                      <li>Pages: 14</li>
                      <li>Copies: 2</li>
                      <li>Type: Colored</li>
                      <li>Size: A4</li>
                      <li>Print on both sides</li>
                      <li>Dispatch: Yes</li>
                    </ul>
                  </div>

                  {/* <progress id="file" value="32" max="100">
                    {" "}
                    32%{" "}
                  </progress> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Current;
