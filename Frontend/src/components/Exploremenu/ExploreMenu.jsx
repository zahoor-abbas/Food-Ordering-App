import React from 'react';
import './exploremenu.css';
// import { useState } from 'react';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore Our Menu</h2>
      <p className='explore-menutext'>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate dining experience. One delicious meal at a time.</p>
      <div className="explore-item">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-item-list" key={index} onClick={()=>setCategory((prev)=> prev === item.menu_name? "All": item.menu_name)} >
              <img src={item.menu_image} alt="img" className={category === item.menu_name ? "active" : ""} />
              <p className={category === item.menu_name ? "pcolor" : ""}>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
