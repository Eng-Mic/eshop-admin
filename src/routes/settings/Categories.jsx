import React from 'react'
import SideBarMenu from '../../component/settings/SideBarMenu'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { MdStackedBarChart } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit, AiOutlineUnorderedList } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { HiViewfinderCircle } from "react-icons/hi2";

const Categories = () => {
    return (
        <div className="">
            <h2 className='text-[1.15rem] font-medium'>
                setting
            </h2>
            <div className='mt-[1rem] flex gap-x-[2rem]'>
                <div className="w-[20%] h-fit bg-zinc-200 p-[1rem] rounded-[5px]">
                    <SideBarMenu />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <h2 className='flex items-center gap-x-[5px] text-[1rem] font-medium'>
                            <MdStackedBarChart className='text-[1.1rem]' />
                            Categories
                        </h2>

                        <div className="flex items-center gap-x-[3rem]">
                            <div className='flex items-center gap-x-[2px] w-fit py-[2px] px-[10px] border-[1px] rounded-[20px]'>
                                <BiSearchAlt 
                                    className='text-[1.3rem] lg:text-[1rem]'
                                />
                                <input
                                    type="text"
                                    placeholder='Search category...'
                                    className='w-[18rem] text-[11px] py-[3px] bg-transparent outline-0 border-0 placeholder:italic'
                                />
                                
                            </div>

                            <div className="flex items-center gap-x-[1rem]">
                                <Link to='/admin/settings/categories/newCategory' className='bg-zinc-700 text-white flex items-center justify-center gap-x-[5px] px-[20px] py-[8px] rounded-md text-[14px] md:text-[13px] lg:text-[11px]'>
                                    <FiPlus className='text-[1.1rem]' />
                                    <p>
                                        Add categories
                                    </p>
                                </Link>
                            </div>
                        </div>
                        
                    </div>

                    <div className="mt-[2rem] relative overflow-y-auto rounded-lg">
                        {/* Table */}
                        <table className="w-full text-left">
                            {/* Table Head */}
                            <thead className="w-[100%] text-[13px]">
                                <tr className=''>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Slug
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Stocks
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sales
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        
                                    </th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody className='text-[13px] bg-zinc-100'>
                                {/* Single Order */}
                                <tr className="font-medium border-b-[1px]">
                                    <td className="px-6 py-1 flex items-center gap-x-[5px]">
                                        <div className="w-[5rem] h-[5rem] p-[5px]">
                                            <img src="/assets/p12.png" alt="" className='w-[100%] h-[100%] object-contain' />
                                        </div>
                                        Electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className='line-clamp-1'>
                                            Discover the latest gadgets and tech marvels at unbeatable prices. Embrace the digital lifestyle with cutting-edge electronics and accessories.
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        100
                                    </td>
                                    <td className="px-6 py-4">
                                        $100
                                    </td>
                                    <td className="px-6 py-4">
                                        Visible
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-x-[10px] text-[0.85rem]">
                                            <HiViewfinderCircle />
                                            <AiFillEdit />
                                            <BsFillTrashFill />
                                        </div>
                                    </td>
                                </tr>

                                <tr className="font-medium border-b-[1px]">
                                    <td className="px-6 py-1 flex items-center gap-x-[5px]">
                                        <div className="w-[5rem] h-[5rem] p-[5px]">
                                            <img src="/assets/p12.png" alt="" className='w-[100%] h-[100%] object-contain' />
                                        </div>
                                        Electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className='line-clamp-1'>
                                            Discover the latest gadgets and tech marvels at unbeatable prices. Embrace the digital lifestyle with cutting-edge electronics and accessories.
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        100
                                    </td>
                                    <td className="px-6 py-4">
                                        $100
                                    </td>
                                    <td className="px-6 py-4">
                                        Visible
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-x-[10px] text-[0.85rem]">
                                            <HiViewfinderCircle />
                                            <AiFillEdit />
                                            <BsFillTrashFill />
                                        </div>
                                    </td>
                                </tr>

                                <tr className="font-medium border-b-[1px]">
                                    <td className="px-6 py-1 flex items-center gap-x-[5px]">
                                        <div className="w-[5rem] h-[5rem] p-[5px]">
                                            <img src="/assets/p12.png" alt="" className='w-[100%] h-[100%] object-contain' />
                                        </div>
                                        Electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        electronic
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className='line-clamp-1'>
                                            Discover the latest gadgets and tech marvels at unbeatable prices. Embrace the digital lifestyle with cutting-edge electronics and accessories.
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        100
                                    </td>
                                    <td className="px-6 py-4">
                                        $100
                                    </td>
                                    <td className="px-6 py-4">
                                        Visible
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-x-[10px] text-[0.85rem]">
                                            <HiViewfinderCircle />
                                            <AiFillEdit />
                                            <BsFillTrashFill />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories