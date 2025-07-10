import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars,FaXmark, FaHeart} from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import WishlistIcon from './WishlistIcon';
import { PiBooksFill } from "react-icons/pi";

const Navbar = () => {
    const wishlistIconRef = useRef(null);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);
    


    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll",handleScroll);

        return () =>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    const navItems = [
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Your Book",path:"/admin/dashboard"},
        
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in-all duration-300'>
        <nav className={`py-4 lg:px-24 ${ isSticky? "sticky top-0 left-0 right-0 bg-blue-100":""}`}>
            <div className='flex justify-between items-center text-base gap-h'>
                <Link to="/" className="text-2xl font-bold text-blue-400 flex items-center gap-2 "><PiBooksFill className='h-10'></PiBooksFill>BookNest</Link>
                <ul className='lg:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-black uppercase cursive curser-pointer hover:text-blue-300'>{link}</Link>)
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBars className='w-5 hover:text-blue-300 lg:hidden'/></button>
                    <div className='flex items-center space-x-4 lg:ml-auto'>
                    <Link to="/wishlist" className='text-black' ref={wishlistIconRef}>
                        <WishlistIcon></WishlistIcon>
                    
                    </Link>
                    <Link to="/cart" className='text-black'>
                            <FaCartShopping className='mx-5 w-6 h-6 hover:text-blue-300' />
                    </Link>
                    
                </div>
                </div>
                
                {/*for small screen*/}
                <div className='md:hidden'>
                <div className='flex items-center space-x-4 lg:ml-auto'>
                    <Link to="/wishlist" className='text-black'>
                            <WishlistIcon></WishlistIcon>
                    </Link>
                </div>
                <div className='flex items-center space-x-4 lg:ml-auto'>
                    <Link to="/cart" className='text-black'>
                            <FaCartShopping className='w-6 h-6 hover:text-blue-300' />
                    </Link>
                </div>
                
                    <button onClick={toggleMenu} className='text-black fous:outline-none'>
                        {
                            isMenuOpen? <FaXmark className='h-5 w-5 text-black'/>:<FaBars className='w-5 hover:text-blue-300'/>
                        }
                    </button>
                </div>
                <div className={`space-y-4 mt-12 py-7 text-white bg-blue-300 ${ isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
                    {
                        navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-white uppercase curser-pointer hover:text-blue-300'>{link}</Link>)
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar