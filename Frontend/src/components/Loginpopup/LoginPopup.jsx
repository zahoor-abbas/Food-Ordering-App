import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";


const LoginPopup = ({ setShowLogin }) => {
  const {url, setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const {name,value} = event.target;
    setData(data=>({...data, [name]:value}))

  }

  
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
  
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        toast.error(response.data.message || "An error occurred");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server Error");
    }
  };
  
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin} >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? <></>: <input name="name" value={data.name} onChange={onChangeHandler} type="text" placeholder="Your Name" />}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="password" required />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms and conditions</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
