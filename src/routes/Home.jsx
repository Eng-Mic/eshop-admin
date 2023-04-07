import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiHome, FiCalendar } from 'react-icons/fi';
import { HiOutlineUsers, HiReceiptRefund } from 'react-icons/hi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaLuggageCart } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { GiTakeMyMoney, GiStumpRegrowth } from 'react-icons/gi';
import { BsGraphUpArrow } from 'react-icons/bs';

export const Home = () => {
    return (
        <div className='w-[100%]'>
            {/* Head */}
            <div className="head">
                <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                    <div className="flex gap-2 font-medium">
                        <FiHome className='text-slate-700 text-[14px]' /> |
                        <p className='text-slate-700'>Admin Panel</p>
                    </div> |
                    <p>Dashboard</p>
                </div>
                <div className="flex justify-between items-end my-4">
                    <div className="left">
                        <h2 className='text-[18px] font-semibold uppercase'>Dashboard</h2>
                        <p className='text-[10px] font-medium'>Welcome back, Michael</p>
                    </div>
                    <div className="date flex items-center gap-2 border-[1.5px] border-slate-300 py-[5px] px-3 rounded-sm">
                        <FiCalendar className='text-[12px]' />
                        <p className='text-[10px] font-medium'>1 Jan, 2023 - 31 Jan, 2023</p>
                    </div>
                </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
                {/* Users */}
                <div className="users flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Customers</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <HiOutlineUsers className='text-[25px]' />
                </div>

                {/* Stores */}
                <div className="stores flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Stores</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <SiHomeassistantcommunitystore className='text-[22px]' />
                </div>

                {/* Orders */}
                <div className="orders flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Orders</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <FaLuggageCart className='text-[22px]' />
                </div>

                {/* Earning */}
                <div className="earning flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>$100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Earning</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <GrMoney className='text-[22px]' />
                </div>

                {/* Refunds | Returns */}
                <div className="refunds flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Refunds</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <HiReceiptRefund className='text-[22px]' />
                </div>

                {/* Cancellation */}
                <div className="cancellation flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>
                            Total Cancellation
                        </p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <MdOutlineCancel className='text-[22px]' />
                </div>

                {/* Revenue */}
                <div className="total_revenue flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>$100</h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Revenues</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <GiTakeMyMoney className='text-[22px]' />
                </div>

                {/* Growth */}
                <div className="growth flex items-center justify-between bg-white py-5 px-6 rounded-md shadow-sm">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3'>12.9%</h2>
                        <p className='text-[10px] font-medium uppercase mt-[3px]'>Growth</p>
                        <p className='text-[10px] text-zinc-300 mt-[3px] flex items-center gap-2'>
                            <span className='text-green-500 font-semibold text-[11px] flex items-center gap-1'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <GiStumpRegrowth className='text-[22px]' />
                </div>
            </div>

            {/* Stats Graphs */}
            <div className="stats_sales_reports flex">
                <div className="today_sale_stats">
                    <div className="head">
                        <h2 className='text-[16px] '>Today's Sales Report</h2>
                    </div>
                    <div className="report_chart">
                        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                    </div>
                </div>
                <div className="all_revenue_stats"></div>
            </div>
            {/* Data Grids __ Recent Customers, Orders, Stores Creation Requests, Subscriptions */}
            <div className="data_grids"></div>
        </div>
    )
}
