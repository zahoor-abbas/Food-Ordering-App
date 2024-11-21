import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/Orders/Orders';


const App = () => {
 const url = 'https://invonixtech.com'

  return (
    <Router>
        <ToastContainer />

        <Navbar/>
        <hr />

      <div className="app-content">
        <Sidebar />
        <Routes>
          
          <Route path='/add' element={<Add url = {url}/>}></Route>
          <Route path='/list' element={<List url={url}/>}></Route>
          <Route path='/orders' element={<Orders url = {url} />}></Route>


        </Routes>
       
      </div>

  </Router>
  )
}

export default App
