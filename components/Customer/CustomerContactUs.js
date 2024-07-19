import React from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import CustomerNavBar from "./CustomerNavbar";

function ContactUs() {
    const navigate = useNavigate();
    return (

        <div style={{marginTop:'90px'}}>
            <CustomerNavBar/>
                <center>
            <div>
                <h2 style={{marginTop:'50px'}}>Please contact us if you have any queries</h2>
            </div>
            <h5 style={{marginTop:'10px'}}>Contact Details</h5><hr/>
            <p><b>Contact Number:</b> 9900887766</p>
            <p><b>EmailId:</b> admin@gmail.com</p>
            <div>
              <button className="btn btn-light" onClick={() => navigate(-1)}>Back</button>
             </div></center>
        </div>
    )
}
export default ContactUs;