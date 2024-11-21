import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu] = useState("home")
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollPosition = window.scrollY;
      const threshold = 50;
      if (scrollPosition > threshold) {
        setNavbarBackground("#ffffff")
        
      }
      else {
        setNavbarBackground('transparent')
      }
    };
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")


  }

  return (
    <div className='navbar' style={{backgroundColor: navbarBackground}}>
     <Link to='/'> <img src={assets.logo} alt="Website Logo"  className='logo'/></Link>
      <ul className="nav-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu ==="menu"? "active": ""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}><img src={assets.basket_icon} alt="icon" /></Link>
          <div className={getTotalCartAmount() === 0? "": 'dot'}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}  className='signinbtn'>Sign in</button>:
        <div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
      
    </div>
  )
}

export default Navbar
