import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { BsFillGridFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegImages } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr';

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            // { indent: "-1" },
            // { indent: "+1" }
        ],
        ["link"]
    ]
}

export const Products = () => {
    const [newProduct, setNewProduct] = useState(false);
    const [value, setValue] = useState('');
    return (
        <div className='Products relative'>
            {/* Overflow Background */}
            {/* <div className='fixed top-0 left-0 right-0 min-w-[100vw] h-[100%] bg-slate-800 z-10 opacity-20'></div> */}
            
            {/* Header */}
            <div className="head">
                <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                    <div className="flex gap-2 font-medium">
                        <FiHome className='text-slate-700 text-[14px]' /> |
                        <p className='text-slate-700'>Admin Panel</p>
                    </div> |
                    <p>Products</p>
                </div>
            </div>
            {/* Grid Display and Add New Button */}
            <div className="flex justify-between items-center my-4">
                <h2 className='text-[18px] font-semibold uppercase'>Products</h2>
                {/* Grid Display and Add New Product Button */}
                <div className="grid_display_add_new_customer_button flex items-center gap-2">
                    <BsFillGridFill />
                    <GoThreeBars />
                    {/* Add New Product | Product Button */}
                    <BsThreeDotsVertical />
                </div>
            </div>
            {/* Products Container */}
            <div className="products_container">
                <div className="relative overflow-x-auto">
                    {/* Table Display */}


                    {/* Grid Display */}
                    <div className="grid_display grid grid-cols-5 gap-3 mb-5">
                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>
                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Product */}
                        <div className="product bg-white p-[3px] rounded-md relative">
                            {/* Product Actions Button */}
                            <BsThreeDotsVertical className='absolute top-3 right-2 cursor-pointer' />
                            {/* Product Image */}
                            <div className="img w-[100%] bg-gray-200 rounded-md">
                                <img src="/assets/p12.png" alt="" />
                            </div>
                            <div className="text_content my-2 px-2 cursor-pointer">
                                {/* Product Name */}
                                <h2 className='text-[12px] font-medium my-1'>
                                    Cannon High Res Black Camera
                                </h2>
                                {/* Product Price */}
                                <div className="price flex items-center gap-2">
                                    <h2 className='text-[11px] font-medium'>Price : </h2>
                                    <p className='text-[11px] font-medium'>$100</p>
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

            {/* Add New Product Form */}
            {newProduct && (
                <div className="create_new_product w-[40%] absolute top-[-3rem] left-0 right-0 mx-auto bg-white p-6 rounded-md shadow-sm z-20">
                <div className="head">
                    <h2 className='text-[13px] font-medium mb-4'>Create New Product</h2>
                </div>

                {/* Add New Product Form */}
                <div className="new_product">
                    {/* Product Name */}
                    <div className="form_group flex flex-col">
                        <label htmlFor="" className='text-[12px] mb-2'>Product Name:</label>
                        <input type="text" placeholder='Enter product name' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                    </div>

                    {/* Product Images, Category, Quantity, Price */}
                    <div className="my-4">
                        {/* Images Container */}
                        <div className="product_images_container">
                            <label htmlFor="" className='text-[12px] mb-3'>Product Images:</label>
                            <div className="images_container flex gap-1 mt-2">
                                {/* Main Image */}
                                <div className="main_img w-[10.8rem] bg-gray-100 p-[2px] rounded-md flex justify-center items-center">
                                    <img src="/assets/p12.png" alt="" />
                                </div>
                                {/* Other Images */}
                                <div className="others_img grid grid-cols-2 gap-1">
                                    {/* Second Img */}
                                    <div className="img w-[6rem] bg-gray-100 p-[2px] rounded-md flex justify-center items-center">
                                        <img src="/assets/pp1.png" alt="" />
                                    </div>
                                    {/* Third Img */}
                                    <div className="img w-[6rem] bg-gray-100 p-[2px] rounded-md flex justify-center items-center">
                                        <img src="/assets/p6.png" alt="" />
                                    </div>
                                    {/* Fourth Img */}
                                    <div className="img w-[6rem] bg-gray-100 p-[2px] rounded-md flex justify-center items-center">
                                        <img src="/assets/pp12.png" alt="" />
                                    </div>
                                    {/* Upload Button */}
                                    <p className="w-[6rem] h-[7rem] bg-gray-100 p-[2px] text-[10px] rounded-md flex flex-col justify-center items-center">
                                        <FaRegImages className='text-[14px] mb-2' />
                                        <span className='text-blue-600'>click to upload </span> or drag & drop
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Product Description */}
                    <div className="product_description w-[100%]">
                        <label htmlFor="" className='text-[12px] mb-2'>Product Description:</label>
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            modules={modules}
                            className='rounded-md'
                        />
                    </div>

                    {/* Product Properties, Quantity, Brand, Price, Category */}
                    <div className="my-2 grid grid-cols-2 gap-2">
                        {/* Product Category */}
                        <div className="category flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Category:</label>
                            <select name="" id="" className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none'>
                                <option value="">Electronic</option>
                                <option value="">Health & HouseHold</option>
                            </select>
                        </div>
                        {/* Product Quantities */}
                        <div className="quantity flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Quantity:</label>
                            <input type="text" placeholder='Enter product quantities' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        {/* Product Price */}
                        <div className="price flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Price:</label>
                            <input type="text" placeholder='Enter product price' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        {/* Product Brand */}
                        <div className="brand flex flex-col">
                            <label htmlFor="" className='text-[12px] mb-2'>Brand:</label>
                            <input type="text" placeholder='Enter product brand' className='text-[12px] py-[4px] px-3 bg-gray-100 border-0 rounded-sm outline-none' />
                        </div>
                        
                    </div>
                    
                    {/* Product Buttons */}
                    <div className="buttons flex items-center justify-end gap-3 mt-[1rem]">
                        <button className='text-[12px] bg-red-800 text-white py-[4px] px-[10px] rounded-sm outline-none'>
                            Cancel
                        </button>
                        <button className='text-[12px] bg-slate-700 text-white py-[4px] px-[12px] rounded-sm outline-none'>
                            Save
                        </button>
                    </div>
                </div>
                </div>
            )}
            
        </div>
    )
}
