import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTrips } from '../../store/actions/TripAction';
import { Link } from 'react-router-dom';

function GetAllTrips() {
    const trips = useSelector(state => state.tripReducer.trips);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTrips());
    }, [])

    return (
        <div className='container'>
            <div class="card-columns">{

                trips.length > 0 &&
                trips.map(t =>
                    <div className="card" style={{ width: '200px' }}>
                        <div className="card bg-light" key={t.tripBookingId} style={{ width: 250 + "px" }}>
                            <div className="card-body text-center">
                                <p className="card-text"><b>TripBooking Id </b>:{t.tripBookingId}</p>
                                <p className="card-text"><b>From Location </b>:{t.fromLocation}</p>
                                <p className="card-text"><b>To Location  </b>:{t.toLocation}</p>
                                <Link to={`/trip/getById/${t.tripBookingId}`} className="btn" >View</Link>
                                <Link to={`/trip/update/${t.tripBookingId}`} className="btn" >Update</Link>

                            </div>
                        </div>
                    </div>
                )
            }


            </div>
        </div>


    )
}
export default GetAllTrips;