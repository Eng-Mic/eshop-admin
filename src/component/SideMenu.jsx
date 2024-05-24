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
import { Link } from 'react-router-dom'


const SideMenu = () => {
    return (
        <div className='bg-lighterBlue pt-6 pb-10 shadow-sm'>
            <div className="menus my-5 h-[66vh]  overflow-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-[#3e98c7] scrollbar-track-zinc-400 scroll-smooth">
                <ul>
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