import React, { useContext, useEffect, useState } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list, cartItem,url} = useContext(StoreContext);
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:"",


  })

  const onChangeHandler = (event) =>{
   const {name, value} = event.target;
   setData(data=>({...data, [name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
  
    food_list.forEach((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItem[item._id] };
        orderItems.push(itemInfo);
      }
    });
  
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
  
    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
  
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error: " + (response.data.message || "Failed to place order."));
      }
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "An error occurred while processing the payment."));
    }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if (!token) {
      navigate('/cart')
      
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
      
    }


  },[token])
  

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="placeorder-title">Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" name="firstName" value={data.firstName} onChange={onChangeHandler} placeholder="First Name" />
          <input required type="text" placeholder="Last Name" name="lastName" value={data.lastName} onChange={onChangeHandler} />
        </div>
        <input required type="email" placeholder="Email" name="email" value={data.email} onChange={onChangeHandler} />
        <input required type="text" placeholder="Street" name="street" value={data.street} onChange={onChangeHandler} />
        <div className="multi-fields">
          <input required type="text" placeholder="City" name="city" value={data.city} onChange={onChangeHandler} />
          <input required type="text" placeholder="State" name="state" value={data.state} onChange={onChangeHandler} />
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder="Zip Code" name="zipCode" value={data.zipCode} onChange={onChangeHandler} />
          <input required type="text" placeholder="Country" name="country" value={data.country} onChange={onChangeHandler}/>
        </div>
        <input required type="text" placeholder="Phone" name="phone" value={data.phone} onChange={onChangeHandler} />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cat Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0: 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0  ? 0 : getTotalCartAmount() +2}</p>
          </div>
          <button type="submit">Proceed To PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
