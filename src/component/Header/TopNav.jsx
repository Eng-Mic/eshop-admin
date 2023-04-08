import React from 'react'
import { CgMenuHotdog } from 'react-icons/cg'
import { BiSearch, BiCaretDown } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { BsSunFill, BsBellFill } from 'react-icons/bs'


export const TopNav = () => {
    return (
        <div className='w-[100%] bg-slate-200 py-3 px-4 shadow-sm flex items-center border-b-2 border-slate-200'>
            <div className="left w-[16%]">
                <div className="head flex items-center justify-between gap-2">
                    <h2 className='text-[1.1rem] font-semibold'>e-shop.</h2>
                    <CgMenuHotdog className='text-[18px]' />
                </div>
            </div>
            <div className="right w-[100%] flex justify-between items-center px-4">
                <div className="search w-[73%] flex items-center ml-[1.5rem] relative">
                    <BiSearch className='absolute left-2' />
                    <input type="text" placeholder='Search...' className='py-[7px] pl-7 rounded-md text-[12px] w-[100%] bg-zinc-50 border-[1px] border-slate-200' />
                </div>
                <div className="right_right flex items-center gap-4">
                    <div className="mail">
                        <MdEmail className='text-[14px]' />
                    </div>
                    <div className="notification">
                        <BsBellFill className='text-[14px]' />
                    </div>
                    <div className="current_admin flex items-center gap-1">
                        <div className="admin_img w-[1.5rem] border-2 border-slate-300 rounded-full">
                            <img src="/assets/user.png" alt="" />
                        </div>
                        <h2 className='flex items-center gap-1 text-[11px] font-medium'>
                            Michael L Bangura
                            <BiCaretDown className='text-[13px]' />
                        </h2>
                    </div>
                    <div className="theme">
                        <BsSunFill className='text-[14px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
