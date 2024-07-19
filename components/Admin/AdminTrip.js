import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTrips } from '../../store/actions/TripAction';
import { Link } from 'react-router-dom';
import cabs from "../../assets/cabs.png";

function AdminTrip() {
    const trips = useSelector(state => state.tripReducer.trips);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTrips());
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

                    trips.length > 0 &&
                    trips.map(t =>
                        <div className="card" style={{ width: '200px', marginTop: '90px' }}>
                            <div className="card bg-light" key={t.tripBookingId} style={{ width: 250 + "px" }}>
                                <div className="card-body text-center">
                                    <p className="card-text"><b>TripBooking Id </b>:{t.tripBookingId}</p>
                                    <p className="card-text"><b>From Location </b>:{t.fromLocation}</p>
                                    <p className="card-text"><b>To Location  </b>:{t.toLocation}</p>
                                    <Link to={`/trip/getById/${t.tripBookingId}`} className="btn btn-primary" >View</Link>
                                    
                                </div>
                            </div>

                        </div>
                    )
                }


                </div>
            </div>
            <div><center>
                <button className="btn btn-light" style={{ marginTop: '10px' }}><Link to="/admin/dashboard">Back</Link></button></center>
            </div>
        </div>
    )
}
export default AdminTrip;