import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { BiCaretDown, BiLogOut } from 'react-icons/bi'
import { MdCardGiftcard, MdDeliveryDining, MdEmail, MdOutlinePayment } from 'react-icons/md'
import { BsBellFill } from 'react-icons/bs'
import { FaLuggageCart, FaSitemap } from 'react-icons/fa';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { HiOutlineUsers } from 'react-icons/hi';
import { GrOverview } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { IoMdArrowDropdown, IoMdNotifications, IoMdSettings } from 'react-icons/io'
import { GoPrimitiveDot } from 'react-icons/go';


export const TopNav = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='relative'>
            {isHovered ? (
                <div
                    // onClick={() => {
                    //     setIsOpened(false);
                    //     setIsMenuOpened(false)
                    // }}
                    className = "fixed inset-0 bg-black opacity-40 z-20"
                />
            ) : ''}
            <div className="py-[1rem] flex items-center justify-between">
                <div className="">
                    <h2 className='text-[1.1rem] font-semibold'>
                        e-shop.
                    </h2>
                </div>
                <ul className='flex items-center gap-2 text-[12px] text-zinc-400'>
                    <Link to='/' className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 text-slate-800 border-b-[1px] border-slate-700 capitalize'>
                        <GrOverview className='text-[14px]' />
                        Dashboard
                    </Link>
                    <Link to='/users' className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <HiOutlineUsers className='text-[14px]' />
                        Users
                    </Link>
                    <Link to='stores' className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <SiHomeassistantcommunitystore className='text-[14px]' />
                        Vendors
                    </Link>
                    <Link to='/products' className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <FaSitemap className='text-[14px]' />
                        Products
                    </Link>
                    {/* <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdDeliveryDining className='text-[16px]' />
                        Deliveries
                    </li> */}
                    
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <FaLuggageCart className='text-[14px]' />
                        Orders
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdOutlinePayment className='text-[14px]' />
                        Subscriptions
                    </li>
                </ul>

                <div className="right_right flex items-center gap-4">
                    <div className="mail">
                        <MdEmail className='text-[14px]' />
                    </div>
                    <div className="notification">
                        <BsBellFill className='text-[14px]' />
                    </div>
                    <div
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        className="hidden relative flex-col items-center justify-center cursor-pointer h-[3rem] z-30 md:flex"
                    >
                        <div className="flex items-center gap-x-[3px]">
                            <FiUser className='text-[1rem]' />
                            <div className='flex items-center text-[12px] gap-x-[5px]'>
                                <p>
                                    Michael L Bangura
                                </p> 
                                <IoMdArrowDropdown className='text-[1rem]' />
                            </div>
                        </div>

                        {/* Settings Modal :: Display when hover upon  */}
                        {isHovered && (
                            <div className="bg-zinc-50 w-[16rem] absolute top-[2.5rem] right-0 p-[1rem] rounded-[5px] z-30">
                                <section className='flex items-center gap-x-[10px] border-b-[1px] border-zinc-300 pb-[10px] mb-[10px]'>
                                    <FiUser className='text-[1.5rem]' />
                                    <div>
                                        <p className='text-[13px] font-medium flex items-center gap-x-[5px]'>
                                            Michael
                                            <GoPrimitiveDot className='text-[8px]' />
                                            e-shop
                                        </p>
                                        <p className='text-[10px]'>
                                            michlawbang123@gmail.com
                                        </p>
                                    </div>
                                </section>

                                {/* Settings */}
                                <section className='px-2'>
                                    <Link to='/admin/settings' className='flex items-center gap-2 text-[11.5px] capitalize text-zinc-600'>
                                        <IoMdSettings className='text-[13px]' />
                                        Profile Settings
                                    </Link>
                                    
                                </section>
                                
                                {/* Logout */}
                                <section className='flex items-center justify-center gap-x-[10px] bg-zinc-700 text-white text-[11px] py-[8px] rounded-[4px] mt-[1.5rem]'>
                                    <BiLogOut className='text-[1rem]' />
                                    <p>
                                        Logout
                                    </p>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
