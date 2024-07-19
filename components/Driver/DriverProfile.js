import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate,Link } from "react-router-dom";
import { fetchDriver } from "../../store/actions/DriverAction";


function DriverProfile() {
    const driver = useSelector(state => state.driverReducer.driver);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        dispatch(fetchDriver(userId));
    }, [userId])

    return (
       
        <div>
            
            {
                driver !== null &&
                <div style={{marginTop:100}}>
                    <center>
                        <h1 style={{marginTop:'10px', textDecoration:'underline'}}>Your Profile</h1>
                        <p><b>DriverId:</b> {driver.userID}</p>
                        <p><b>DriverName:</b> {driver.userName}</p>
                        <p><b>Mobile Number:</b> {driver.mobilenumber}</p>
                        <p><b>EmailId:</b> {driver.emailId}</p>
                        <p><b>Rating:</b> {driver.rating}</p>
                        <p><b>LicenseNo:</b> {driver.licenseNo}</p>
                        <p><b>Location:</b> {driver.location}</p> 
                        <div>
                        <Link to={`/driver/update/${userId}`} className="btn " >Update</Link>&nbsp;&nbsp;
                        </div>
                    </center>

                </div>
            }
        </div>
    )
}
export default DriverProfile;