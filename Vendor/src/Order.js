import React from "react";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
function Order() {
  return (
    <div>
      <Header printer="printer" />
      <NotificationPopup />
      <div className="custom-container mt-5 mb-5">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <h3 className="service-h3">Orders</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">See orders of the Shop</h4>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div className="print-inner">
                <span>8</span>
                <p className="boldspan">Total Order</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="print-inner">
                <span>1</span>
                <p className="boldspan">Pending Order</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="print-inner">
                <span>9</span>
                <p className="boldspan">Orders Deleivered</p>
              </div>
            </div>
          </div>
          <h4 className="boldspan mb-5 mt-5">Check Order</h4>
          <div
            className="d-flex flex-row"
            style={{
              padding: "10px 0px",
            }}
          >
            <button
              className="greenButton"
              onClick={() => {
                window.location.href = "/CurrentOrder";
              }}
            >
              Current Order
            </button>
            <div
              style={{
                background: "#F6F6F6",
                borderRadius: "8px",
                padding: "20px 20px",
                width: "50%",
                marginLeft: "295px",
              }}
            >
              <h4>check current order</h4>
            </div>
          </div>
          <div
            className="d-flex flex-row"
            style={{
              padding: "10px 0px",
            }}
          >
            <button
              className="yellowButton"
              onClick={() => {
                window.location.href = "/OrderHistory";
              }}
            >
              Order History
            </button>
            <div
              style={{
                background: "#F6F6F6",
                borderRadius: "8px",
                padding: "20px 20px",
                width: "50%",
                marginLeft: "300px",
              }}
            >
              <h4> See the details of orders</h4>
            </div>
          </div>
          <div
            className="d-flex flex-row"
            style={{
              padding: "10px 0px",
            }}
          >
            <button
              className="redButton"
              onClick={() => {
                window.location.href = "/CancelledOrder";
              }}
            >
              Cancelled Order
            </button>
            <div
              style={{
                background: "#F6F6F6",
                borderRadius: "8px",
                padding: "20px 20px",
                width: "50%",
                marginLeft: "270px",
              }}
            >
              <h4> See the details of Cancelled orders</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
