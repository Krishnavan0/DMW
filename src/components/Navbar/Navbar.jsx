import React from 'react'
import Button from '../Button/Button';
import { useNavigate, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav_logo">
          <NavLink to="/">
          <img src='/src/assets/images/dmw.png' alt="" />
          </NavLink>
        </div>
        <div className="nav_items">
          <ul className="nav_item_list">
            <li className="nav_item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/spare">Spare Parts</NavLink>
            </li>
            <li className="nav_item">
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
    </div>
  )
}

export default Navbar
