import React from 'react';
import {Outlet} from "react-router-dom";
import SideBarDash from './SideBarDash';






const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
       
        <SideBarDash></SideBarDash>
        <Outlet></Outlet>
      
    </div>
  )
}

export default DashboardLayout


