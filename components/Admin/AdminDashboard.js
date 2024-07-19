import React from "react";
import { useNavigate } from "react-router-dom";
import cabs from "../../assets/cabs.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import profiledb from "../../assets/profiledb.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/LoginAction";
import Login from "../Login";

function AdminDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
   

    const doLogout = () => {
       dispatch(logOut())
       navigate("/")
      }
      if(myuser === null){
       return <Login/>
      }

    return (
        <div>

            
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '8%',marginLeft: 380 }} /></Link>
                {/* <Link to={`/`} className="btn btn-primary" style={{ width: '8%', marginLeft: 5}}>Log Out</Link> */}
                <button onClick={doLogout} className="btn btn-primary" >Log Out</button>
            </nav>
            <center>
                <div>

                    <Link to={`/admin/driver`} className="btn btn-primary" style={{ marginTop: 120 }}>Drivers</Link>
                </div>
                <div>
                    <Link to={`/driver/add`} className="btn btn-primary" style={{ marginTop: 30 }}>Add Driver</Link>
                </div>
                <div>
                    <Link to={`/admin/cab`} className="btn btn-primary" style={{ marginTop: 30 }}>Cabs</Link>
                </div>
                <div>
                    <Link to={`/cab/add`} className="btn btn-primary" style={{ marginTop: 30 }}>Add Cab</Link>
                </div>
                <div>
                    <Link to={`/admin/trip`} className="btn btn-primary" style={{ marginTop: 30 }}>Trips</Link>
                </div>
               
                <div style={{ marginTop: '60px' }}>
                    <Footer />

                </div>
            </center>

        </div>
    )
}
export default AdminDashboard;