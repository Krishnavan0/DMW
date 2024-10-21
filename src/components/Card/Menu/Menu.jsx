import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '../../Button/Button';
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
     <div className="menu_items">
          <ul className="menu_item_list">
            <li className="menu_item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/spare">Spare Parts</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Button 
            text="Become a Part Provider"
            type="submit"
            width="17rem"
            fontWeight='400'
            height='4rem'
            borderRadius="0rem"
            event={() => {
              navigate("/signup");
            }}
          />
        </div> 
    </div>
  )
}

export default Menu
