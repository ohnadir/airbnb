import React, { useState } from 'react';
import Slider from "react-slick";
import '../Style/Category.css'
import { CgOptions } from 'react-icons/cg';
import {TbPool, TbBeach, TbToolsKitchen } from 'react-icons/tb'
import { GiIsland, GiCampingTent, GiGrandPiano, 
    GiFishingBoat, GiMountainCave, GiForestCamp, GiCastle, GiPaperWindmill, GiTreehouse } from 'react-icons/gi'
import { MdCabin, MdOutlineSurfing, MdSportsGolf, MdDownhillSkiing } from 'react-icons/md';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Modal } from 'antd';
import { RiCloseFill } from 'react-icons/ri';


const Category = () => {
    const [keyword, setKeyword] = useState();
    const [open, setOpen] = useState(false)
    const category = [
        {id: 1, name: "Pool", icon: <TbPool /> },
        { id: 2,  name: "Beach", icon: <TbBeach /> },
        { id: 3, name: "Kitchen", icon: <TbToolsKitchen />},
        { id: 4,  name: "island" ,icon: <GiIsland />},
        { id: 5, name: "Camping", icon: <GiCampingTent/> },
        {id: 6, name: "Piano", icon: <GiGrandPiano/> },
        {id: 7, name: "Houseboats", icon: <GiFishingBoat/>},
        { id: 8, name: "Cave", icon: <GiMountainCave/> },
        {id: 9, name: "Camping", icon: <GiForestCamp />},
        { id: 10, name: "Castle", icon: <GiCastle />},
        {id: 11, name: "Windmill", icon: <GiPaperWindmill />},
        {id: 12, name: "Treehouse", icon: <GiTreehouse />},
        {id: 13, name: "Cabins", icon: <MdCabin/>},
        {id: 14, name: "Surfing" , icon:  <MdOutlineSurfing />,},
        { id: 15, name: "Golf", icon: <MdSportsGolf /> },
        { id: 16, name: "Ski-in/out", icon: <MdDownhillSkiing />}
    ];
    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 5 ? "hidden" : "visible"}}
            className="prev">
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 5 ? "hidden" : "visible"}}
            className="next">
            <BiChevronRight/>
        </button>
    );
    const settings = {
        dots: false,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
        ]
    }
  return (
    <div style={{"top" : "86px", "zIndex" : "2"}} className='container mx-auto px-4 mt-5  overflow-y-hidden  sticky  bg-white'>
        <div className='flex items-center gap-10 justify-between pt-5'>
            <div className='relative  px-8 w-[80%] overflow-y-hidden'>
                <Slider {...settings}>
                    {
                        category.map((item)=>(
                            
                            <div   key={item.id}>
                                <div className="iconContainer" style={{color :keyword === item.name  ? " black" : "", borderBottom :keyword === item.name  ? " 2px solid  black" : ""}} onClick={()=>setKeyword(item.name) }>
                                    <div className='text-3xl flex justify-center'>{item.icon}</div>
                                    <p className='m-0 text-center'>{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='w-[10%] hidden sm:block'>
                <div onClick={()=>setOpen(!open)} className='cursor-pointer flex items-center gap-1 font-semibold border rounded-lg max-w-fit px-5 py-2'>
                    <CgOptions/> <span>Filter</span>
                </div>
            </div>
        </div>
        {
            open && <Modal
            centered
            open={open}
            width={870}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none", padding:0  }}
          >
            <div>
                <div className='border-b-[1px]'>
                    <div className='flex items-center px-5 py-5'>
                        <RiCloseFill onClick={() => setOpen(false)} className='w-[30px] h-[30px]  rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                        <p className='m-0 mx-auto font-bold text-[18px] '>Filters</p>
                    </div>
                </div>
                <div className='px-5 mt-10'>
                    <p className="pHeading">Price range</p>
                    <div className="divider">
                        <p className=''></p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-5 mt-[25px]'>
                        <div>
                            <h1 className="heading">Booking Protection Guarantee</h1>
                            <p className="pHeading">In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
                        </div>
                        <div>
                            <h1 className="heading">Check-In Guarantee</h1>
                            <p className="pHeading">If you can’t check into your home and the Host cannot resolve the issue, 
                                we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
                            </p>
                        </div>
                        <div>
                            <h1 className="heading">Get-What-You-Booked Guarantee</h1>
                            <p className="pHeading">If at any time during your stay you find your listing isn't as advertised—for example, 
                                the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have 
                                three days to report it and we’ll find you a similar or better home, or we’ll refund you.
                            </p>
                        </div>
                        <div>
                            <h1 className="heading">24-hour Safety Line</h1>
                            <p className="pHeading">If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
                        </div>
                    </div>
                </div>
                
            </div>
          </Modal>
        }
    </div>
  )
}

export default Category