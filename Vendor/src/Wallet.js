import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import firebase, { db } from "./config";

function Wallet() {

  const [IsLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (IsLoading) {
        const snapshot = await db.collection("orderHistory").get();
        snapshot.forEach((doc) => {
          const shopData = {
            id: doc.id,
            name: doc.data().Cname,
            oID: doc.data().orderID,
            payment: doc.data().payment,
            ordered: doc.data().ordered,
            deleivered: doc.data().deleivered,
          };
          setData((props) => {
            return [...props, shopData];
          });

          console.log("Data is", shopData);
        });
        setIsLoading(false);
      }
    };
    if (IsLoading) {
      getData();
    }
  }, []);

  // const handleBlock = async (id) => {
  //   try {
  //     await db.collection("Shops").doc(id).delete();
  //     alert(`${id} has been deleted`);
  //   } catch (error) {
  //     alert("Error while deleting block");
  //   }
  // };

  if (IsLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }


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
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <p>Wallet is empty</p>
                    {/* <input type="text">asd </input> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4 mx-auto">
                <div className="print-inner2">
                  <p className="boldspan">Wallet is nil currently</p>
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
                  <tbody>
                    {Data.map((data) => {
                      return (
                        <tr>
                          <td>{data.oID}</td>
                          <td>{data.ordered.toDate().toDateString()}</td>
                          <td>{data.deleivered.toDate().toDateString()}</td>
                          <td>{data.payment}</td>
                          <td>{data.name}</td>
                          <td>
                            <button
                              className="blue-button"
                              // onClick={(e) =>
                              //   handleBlock(data.id).then(() =>
                              //     window.location.reload()
                              // )</td>
                              // }
                            >
                              details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
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
