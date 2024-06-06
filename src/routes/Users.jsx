import React, { useState } from 'react'
import { BsFillGridFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
// import { GoThreeBars } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr';

export const Users = () => {
    const [newUser, setNewUser] = useState(false)
    return (
        <div className='Users relative'>
            {/* Overflow Background */}
            {/* <div className='fixed top-0 left-0 right-0 min-w-[100vw] h-[100%] bg-slate-800 z-10 opacity-20'></div> */}
            
            {/* Header */}
            <div className="head">
                <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                    <div className="flex gap-2 font-medium">
                        <FiHome className='text-slate-700 text-[14px]' /> |
                        <p className='text-slate-700'>Admin Panel</p>
                    </div> |
                    <p>Customers</p>
                </div>
            </div>
            {/* Grid Display and Add New Button */}
            <div className="flex justify-between items-center my-4">
                <h2 className='text-[18px] font-semibold uppercase'>Customers</h2>
                {/* Grid Display and Add New Customer Button */}
                <div className="grid_display_add_new_customer_button flex items-center gap-2">
                    <BsFillGridFill />
                    {/* <GoThreeBars /> */}
                    {/* Add New Customer | User Button */}
                    <BsThreeDotsVertical />
                </div>
            </div>
            {/* Customer Container */}
            <div className="customer_container">
                <div className="relative overflow-x-auto">
                    
                    <div className="grid_display grid grid-cols-6 gap-3 mb-5">
                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Customer */}
                        <div className="customer bg-white p-[3px] rounded-md relative">
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/user.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                <h2 className='text-[12px] font-medium my-1'>Michael L Bangura</h2>
                                <div className="stat flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Status : </h2>
                                    <p className='text-[11px]'>Admin</p>
                                </div>
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

            {/* Add New Customer Form */}
            {newUser && (
                <div className="add_new_customer_form w-[40%] absolute top-[-3rem] left-0 right-0 mx-auto bg-white p-6 rounded-md shadow-sm z-20">
                <div className='head'>
                    <h2 className='text-[13px] font-medium mb-4'>Add New Customer | User</h2>
                    {/* Customer | user Image */}
                    <div className="img w-[8rem] mx-auto bg-gray-200 p-[3px] rounded-md">
                        <img src="/assets/user.png" alt="" />
                    </div>
                </div>
                {/* Form Inputs */}
                <div className="inputs w-[100%] mt-6 mb-3">
                    {/* First Name, Last Name */}
                    <div className="form_groups w-[100%] flex items-center gap-4 my-4">
                        {/* First Name */}
                        <div className="w-[100%] first_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>First Name:</label>
                            <input type="text" placeholder='Enter first name' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        {/* Last Name */}
                        <div className="w-[100%] last_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Last Name:</label>
                            <input type="text" placeholder='Enter last name' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                    </div>

                    {/* Email, Phone Number */}
                    <div className="form_groups w-[100%] flex items-center gap-4 my-4">
                        {/* Email */}
                        <div className="w-[100%] first_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Email:</label>
                            <input type="text" placeholder='Enter  email' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        {/* Phone Number */}
                        <div className="w-[100%] last_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Phone Number:</label>
                            <input type="text" placeholder='Enter phone Number' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                    </div>

                     {/* Date of Birth, Gender */}
                    <div className="form_groups w-[100%] flex items-center gap-4 my-4">
                        {/* Date Of Birth */}
                        <div className="w-[100%] first_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Date Of Birth:</label>
                            <input type="text" placeholder='Enter date of birth' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        {/* Gender */}
                        <div className="w-[100%] last_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Gender:</label>
                            <select name="" id="" className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none'>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">I'am Ok</option>
                            </select>
                        </div>
                    </div>

                     {/* Address, Status Assign */}
                    <div className="form_groups w-[100%] flex items-center gap-4 my-4">
                        {/* Address */}
                        <div className="w-[100%] last_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Address:</label>
                            <select name="" id="" className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none'>
                                <option value="">Sierra Leone</option>
                                <option value="">Ghana</option>
                                <option value="">Nigeria</option>
                            </select>
                        </div>
                        {/* Status Assign */}
                        <div className="w-[100%] last_Name flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Status Assign:</label>
                            <select name="" id="" className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none'>
                                <option value="">Customer | User</option>
                                <option value="">Vendor</option>
                                <option value="">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="button flex items-center justify-end gap-3 mt-[1rem]">
                    <button className='text-[12px] bg-red-800 text-white py-[4px] px-[10px] rounded-sm outline-none'>Cancel</button>
                    <button className='text-[12px] bg-slate-700 text-white py-[4px] px-[12px] rounded-sm outline-none'>Save</button>
                </div>
                </div>
            )}
            
        </div>
    )
}
