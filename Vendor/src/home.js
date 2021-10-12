import React from "react";
import Header from "./header";
import  "./style.css";
function Home(){

  return(
        <div>
            <Header
            printer="printer"
            />
            <div className="custom-container mt-5 mb-5"> 
              <div className="row" style={{display:"flex",justifyContent:"center"}}>
                <div className="col-md-4" style={{textAlign:"center"}}>
                  <h3 className="service-h3">
                    Printer Shop 2
                  </h3>
                </div>
              </div>
              <div style={{padding:'0 10%'}} className="mt-5 mb-5">
                <h4 className="boldspan mb-5">
                  Show how your business is going
                </h4>
                <div className="row mt-3 mb-3">
                  <div className="col-md-4">
                    <div className="print-inner">
                    <i className="fa fa-file"></i>
                    <span>8</span>
                    <p className="boldspan">
                      Order Today
                    </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="print-inner">
                    <i className="fa fa-times"></i>
                    <span>1</span>
                    <p className="boldspan">
                      Cancelled Order
                    </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="print-inner">
                    <i className="fa fa-file"></i>
                    <span>9</span>
                    <p className="boldspan">
                      Total Order Today
                    </p>
                    </div>
                  </div>
                </div>
                <h4 className="boldspan mb-5 mt-5">
                  Show how your business is going
                </h4>
                <div id="chart_div" ></div>
              </div>

            </div>
        </div>
)
}
export default Home;
