import React from 'react'
import '../Style/Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
import { TbWorld } from 'react-icons/tb';



const Footer = () => {
  return (
    <div>
        <div className='container mx-auto p-4'>
            <div className="flex flex-col-reverse gap-3 lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex flex-col lg:flex-row items-center relative">
                    <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                    <ul className="flex m-0 gap-8">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="right">
                    <div className='flex items-center gap-2'>
                        <TbWorld />  <span className='px-2'>English (US)</span>
                    </div>
                    <div>
                        $ USD
                    </div>
                    <div className='flex gap-5'>
                        <FaFacebookF/>
                        <BsTwitter/>
                        <ImInstagram/>
                    </div> 
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer