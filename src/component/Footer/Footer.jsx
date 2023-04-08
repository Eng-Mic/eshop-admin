import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

export const Footer = () => {
    return (
        <div className="bottom bg-slate-200 mb-8 sm:mb-0 dark:bg-slate-800 dark:text-slate-200">
                <div className="bottom_content w-[90%] mx-auto flex items-center justify-between py-3 md:w-[80%]">
                    <div className="left flex">
                        <FaGithub className='text-[1rem] mr-[10px] sm:mr-2' />
                        <FaLinkedin className='text-[1rem] mr-[10px] sm:mx-2' />
                        <SiUpwork className='text-[1rem] mr-[10px] sm:mx-2' />
                        <BsTwitter className='text-[1rem] mr-[10px] sm:mx-2' />
                    </div>
                    <div className="right">
                        <p className='text-[11px] text-black font-medium sm:text-[12px] dark:text-slate-200'>&copy; e-shop 2023 | mic--dev</p>
                    </div>
                </div>
            </div>
    )
}
