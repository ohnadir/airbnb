import React, { useState } from 'react';
import '../Style/Navbar.css';
import logo from '../Assets/logo.png'
import { FaUserCircle } from 'react-icons/fa';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { CgOptions } from 'react-icons/cg';
import { HiSearch } from 'react-icons/hi';
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className='border py-4 sticky top-0 z-50 bg-white'>
            <div className='container mx-auto px-4 relative'>
                <div className='hidden md:block'>
                    <div className='flex items-center justify-between text-black '>
                        <div className='flex justify-start'>
                            <img className="cursor-pointer" src={logo} alt="" />
                        </div>
                        <div>
                            <div className="searchContainer">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        Anywhere
                                    </div>
                                    <div className="hr">
                                        <p></p>
                                    </div>
                                    <div>
                                        Any week
                                    </div>
                                    <div className="hr">
                                        <p></p>
                                    </div>
                                    <div>
                                        Add Guests
                                    </div>
                                    <div className="searchBtn" >
                                        <HiSearch className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className="userMenu" onClick={()=>setDropdown(!dropdown)}>
                                <BiMenu className='cursor-pointer text-2xl '/>
                                <span >
                                    <FaUserCircle className=' text-3xl ' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    dropdown && <div className="dropDown">
                        <ul>
                            <li >Sign up</li>
                            <li >Login</li>
                            <li >Dashboard</li>
                        </ul>
                        <p className="dropDownHr"></p>
                        <ul>
                            <li>Host Your Home</li>
                            <li>Host an experience</li>
                            <li>Help</li>
                        </ul>
                        
                    </div>
                }
            </div>
        </div>
  )
}

export default Navbar