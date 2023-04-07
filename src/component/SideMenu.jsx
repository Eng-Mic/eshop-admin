import React from 'react'
import { GrOverview } from 'react-icons/gr'
import { HiOutlineUsers } from 'react-icons/hi'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { FaSitemap, FaLuggageCart } from 'react-icons/fa'
import { MdDeliveryDining, MdOutlinePayment, MdManageAccounts, MdCardGiftcard } from 'react-icons/md'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillSetting } from 'react-icons/ai'
import { TbMoneybag, TbLayoutDashboard } from 'react-icons/tb'
import { HiOutlineLogout } from 'react-icons/hi'


const SideMenu = () => {
    return (
        <div className='bg-lighterBlue pt-6 pb-10 shadow-sm '>
            <div className="current_admin flex items-center gap-2 mb-4 px-4">
                <div className="admin_img w-[2rem] border-2 rounded-full p-[2px]">
                    <img src="/assets/user.png" alt="" />
                </div>
                <div className="">
                    {/* admin name */}
                    <h2 className='text-[12px] font-medium'>
                        Michael L Bangura
                    </h2>
                    {/* admin status ie active */}
                    <p className='flex items-center gap-[2px] text-[11px] text-zinc-500'>
                        <GoPrimitiveDot className='text-green-500 text-[0.7rem]' />
                        Online
                    </p>
                </div>
                
            </div>
            <div className="menus my-5">
                <ul>
                    <p className='flex items-center gap-1 text-[10.5px] font-medium text-zinc-400 mt-6 mb-2 px-5 uppercase'>
                        <TbLayoutDashboard />
                        Menu
                    </p>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 text-slate-800 bg-zinc-200 border-l-[5px] border-slate-700 capitalize'>
                        <GrOverview className='text-[14px]' />
                        Dashboard
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <HiOutlineUsers className='text-[14px]' />
                        Users
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <SiHomeassistantcommunitystore className='text-[14px]' />
                        Stores
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <FaSitemap className='text-[14px]' />
                        Products
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdDeliveryDining className='text-[16px]' />
                        Deliveries
                    </li>
                    
                    <p className='flex items-center gap-1 text-[10.5px] font-medium text-zinc-400 mt-6 mb-2 px-5 uppercase'>
                        <TbMoneybag />
                        Income
                    </p>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <FaLuggageCart className='text-[14px]' />
                        Orders
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdOutlinePayment className='text-[14px]' />
                        Subscriptions
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdCardGiftcard className='text-[14px]' />
                        Promotions
                    </li>

                    <p className='flex items-center gap-1 text-[10.5px] font-medium text-zinc-400 mt-6 mb-2 px-5 uppercase'>
                        <AiFillSetting />
                        Settings
                    </p>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdManageAccounts className='text-[14px]' />
                        Account
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <HiOutlineLogout className='text-[14px]' />
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu