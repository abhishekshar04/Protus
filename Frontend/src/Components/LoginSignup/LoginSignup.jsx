import React from "react";
import { useState } from "react";
import './LoginSignup.css';

const LoginSignup=()=>{
    const [action,setaction]=useState("Sign Up");
    return(
        <div className="container">
            <div className="header">
                <div className="text">
                    {action}
                </div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                        <input placeholder="Name" type="text"></input>
                    </div>}
                    
                    <div className="input">
                        <input placeholder="Email" type="email"></input>
                    </div>
                    <div className="input">
                        <input placeholder="Password" type="password"></input>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
                        setaction("Sign Up");
                    }}>Sign up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{
                        setaction("Login");
                    }}>Login</div>
                </div>
        </div>
    )
}

export default LoginSignup;