import React, { useState } from "react";
//import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/LoginAction";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import CAR from "../assets/CAR.jpg";
import pic from "../assets/pic.png"
import "../style/Login.css"


function Login() {
    const [uname, setUname] = useState('');
    const [upwd, setUpwd] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const loggedInUser = useSelector(state => state.loginReducer.loggedInUser);
    const dispatch = useDispatch();


    const doLogin = () => {
        let errors = {};
        if (!uname) {
            errors['userNameError'] = "Field is required";
        }
        if (!upwd) {
            errors['passwordError'] = "Field is required";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const payload = {
                userName: uname,
                password: upwd
            }
            dispatch(login(payload))
        }
    }
    return (
        <div>
            {
                loggedInUser !== null &&
                    loggedInUser.dtype === 'Driver' ?
                    navigate("/driver/dashboard") :
                    loggedInUser.dtype === 'Customer' ?
                        navigate("/customer/dashboard") :
                        loggedInUser.dtype === 'Admin' ?
                            navigate("/admin/dashboard") :
         
                            <div>
                                <div>
                                    <img className="card-img-top" src={CAR} alt="Card image" style={{ width: '100%', marginTop: '10px' }} />

                                    {/* <img className="card-img-top" src={pic} alt="Card image" style={{ width: '10%', marginLeft: '450px', marginBottom: '190px'  }} /> */}
                                    
                                    <div /* className="cover" */>
                                    
                                        <div style={{ marginLeft: '800px', marginTop: '-230px' }}>
                                            <div >
                                                <label style={{ color: "white" }}><b>Username &nbsp;</b></label>
                                                <input type="text" name="uname" value={uname} required style={{ borderRadius: '20px' }}
                                                    onChange={event => setUname(event.target.value)} />
                                                {
                                                    formErrors.userNameError && <div style={{ color: 'red' }}>{formErrors.userNameError}</div>
                                                }
                                            </div>
                                            <div >
                                                <label style={{ color: "white" }}><b>Password &nbsp;&nbsp;</b></label>
                                                <input type="password" name="upwd" value={upwd} required style={{ borderRadius: '20px' }}
                                                    onChange={event => setUpwd(event.target.value)} />
                                                {
                                                    formErrors.passwordError && <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                                                }
                                            </div>
                                            <div style={{ marginTop: '10px' }}>
                                            <button disabled = {!upwd} className="btn btn-primary" onClick={doLogin}  >Login</button>&nbsp;

                                                <h6 style={{ color: "white" }}>Don't have an Account?</h6>
                                                <Link to={`/customer/add`} className="btn btn-primary" >Register </Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                </div>
                            
            }
                            </div>


    )


}
            export default Login;