import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDrivers } from '../../store/actions/DriverAction';
import profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import cabs from "../../assets/cabs.png";

function AdminDriver() {
    const drivers = useSelector(state => state.driverReducer.drivers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllDrivers());
    }, [])

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/`} className="btn btn-primary" style={{ marginLeft: 450 }}>Log Out</Link>

            </nav>
            <div className='container'>
                <div class="card-columns">{

                    drivers.length > 0 &&
                    drivers.map(d =>
                        <div className="card" style={{ width: '280px',marginTop:'90px' }}>
                            <div className="card bg-light" key={d.userID} style={{ width: 280 + "px" }}>
                                <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <p className="card-text"><b>Driver Id </b>:{d.userID}</p>
                                    <p className="card-text"><b>Driver Name </b>:{d.userName}</p>
                                    
                                    <Link to={`/admin/driverbyId/${d.userID}`} className="btn" >View</Link>
                                    <Link to={`/driver/update/${d.userID}`} className="btn" style={{ marginLeft: '5px' }}>Update</Link>
                                    <Link to={`/driver/delete/${d.userID}`} className="btn" style={{ marginLeft: '5px' }}>Delete</Link>
                                </div>

                            </div>

                        </div>

                    )
                }
                </div>
            </div>
            <div>
                <button className="btn btn-light" ><Link to="/admin/dashboard">Back</Link></button>
            </div>
        </div>

    )
}
export default AdminDriver;