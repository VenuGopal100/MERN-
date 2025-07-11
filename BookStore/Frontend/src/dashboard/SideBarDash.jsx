import React, { useContext, useState } from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {  HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import {AuthContext} from "../contects/AuthProvider.jsx";


//Dialog box
import Dialog from '../components/Dialog.jsx';
import { auth } from '../firebase/firebase.config.js';
import { signOut } from 'firebase/auth';

//toggle sidebar
import { BiChevronLeft, BiMenu } from 'react-icons/bi';

//styling
import "../dashboard/SideBarStyles.css";



const SideBarDash = () => {
  const {user}=useContext(AuthContext);

  //Dialog box

  const [showDialog, setShowDialog] = useState(false);

  //toggle sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out');
      setShowDialog(false);
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  const handleDocumentationClick = () => {
    window.location.href = 'https://www.geeksforgeeks.org/bookstore-ecommerce-app-using-mern-stack/';
  };


  const handleHelpClick = () => {
    window.location.href = 'https://www.nopcommerce.com/en/demo-link';
  };



  //toggle sidebar
  const toggleSidebar = () => {
    console.log('Button clicked'); 
    setIsSidebarOpen(!isSidebarOpen);
  };

  


//   return (
//     <div >
//       <Sidebar
//         aria-label="Sidebar with content separator example"
//         className={`vh-100 ${isSidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300`} // Apply dynamic width based on state
//       >
//     {/* <Sidebar aria-label="Sidebar with content separator example" className='vh-100 '> */}
//       <Sidebar.Logo href="/" img={user?.photoURL || userImg} imgAlt="user profile" className='mb-0 ml-7 mt-5' >{isSidebarOpen && <p>{user?.displayName || "Demo User"}</p>}{/*<p>{user?.displayName ||"Demo User"}</p>*/}</Sidebar.Logo>
//       <Sidebar.Items >        
//         <Sidebar.ItemGroup >
          
          
//           <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
//             {isSidebarOpen && 'Upload Books'}
//           </Sidebar.Item>
//           <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
//           {isSidebarOpen && 'Manage Books'}
//           </Sidebar.Item>
//           {/* <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item> */}
        
//           <Sidebar.Item href="/logout" icon={HiTable} onClick={handleLogoutClick}>
//             {isSidebarOpen && 'Log out'}
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//         <Sidebar.ItemGroup>
//           {/* <Sidebar.Item href="#" icon={HiChartPie}>
//             Upgrade to Pro
//           </Sidebar.Item> */}
//           <Sidebar.Item href="#" icon={HiViewBoards} onClick={handleDocumentationClick}>
//           {isSidebarOpen && 'Manage Books'}
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={BiBuoy} onClick={handleHelpClick}>
//           {isSidebarOpen && 'Help'}
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>

//     <button
//         onClick={toggleSidebar}
//         style={{
//           position: 'absolute',
//           left: isSidebarOpen ? '16rem' : '2rem', // Adjust button position based on sidebar state
//           top: '50%', // Adjust vertical position
//           background: 'transparent',
//           border: 'none',
//           cursor: 'pointer',
//           zIndex: 1000, // Ensure button is above other content
//         }}
//       >
//         {isSidebarOpen ? <BiChevronLeft size={24} /> : <BiMenu size={24} />} {/* Arrow when open, hamburger when closed */}
//       </button>

//     {showDialog && (
//         <Dialog onClose={handleCloseDialog} onConfirm={handleLogout} />
//       )}
//     </div>

    
//   )
// }

return (
  <div style={{ position: 'relative' ,backgroundColor:"#F6F5F5"}}>
    {isSidebarOpen && (
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`vh-100 w-64 transition-width duration-300`} // Open width
      >
        <Sidebar.Logo href="/" img={user?.photoURL || userImg} imgAlt="user profile" className='mb-0 custom-logo'>
          <p>{user?.displayName || "Demo User"}</p>
        </Sidebar.Logo>
        <Sidebar.Items >
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable} onClick={handleLogoutClick}>
              Log out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiViewBoards} onClick={handleDocumentationClick}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy} onClick={handleHelpClick}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    )}

    {!isSidebarOpen && (
      <button
        onClick={toggleSidebar}
        style={{
          position: 'fixed', // Use fixed to stay in place when scrolling
          left: '10px', // Adjust position as needed
          top: '12%', // Adjust vertical position as needed
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000, // Ensure button is above other content
        }}
      >
        <BiMenu size={30} /> {/* Show hamburger icon when sidebar is collapsed */}
      </button>
    )}

    {isSidebarOpen && (
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          left: '16rem', // Adjust position based on sidebar state
          top: '20%', // Adjust vertical position
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000, // Ensure button is above other content
        }}
      >
        <BiChevronLeft size={30} /> {/* Show close icon when sidebar is open */}
      </button>
    )}

    {showDialog && (
      <Dialog onClose={handleCloseDialog} onConfirm={handleLogout} />
    )}
  </div>
);
};

export default SideBarDash;
