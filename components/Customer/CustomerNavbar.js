import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/actions/LoginAction";
import { Link } from "react-router-dom";
import GetAllCabs from '../Cab/GetAllCabs';
import { useParams } from "react-router-dom";
import cabs from "../../assets/cabs.png";
import profiledb from "../../assets/profiledb.png";


function CustomerNavBar() {
  const navigate =useNavigate();
  const doLogout = () => {
    if (myuser !== null) {
      
      localStorage.removeItem("myuser")
      alert("logged out");
      navigate("/");
    }
  }
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    return(

        <div>
        <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
          <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={`/customer/${myuser.userId}`} class="nav-link" href="#"style={{color:'white'}} >Your Rides</Link>
            </li>
            <li class="nav-item">
              <Link to={"/contactUs"} class="nav-link" href="#" style={{color:'white'}}>Contact Us</Link>
            </li>
          </ul>
          <span class="navbar-text" style={{ marginLeft: 300, color: 'white' }}><b>CustomerDashboard</b></span>
          <Link to={`/customer/profile/${myuser.userId}`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '8%' ,marginLeft: 380 }}  /></Link>
          {/* <Link to={`/`} className="btn btn-primary" style={{ marginLeft: 50 }}>Log Out</Link> */}
          <button onClick={doLogout} >Log Out</button>
        </nav>
      </div>
    )
}
export default CustomerNavBar;