import React from 'react';
import { SidebarData } from '../../Data/Data';
import { SvgIcon } from '@mui/material'; // Import the MUI SvgIcon component
import './Sidebar.css'; 
import Logo from "../../imgs/logo.png";
const Sidebar = () => {
  return ( 
    <div className='Sidebar'>
      <div className='logo'>
      <img src={Logo} alt="logo" />
          <span>
            sh<span>o</span>p
          </span>
        
      </div>
      <div className='menu'>
        {SidebarData.map((item, index) => {
          return (
            <div className='menuItem' key={index}>
              {item.icon}
              <span className='menuItem-heading'>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  ); 
};

export default Sidebar;
