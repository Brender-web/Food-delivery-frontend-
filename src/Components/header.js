import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css';


const Header = () => {
  return (
    <div className='landing'>
    <div className='links'>
      
        <NavLink to="/" activeClassName ="is-active" exact ={'true'}>Bresecose
        </NavLink>
        <NavLink to="/Signup" activeClassName="is-active">
                Signup
            </NavLink>
            <NavLink to="/Login" activeClassName="is-active">
                Login
            </NavLink>
            
            
    </div>
    <div>
      <h1>WELCOME TO BRESECOSE FOODS</h1>
    </div>
    </div>
  )
}

export default Header;