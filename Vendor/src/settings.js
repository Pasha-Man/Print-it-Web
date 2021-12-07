import React, { useState } from "react";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";

function Settings(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [jazzcash, setJazzcash] = useState("");
  const [account, setAccount] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // Data is being stored as strings

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button has been clicked");
    const data = new FormData();
    // eslint-disable-next-line no-console

    data.append("email", email);
    data.append("password", password);
    data.append("number", number);
    data.append("jazzcash", jazzcash);
    data.append("account", account);
    data.append("latitude", latitude);
    data.append("longitude", longitude);


    console.log(data.get("latitude")); 
    console.log(data.get("longitude"));
    console.log(data.get("email"));
    console.log(typeof(data.get("email")));
    console.log(data.get("password"));
    console.log(data.get("number"));
    console.log(data.get("jazzcash"));
    console.log(data.get("account"));


  }

  return (
    <div>
      <Header setting="setting" />
      <NotificationPopup />
      <div className="custom-container mb-5 mt-5">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <h3 className="service-h3">Settings</h3>
          </div>
        </div>
        <div className="service-pad">
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="email"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Email
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="email"
                    type="email"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    placeholder="sheikhpasha12@gmail.com"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="password"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Password
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="password"
                    type="password"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    placeholder="12345678"
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                  <i
                    className="fa fa-eye"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="number"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Phone Number
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="number"
                    type="text"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    placeholder="03072284570"
                    onChange={(event) => setNumber(event.target.value)}
                  ></input>
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="latitude"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Latitude
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="latitude"
                    type="text"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    onChange={(event) => setLatitude(event.target.value)}
                  ></input>
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="longitude"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Longitude
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="longitude"
                    type="text"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    onChange={(event) => setLongitude(event.target.value)}
                  ></input>
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="account"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Account Number
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="account"
                    type="text"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    onChange={(event) => setAccount(event.target.value)}
                    placeholder="22927897027"
                  />
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70%",
                  justifyContent: "space-between",
                }}
                className="mb-4"
              >
                <label
                  for="jazz"
                  className="boldspan"
                  style={{ marginRight: "40px", fontSize: "20px" }}
                >
                  Jazz Cash Account
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    id="jazz"
                    type="text"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderRight: "0",
                      height: "35px",
                      outline: "none",
                      borderRadius: "4px 0 0 4px",
                      paddingLeft: "5px",
                      width: "250px",
                    }}
                    onChange={(event) => setJazzcash(event.target.value)}
                    placeholder="03072284570"
                  />
                  <i
                    className="fa fa-edit"
                    style={{
                      border: "1px solid #c7c5c5",
                      borderLeft: "0",
                      height: "35px",
                      padding: "07px",
                      borderRadius: "0 4px 4px 0",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-4" style={{ textAlign: "center" }}>
                  <button
                    className="service-h3"
                    onClick={handleSubmit}
                    style={{ border: "none" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
