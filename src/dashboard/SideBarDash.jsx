import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {  HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiViewBoards } from "react-icons/hi";
// import userImg from "../assets/profile.jpg";
import {AuthContext} from "../contects/AuthProvider.jsx";



const SideBarDash = () => {
  const {user}=useContext(AuthContext);
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='vh-100'>
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="user profile"  className='mb-0 rounded'><p>{user?.displayName ||"Demo User"}</p></Sidebar.Logo>
      <Sidebar.Items >        
        <Sidebar.ItemGroup >
          
          
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item> */}
        
          <Sidebar.Item href="/logout" icon={HiTable}>
            
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item> */}
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBarDash;
