import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiHome, FiCalendar } from 'react-icons/fi';
import { HiOutlineUsers, HiReceiptRefund } from 'react-icons/hi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaLuggageCart } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { GiTakeMyMoney, GiStumpRegrowth } from 'react-icons/gi';
import { BsGraphUpArrow, BsGraphDownArrow } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Stars from '../component/Stars';

const data = [
    { name: "Jan", Total: 1200 },
    { name: "Feb", Total: 2100 },
    { name: "Mar", Total: 800 },
    { name: "Apr", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
    { name: "July", Total: 100 },
    { name: "Aug", Total: 1200 },
    { name: "Sept", Total: 1000 },
    { name: "Oct", Total: 100 },
    { name: "Nov", Total: 1900 },
    { name: "Dec", Total: 3000 },
];

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
                <div className="flex justify-between items-end my-4 flex-col md:flex-row">
                    <div className="left">
                        <h2 className='text-[18px] font-semibold uppercase'>Dashboard</h2>
                        <p className='text-[10px] font-medium'>Welcome back, Michael</p>
                    </div>
                    {/* Current date  __| Download btn */}
                    <div className="flex items-center gap-2">
                        <div className="date flex items-center gap-2 border-[1.5px] border-slate-300 py-[5px] px-3 rounded-sm">
                            <FiCalendar className='text-[12px]' />
                            <p className='text-[10px] font-medium'>1 Jan, 2023 - 31 Jan, 2023</p>
                        </div>
                        <BiDotsVerticalRounded />
                    </div>
                </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                {/* Users */}
                <div className="users flex items-center justify-between bg-white py-2 px-2 rounded-md shadow-sm md:py-5 md:px-6">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            <HiOutlineUsers className='text-[20px] md:hidden' />
                            100
                        </h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Customers</p>
                        <p className='text-[9px] text-zinc-400 mt-[3px] flex  items-center gap-2 py-1 md:flex-row md:text-[10px] md:py-0'>
                            <span className='text-green-500 font-semibold text-[9px] flex items-center gap-1 md:text-[11px]'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <HiOutlineUsers className='hidden text-[25px] md:block' />
                </div>

                {/* Stores */}
                <div className="stores flex items-center justify-between bg-white py-2 px-2 rounded-md shadow-sm md:py-5 md:px-6">
                    <div className="">
                        <h2 className='text-[18px] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            <SiHomeassistantcommunitystore className='text-[18px] md:hidden' />
                            100
                        </h2>
                        <p className='text-[10px] font-medium uppercase mt-[2px]'>Total Stores</p>
                        <p className='text-[9px] text-zinc-300 mt-[3px] flex items-center gap-2 py-1 md:flex-row md:text-[10px] md:py-0'>
                            <span className='text-green-500 font-semibold text-[9px] flex items-center gap-1 md:text-[11px]'>
                                <BsGraphUpArrow className='text-green-500 font-bold' />
                                9.0%
                            </span>
                            since last month
                        </p>
                    </div>
                    <SiHomeassistantcommunitystore className='hidden text-[22px] md:block' />
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
                            Total Cancelled
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
            <div className="stats_sales_reports flex gap-3 my-4">
                {/* Today's Sales Report Stats */}
                <div className="today_sale_stats w-[27%] bg-white py-5 px-5 rounded-md shadow-sm">
                    <div className="head flex justify-between items-center mb-5">
                        <h2 className='text-[14px] font-medium '>Today's Sales Report</h2>
                        <BiDotsVerticalRounded />
                    </div>
                    <div className="report">
                        <div className="report_chart flex justify-center items-center">
                            <div className="chart w-[120px] h-[120px]">
                                <CircularProgressbar value={100} text={"100%"} strokeWidth={5} />
                            </div>
                        </div>
                        <div className="report_content">
                            <p className='text-[12px] font-medium text-center mt-3'>
                                Total Today's Revenue
                            </p>
                            <h2 className='text-[20px] font-semibold text-center mb-2'>$1k</h2>
                            <p className='text-[11px] text-zinc-400 text-center'>
                                Previous transactions processing. Last payments may not be included.
                            </p>
                            {/* How today's revenue is generated */}
                            <div className="the_how w-[100%] flex items-center justify-between mt-4">
                                <div className="earning flex flex-col items-center">
                                    <p className='text-[12px] font-medium'>Earning</p>
                                    <h2 className='text-[16px] font-medium'>$1k</h2>
                                </div>
                                <div className="refunds flex flex-col items-center">
                                    <p className='text-[12px] font-medium'>Refunds</p>
                                    <h2 className='text-[16px] font-medium'>0</h2>
                                </div>
                                <div className="cancellation flex flex-col items-center">
                                    <p className='text-[12px] font-medium'>
                                        Cancelled
                                    </p>
                                    <h2 className='text-[16px] font-medium'>0</h2>
                                </div>
                            </div>

                            <div className="compare_stats flex items-center justify-between  mt-4">
                                <div className="target_sale">
                                    <p className='text-[12px] font-medium'>Target</p>
                                    <h2 className='flex items-center gap-2 text-[13px] font-medium text-green-500'>
                                        <BsGraphUpArrow className='text-[10px]' />
                                        $1k
                                    </h2>
                                </div>
                                <div className="last_week">
                                    <p className='text-[12px] font-medium'>Last Week</p>
                                    <h2 className='flex items-center gap-2 text-[13px] font-medium text-red-500'>
                                        <BsGraphDownArrow className='text-[10px]' />
                                        $900
                                    </h2>
                                </div>
                                <div className="last_month">
                                    <p className='text-[12px] font-medium'>Last Month</p>
                                    <h2 className='flex items-center gap-2 text-[13px] font-medium text-green-500'>
                                        <BsGraphUpArrow className='text-[10px]' />
                                        $3k
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Sales Report Stats */}
                <div className="all_revenue_stats w-[73%] bg-white py-4 px-5 rounded-md shadow-sm">
                    <div className="head flex justify-between items-center mb-10">
                        <h2 className='text-[14px] font-medium'>Total Sales Report : <span className='font-semibold'>Monthly</span> </h2>
                        <div className="flex items-center gap-2">
                            <select name="" id="" className='text-[11px] py-[2px] px-3 bg-zinc-100 rounded-md border-[1px] border-slate-200 w-[10rem] outline-none'>
                                <option value="">Weekly</option>
                                <option value="">Monthly</option>
                                <option value="">Yearly</option>
                            </select>
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    {/* Chart */}
                    <ResponsiveContainer width="100%" height="82%">
                        <BarChart width={150} height={80} data={data}>
                            <XAxis dataKey="name" fontSize={13} />
                            <YAxis dataKey='Total' fontSize={13} />
                            <Tooltip />
                            <Bar dataKey="Total" fill="#3e98c7" barSize={20} radius={2} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Data Grids __ Recent Customers, Orders, Stores Creation Requests, Subscriptions */}
            <div className="data_grids">
                {/* Data Grids 1 */}
                <div className="data_grids_1 flex gap-3">
                    {/* Recent Customers */}
                    <div className="recent_customers w-[27.5%] bg-white py-4 px-5 rounded-md shadow-sm">
                        {/* Header */}
                        <div className="head mb-4">
                            <h2 className='text-[14px] font-medium'>Recent Customers</h2>
                        </div>

                        {/* Customer Container */}
                        <div className="customer_container">
                            {/* Single Customer */}
                            <div className="customer flex items-center justify-between my-3">
                                <div className="flex items-center gap-2">
                                    <div className="img w-[2rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/user.png" alt="" />
                                    </div>
                                    <h2 className='text-[12px] font-medium'>Michael L Bangura</h2>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Customer */}
                            <div className="customer flex items-center justify-between my-3">
                                <div className="flex items-center gap-2">
                                    <div className="img w-[2rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/user.png" alt="" />
                                    </div>
                                    <h2 className='text-[12px] font-medium'>Michael L Bangura</h2>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Customer */}
                            <div className="customer flex items-center justify-between my-3">
                                <div className="flex items-center gap-2">
                                    <div className="img w-[2rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/user.png" alt="" />
                                    </div>
                                    <h2 className='text-[12px] font-medium'>Michael L Bangura</h2>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>
                        </div>
                    </div>

                    {/* Top Stores */}
                    <div className="top_stores w-[32.5%] bg-white py-3 px-5 rounded-md shadow-sm">
                        {/* Header */}
                        <div className="head flex items-center justify-between">
                            <h2 className='text-[14px] font-medium'>Top Stores</h2>
                            <select name="" id="" className='text-[12px] bg-zinc-100 rounded-md border-[1px] border-slate-100 py-[3px] pl-3 pr-5 font-medium outline-none'>
                                <option value="">Top Stores</option>
                                <option value="">Struggling Stores</option>
                            </select>
                        </div>

                        {/* Stores Container */}
                        <div className="stores_container mt-4 mb-2">
                            {/* Single Store */}
                            <div className="store flex items-center justify-between my-3">
                                <div className="left flex items-center gap-2">
                                    <div className="store_img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Florence & Sons
                                        </h2>
                                        <p className='text-[10px] text-zinc-500'>
                                            200 Sales
                                        </p> 
                                        <div className="flex items-center gap-2">
                                            <Stars stars={3} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Store */}
                            <div className="store flex items-center justify-between my-3">
                                <div className="left flex items-center gap-2">
                                    <div className="store_img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Florence & Sons
                                        </h2>
                                        <p className='text-[10px] text-zinc-500'>
                                            200 Sales
                                        </p> 
                                        <div className="flex items-center gap-2">
                                            <Stars stars={3} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Store */}
                            <div className="store flex items-center justify-between my-3">
                                <div className="left flex items-center gap-2">
                                    <div className="store_img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Florence & Sons
                                        </h2>
                                        <p className='text-[10px] text-zinc-500'>
                                            200 Sales
                                        </p> 
                                        <div className="flex items-center gap-2">
                                            <Stars stars={3} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>
                        </div>
                    </div>

                    {/* Top Selling Products */}
                    <div className="top_selling w-[40%] bg-white py-4 px-5 rounded-md shadow-sm">
                        {/* Header */}
                        <div className="head mb-3">
                            <h2 className='text-[14px] font-medium'>Top Selling</h2>
                        </div>

                        {/* Products Container */}
                        <div className="product_container">
                            {/* Single Product */}
                            <div className="product flex justify-between items-center my-3">
                                <div className="left flex gap-3 items-center">
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/pp3.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Gray & White Long Sleeve T-Shirt
                                        </h2>
                                        <p className='text-[10px] text-zinc-400'>100 Sales</p>
                                        <div className="flex items-center gap-2">
                                            <Stars stars={4} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Store : </h2>
                                            <p className='text-[11px]'>Florence & Sons</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Product */}
                            <div className="product flex justify-between items-center my-3">
                                <div className="left flex gap-3 items-center">
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/pp3.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Gray & White Long Sleeve T-Shirt
                                        </h2>
                                        <p className='text-[10px] text-zinc-400'>100 Sales</p>
                                        <div className="flex items-center gap-2">
                                            <Stars stars={4} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Store : </h2>
                                            <p className='text-[11px]'>Florence & Sons</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>

                            {/* Single Product */}
                            <div className="product flex justify-between items-center my-3">
                                <div className="left flex gap-3 items-center">
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/pp3.png" alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>
                                            Gray & White Long Sleeve T-Shirt
                                        </h2>
                                        <p className='text-[10px] text-zinc-400'>100 Sales</p>
                                        <div className="flex items-center gap-2">
                                            <Stars stars={4} />
                                            <p className='text-[10px] text-zinc-400'>100 reviews</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Store : </h2>
                                            <p className='text-[11px]'>Florence & Sons</p>
                                        </div>
                                    </div>
                                </div>
                                <BiDotsVerticalRounded />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Grids 2 */}
                <div className="data_grids_2 flex gap-3 mt-4">
                    {/* Recent Store Creation Requests */}
                    <div className="recent_store_creation_requests w-[33%] bg-white py-4 px-5 rounded-md shadow-sm">
                        {/* Header */}
                        <div className="head mb-4">
                            <h2 className='text-[14px] font-medium'>Recent Store Requests</h2>
                        </div>

                        {/* Tabs : All Request, Approved Request, Subscribed Stores */}
                        <div className="tabs flex items-center mb-4">
                            <p className='text-[11px] py-[4px] px-3 rounded-l-sm bg-slate-600 text-white border-l-4 border-amber-500 font-medium'>
                                All Requests
                            </p>
                            <p className='text-[11px] py-[4px] px-3 rounded-sm bg-zinc-100'>
                                Approved
                            </p>
                            <p className='text-[11px] py-[4px] px-3 rounded-r-sm bg-zinc-100'>
                                Subscribed
                            </p>
                        </div>

                        {/* The Requests Container */}
                        <div className="request_container">
                            {/* Single Request */}
                            <div className="request flex items-center justify-between mb-3">
                                {/* Request Content */}
                                <div className="left flex items-center gap-2">
                                    {/* Content Image */}
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    {/* Content Text */}
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>Amazon Products</h2>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Status: </h2>
                                            <p className='text-[11px] text-green-500'>Approved & Subscribed</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Action Btn */}
                                <BiDotsVerticalRounded />
                            </div>

                             {/* Single Request */}
                            <div className="request flex items-center justify-between mb-3">
                                {/* Request Content */}
                                <div className="left flex items-center gap-2">
                                    {/* Content Image */}
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    {/* Content Text */}
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>Amazon Products</h2>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Status: </h2>
                                            <p className='text-[11px] text-green-600'>Approved & <span className='text-red-600'>Unsubscribed</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Action Btn */}
                                <BiDotsVerticalRounded />
                            </div>

                             {/* Single Request */}
                            <div className="request flex items-center justify-between mb-3">
                                {/* Request Content */}
                                <div className="left flex items-center gap-2">
                                    {/* Content Image */}
                                    <div className="img w-[2.5rem] bg-zinc-200 rounded-md p-[2px]">
                                        <img src="/assets/vendor.png" alt="" />
                                    </div>
                                    {/* Content Text */}
                                    <div className="">
                                        <h2 className='text-[12px] font-medium'>Amazon Products</h2>
                                        <div className="flex items-center gap-2">
                                            <h2 className='text-[11px] font-medium'>Status: </h2>
                                            <p className='text-[11px] text-red-600'>Unapproved & <span className='text-red-600'>Unsubscribed</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Action Btn */}
                                <BiDotsVerticalRounded />
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="recent_orders w-[70%] bg-white py-4 px-5 rounded-md shadow-sm">
                        <div className="head mb-4">
                            <h2 className='text-[14px] font-medium'>Recent Orders</h2>
                        </div>
                        {/* Tabs : All Orders, Processing, Completed, Cancelled */}
                        <div className="tabs flex items-center mb-4">
                            <p className='text-[11px] py-[4px] px-3 rounded-l-sm bg-slate-600 text-white border-l-4 border-amber-500 font-medium'>
                                All Orders
                            </p>
                            <p className='text-[11px] py-[4px] px-3 rounded-sm bg-zinc-100'>
                                Processing
                            </p>
                            <p className='text-[11px] py-[4px] px-3 rounded-r-sm bg-zinc-100'>
                                Completed
                            </p>
                            <p className='text-[11px] py-[4px] px-3 rounded-r-sm bg-zinc-100'>
                                Cancelled
                            </p>
                        </div>

                        <div className="order_container"> 
                            {/* Orders Table Container */}
                            <div className="relative overflow-x-auto">
                                {/* Table */}
                                <table className="w-full text-[11px] text-left text-gray-500 dark:text-gray-400">
                                    {/* Table Head */}
                                    <thead className="text-[11px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Order ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* Table Body */}
                                    <tbody className='text-[12px]'>
                                        {/* Single Order */}
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                12345678910...
                                            </th>
                                            <td className="px-6 py-4">
                                                01 Jan, 2023
                                            </td>
                                            <td className="px-6 py-4 text-green-500 font-medium">
                                                Completed
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                        </tr>
                                        
                                        {/* Single Order */}
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                12345678910...
                                            </th>
                                            <td className="px-6 py-4">
                                                01 Jan, 2023
                                            </td>
                                            <td className="px-6 py-4 text-amber-600 font-medium">
                                                Processing
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                        </tr>

                                        {/* Single Order */}
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                12345678910...
                                            </th>
                                            <td className="px-6 py-4">
                                                01 Jan, 2023
                                            </td>
                                            <td className="px-6 py-4 text-red-600 font-medium">
                                                Cancelled
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
