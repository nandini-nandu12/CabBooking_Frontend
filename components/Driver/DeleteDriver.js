import React,{useState,useEffect} from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteDriver, fetchDriver } from "../../store/actions/DriverAction";

function DeleteDriver(){
    const {dUserID} = useParams();

    const driver = useSelector(state => state.driverReducer.driver);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchDriver(dUserID))
    },[dispatch,dUserID])

    const handleDelete = () =>{
        alert("Are you sure, you want to delete");
        dispatch(deleteDriver(dUserID))
        .then(resp=>{
            alert(resp.data);
            navigate("/driver/getAll");
        });
    }
    return(
        <div>
            { 
               driver !== null &&
               <div>
                <center>
                   <h1>Driver Details</h1>
                   <p><b>UserId:</b> {driver.userID}</p>
                   <p><b>userName:</b> {driver.userName}</p>
                   <p><b>MobileNumber:</b> {driver.mobilenumber}</p>
                   <p><b>EmailId:</b> {driver.emailId}</p>
                   <p><b>LicenseNo:</b> {driver.licenseNo}</p>
                   <p><b>Location:</b> {driver.location}</p>
                   <p><b>Rating:</b> {driver.rating}</p>

                   <button onClick={handleDelete}>Delete</button>&nbsp;
                    <button onClick={() => navigate(-1)}>Back</button>
                    </center>
               </div>

            }

        </div>
    )
}
export default DeleteDriver;