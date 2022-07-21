import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar=() => {
    return(
        <> 
        <div className='container-fluid nav_bg' >
            <div className='row'>
              <div className='col-10 mx-auto'>


<nav className ="navbar  navbar-expand  justify-content-between  ">
  <NavLink className ="navbar-brand" to="/">Gospeller</NavLink>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>

    <ul className ="navbar-nav ml-auto mb-lg-0 ">
    <li className ="nav-item active">
        <NavLink className ="nav-link" to="/">Home </NavLink>
      </li>
      <li className ="nav-item active">
        <NavLink className ="nav-link" to="/contact">Contact </NavLink>
      </li>
      <li className ="nav-item">
        <NavLink className ="nav-link" to="/service">Services</NavLink>
      </li>
      <li className ="nav-item">
        <NavLink className ="nav-link" to="/about">About Us</NavLink>
      </li>
     
    </ul>

  
</nav>

</div>

</div>
</div> 


        </>
    )
}

export default Navbar ;