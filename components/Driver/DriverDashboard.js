import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import cabs from "../../assets/cabs.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import profiledb from "../../assets/profiledb.png";
import DriverNavBar from "./DriverNavBar";
import DriverProfile from "./DriverProfile";


function DriverDashboard() {
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const driver = useSelector(state => state.driverReducer.driver);
  const { userId } = useParams();
  /* const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser")
      alert("logged out");
      navigate("/");
    }
  } */
  return (
    <div>
      <DriverNavBar/>
      {/* <div style={{ marginTop: '60px' }}>
        <div>
          {
            driver !== null &&
            <div>
              <center>
                <h1>Cab Details</h1>
                <p>CabId: {driver.cabbean.cabId}</p>
                    <p>CabNo: {driver.cabbean.cabNo}</p>
                    <p>CabType: {driver.cabbean.cartype}</p>
                    <p>CabName: {driver.cabbean.cabName}</p>
                    <p>PerKmRate: {driver.cabbean.perKmRate}</p>
              </center>
            </div>
          }
        </div> */}
        <div style={{marginTop:'100px'}}>
        <DriverProfile/>
        </div>
        <Footer />
      </div>
    

  )
}
export default DriverDashboard;