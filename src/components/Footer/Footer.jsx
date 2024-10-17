import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot">
          {/* <div className="foot_head">
            DMW
          </div> */}
          <div className="foot_sect">
            <div className="foot_col_1">
              <div className="foot_title">Navigate</div>
              <ul className='foot_items'>
                <li className="foot_item">
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/'>Spare Parts</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/'>Request a Part</NavLink>
                </li>
              </ul>
            </div>

            <div className="foot_col_1">
              <div className="foot_title">Important Link</div>
              <ul className='foot_items'>
                <li className="foot_item">
                  <NavLink to='/'>Search by make</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/'>Search by parts</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/policy'>Privacy Policy</NavLink>
                </li>
                <li className="foot_item">
                  <NavLink to='/terms'>Term and Condition</NavLink>
                </li>
              </ul>
            </div>


            <div className="foot_col_1">
              <div className="foot_title">Social Links</div>
              <ul className='foot_items'>
              </ul>
            </div>



          </div>
        </div>
      </div>
      <div className="copyright_sect">
        <div className="copyright">
          <div className="copyright_head">Copyright © 2025;  Design By Mariposa Digital</div>
        </div>
      </div>
    </>
  )
}

export default Footer
