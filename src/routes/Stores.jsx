import React from 'react'
import { BsFillGridFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr';

export const Stores = () => {
    return (
        <div className='Stores relative'>
            {/* Overflow Background */}
            {/* <div className='fixed top-0 left-0 right-0 min-w-[100vw] h-[100%] bg-slate-800 z-10 opacity-20'></div> */}
            
            {/* Header */}
            <div className="head">
                <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                    <div className="flex gap-2 font-medium">
                        <FiHome className='text-slate-700 text-[14px]' /> |
                        <p className='text-slate-700'>Admin Panel</p>
                    </div> |
                    <p>Stores</p>
                </div>
            </div>
            {/* Grid Display and Add New Button */}
            <div className="flex justify-between items-center my-4">
                <h2 className='text-[18px] font-semibold uppercase'>Stores</h2>
                {/* Grid Display and Add New Store Button */}
                <div className="grid_display_add_new_customer_button flex items-center gap-2">
                    <BsFillGridFill />
                    <GoThreeBars />
                    {/* Add New Store Button */}
                    <BsThreeDotsVertical />
                </div>
            </div>
            {/* Stores Container */}
            <div className="stores_container">
                <div className="relative overflow-x-auto">
                    {/* Table Display */}


                    {/* Grid Display */}
                    <div className="grid_display grid grid-cols-5 gap-3 mb-5">
                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>

                        {/* Single Store */}
                        <div className="store bg-white p-[3px] rounded-md relative">
                            {/* Store Actions Button */}
                            <BsThreeDotsVertical className='text-[16px] absolute top-3 right-2 cursor-pointer' />
                            {/* Store Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/vendor_banner.jpg" alt="" />
                            </div>
                            <div className="logo_img w-[3rem] bg-sky-200 rounded-full p-[2px] absolute top-[6rem] left-[15px]">
                                <img src="/assets/vendor.png" alt="" />
                            </div>

                            <div className="text_content mt-[2.5rem] px-2 cursor-pointer">
                                {/* Store Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Florence & Family Enterprise
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination w-[100%] bg-gray-200 py-2 px-3 rounded-sm flex justify-between items-center mt-2 dark:bg-slate-800 dark:text-slate-200">
                        {/* Info */}
                        <p className='bg-zinc-200 py-1.5 px-3 text-[10px] font-medium rounded-sm dark:bg-slate-700'>
                            Showing 12 of 21
                        </p>
                        {/* Pagination Button */}
                        <div className="pagination_container flex gap-2 items-center justify-center">
                            <div className="w-[1.3rem] h-[1.3rem] bg-slate-700 rounded-full text-white flex justify-center items-center dark:bg-sky-800">
                            <p className='text-[10px] font-semibold'>1</p>
                            </div>
                            <div className="w-[1.3rem] h-[1.3rem] bg-slate-700 rounded-full text-white flex justify-center items-center dark:bg-sky-800">
                                <p className='text-[10px] font-semibold'>2</p>
                            </div>
                            <div className="w-[1.3rem] h-[1.3rem] bg-slate-300 rounded-full flex justify-center items-center">
                                <GrFormNext className='text-[15px] font-semibold text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
