import React from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
function History() {
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
              <h3 className="service-h32">Order History</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h3 className="boldspan mb-5">
              See History of deleivered Orders
            </h3>
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
export default History;
