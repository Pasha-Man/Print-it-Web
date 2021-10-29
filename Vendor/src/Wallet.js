import React from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
function Wallet() {
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
              <h3 className="service-h3"> Wallet</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h3 className="boldspan1 mb-5">See and manage your wallet</h3>

            <div className="row mt-3 mb-5 ">
              <div className="col-md-4 mx-auto">
                <div className="print-inner1">
                  <p className="boldspan">Add money to Customer Wallet</p>
                </div>
              </div>

              <div className="col-md-4 mx-auto">
                <div className="print-inner2">
                  <i className="fa fa-file"></i>
                  <span>9</span>
                  <p className="boldspan">Total Order Today</p>
                </div>
              </div>
            </div>

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
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr className="Top-Table-Bar">
                      <th>Order ID</th>
                      <th>Ordered</th>
                      <th>Deleivered</th>
                      <th>Status</th>
                      <th>Customer Name</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wallet;
