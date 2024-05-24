import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { MdManageAccounts, MdStackedBarChart } from 'react-icons/md'
import { SiBrandfolder } from 'react-icons/si'
import { Link } from 'react-router-dom'

const SideBarMenu = () => {
    return (
        <>
            <ul>
                <li className='flex items-center gap-[6px] text-[13px] font-medium py-[0.75rem] capitalize text-zinc-600'>
                    <MdManageAccounts className='text-[1rem]' />
                    Account
                </li>
                <div className="">
                    <p className='flex items-center gap-1 text-[13px] text-zinc-400 mt-2'>
                        <AiFillSetting />
                        Settings
                    </p>
                    <Link to="/admin/settings/categories" className='flex items-center gap-[6px] text-[13px] font-medium py-[0.75rem] px-[10px] capitalize text-zinc-600'>
                        <MdStackedBarChart className='text-[1rem]' />
                        Categories
                    </Link>
                    <li className='flex items-center gap-[6px] text-[13px] font-medium py-[0.75rem] px-[10px] capitalize text-zinc-600'>
                        <SiBrandfolder className='text-[1rem]' />
                        Brands
                    </li>
                </div>
            </ul>
        </>
    )
}

export default SideBarMenu