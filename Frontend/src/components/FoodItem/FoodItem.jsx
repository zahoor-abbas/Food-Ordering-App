import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  console.log(({ id, name, price, description, image }))
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt="food item img" />

        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)} // Correctly pass the id
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />{" "}
            {/* Pass the id to removeFromCart */}
            <p>{cartItem[id]}</p> {/* Assuming this is for quantity */}
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
            />{" "}
            {/* Ensure id is passed correctly */}
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating img" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
      
    </div>
  );
};

export default FoodItem;
