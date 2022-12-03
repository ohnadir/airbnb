import React, { useState } from 'react';
import '../Style/Navbar.css';
import logo from '../Assets/logo.png'
import { FaUserCircle } from 'react-icons/fa';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { CgOptions } from 'react-icons/cg';
import { HiSearch } from 'react-icons/hi';
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [open, setOpen] = useState(false);
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        infants: 0,
        pets:0
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };
    return (
        <div className='border py-4 sticky top-0 z-50 bg-white'>
            <div className='container mx-auto px-4 relative'>
                <div className='hidden md:block'>
                    <div className='flex items-center justify-between text-black '>
                        <div className='flex justify-start'>
                            <img className="cursor-pointer" src={logo} alt="" />
                        </div>
                        <div>
                        {
                            open ? <div className='flex items-center gap-6'>
                                <div className="activeItem">
                                    Stays
                                </div>
                                <div className="active">
                                    Experiences
                                </div>
                                <div className="active">
                                    Online Experiences
                                </div>
                            </div> 
                            : 
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
                                    <div className="searchBtn" onClick={()=>setOpen(!open)}>
                                        <HiSearch className="icon" />
                                    </div>
                                </div>
                            </div>
                        }
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
                    open && <div className="destinationContainer">
                    <div className="destinationItems">
                        <div className="destinationContent">
                            <p className="optionHeader">Where</p>
                            <p className="optionFooter">Search destinations</p>
                        </div>
                    </div>
                    <div className="divider">
                        <p></p>
                    </div>
                    <div className="destinationItem">
                        <div className="destinationContent" onClick={() => setOpenDate(!openDate)}>
                            <p className="optionHeader">Check in</p>
                            <p className="optionFooter">
                                {`${format(date[0].startDate, "MM/dd/yyyy")}`}
                            </p>
                        </div>

                    </div>
                    <div className="divider">
                        <p></p>
                    </div>
                    <div className="destinationItem" >
                        <div className="destinationContent" onClick={() => setOpenDate(!openDate)}>
                            <p className="optionHeader">Check out</p>
                            <p className="optionFooter">
                                {`${format(date[0].endDate,"MM/dd/yyyy")}`}
                            </p>
                        </div>
                        {
                            openDate && (
                                <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                                />
                            )
                        }
                    </div>
                    <div className="divider">
                        <p></p>
                    </div>
                    <div  className="destinationItem">
                        <div className="destinationContent">
                            <div className="btnContainer" onClick={() => setOpenOptions(!openOptions)}>
                                <div>
                                    <p className="optionHeader">Who</p>
                                    <p className="optionFooter">Add Guests</p>
                                </div>
                                <div className="calenderSearchBtn" onClick={()=>setOpen(!open)}>
                                    <HiSearch className="icon"/>
                                    <span className='hidden lg:block'>Search</span>
                                </div>
                            </div>
                            { openOptions && (
                                <div className="options">
                                    <div className="optionItem">
                                        <div className='flex flex-col'>
                                            <span className="optionText">Adult</span>
                                            <span className="optionBellowText">Ages 13 or above</span>
                                        </div>
                                        <div className="optionCounter">
                                            <button
                                            disabled={options.adult <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("adult", "d")}
                                            >
                                            -
                                            </button>
                                            <span className="optionCounterNumber">
                                            {options.adult}
                                            </span>
                                            <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("adult", "i")}
                                            >
                                            +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <div className='flex flex-col'>
                                            <span className="optionText">Children</span>
                                            <span className="optionBellowText">Ages 2-12</span>
                                        </div>
                                        <div className="optionCounter">
                                            <button
                                            disabled={options.children <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("children", "d")}
                                            >
                                            -
                                            </button>
                                            <span className="optionCounterNumber">
                                            {options.children}
                                            </span>
                                            <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("children", "i")}
                                            >
                                            +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <div className='flex flex-col'>
                                            <span className="optionText">Infants</span>
                                            <span className="optionBellowText">Under 2</span>
                                        </div>
                                        <div className="optionCounter">
                                            <button
                                            disabled={options.infants <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("infants", "d")}
                                            >
                                            -
                                            </button>
                                            <span className="optionCounterNumber">
                                            {options.infants}
                                            </span>
                                            <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("infants", "i")}
                                            >
                                            +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <div className='flex flex-col'>
                                            <span className="optionText">Pets</span>
                                            <span className="optionBellowText">Bringing a service animal?</span>
                                        </div>
                                        <div className="optionCounter">
                                            <button
                                            disabled={options.pets <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("pets", "d")}
                                            >
                                            -
                                            </button>
                                            <span className="optionCounterNumber">
                                            {options.pets}
                                            </span>
                                            <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("pets", "i")}
                                            >
                                            +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                }
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