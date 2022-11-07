import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './bresecose.css';

class Bresecose extends Component {
  constructor(props){
    super(props);
    this.state ={
       type:"",
       description: "",
       cost:"" ,
    }
  };
  render(){
    return(
      <div className='food'>
        <div className='breakfast'>
          <NavLink to="/Breakfast" activeClassName="is-active">
                Breakfast
            </NavLink>
            <h5>Cake</h5>
            <h5>Bread</h5>
            <h5>Mandazi</h5>
            <h5>Chapati</h5>
        </div>
        <div className='lunch'>
        <NavLink to="/Lunch" activeClassName="is-active">
                Lunch
            </NavLink> 
              <h5>Coffee</h5>
              <h5>Tea</h5>
              <h5>Cocoa</h5>
              <h5>Fresh juice</h5>
        </div>
        <div className='dinner'>
        <NavLink to="/Dinner" activeClassName="is-active">
                Dinner
            </NavLink> 
            <h5>Pork</h5>
            <h5>Chicken</h5>
            <h5>Beef</h5>
            <h5>Fish</h5>
        </div>
       
<div className='order'>
  <button>
    <NavLink to="Order" activeClassName="is-active">
                Make your orders
            </NavLink>
            </button>
            
            </div>
      </div>
      
      
    )
  };
};
  export default Bresecose;
  