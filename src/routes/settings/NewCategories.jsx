import React, { useState } from 'react'
import { MdStackedBarChart } from 'react-icons/md'
import SideBarMenu from '../../component/settings/SideBarMenu'
import { IoMdSave } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { HiTrash } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import useImageUploadStore from '../../Store/Upload/uploadStore'
import { LuImagePlus } from "react-icons/lu";


const NewCategories = () => {
    const [categoryData, setCategoryData] = useState({})
    const [mainFilterOptions, setMainFilterOptions] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [mainFilterName, setMainFilterName] = useState('');
    const [mainFilterOption, setMainFilterOption] = useState('');

    const [subCatName, setSubCatName] = useState('');
    const [subCatInfo, setSubCatInfo] = useState('');

    const [subCatFilterName, setSubCatFilterName] = useState('');
    const [subCatFilterOptions, setSubCatFilterOptions] = useState([]);
    
    const [editMainFilterIndex, setEditMainFilterIndex] = useState(-1);
    const [editSubCatIndex, setEditSubCatIndex] = useState(-1);
    const [editSubCatFilterIndex, setEditSubCatFilterIndex] = useState(-1);

    const [subCatFilterForm, setSubCatFilterForm] = useState(-1);

    const { uploadImages, images } = useImageUploadStore();

    console.log(images);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAdd = (key, index) => {
        if (key === 'mainFilter') {
            const alreadyExist = mainFilterOptions.some((filterOption) => filterOption?.name === mainFilterName);
            if (!alreadyExist) {
                const newMainFilterOptions = {
                    name: mainFilterName.trim(),
                    options: mainFilterOption.split(', ').map(option => option.trim())
                }
                setMainFilterOptions((preMainFilterOptions) => [...preMainFilterOptions, newMainFilterOptions]);
            }

        }
        else if (key === 'subCat') {
            const alreadyExist = subCategories.some((subCat) => subCat?.name === subCatName);
            if (!alreadyExist) {
                const newSubCats = {
                    name: subCatName.trim(),
                    info: subCatInfo.trim()
                }
                setSubCategories((preSubCats) => [...preSubCats, newSubCats]);
            }
        }
        else {
            const targetSubCat = subCategories[index];
            // console.log(targetSubCat);

            // Ensure the target subCategory exists and has a filterOptions array
            if (targetSubCat) {
                // If filterOptions array doesn't exist, initialize it
                if (!targetSubCat.filterOptions) {
                    targetSubCat.filterOptions = [];
                    // console.log(targetSubCat);
                }

                // Check if the filter option with the same name already exists
                const alreadyExist = targetSubCat.filterOptions.some((filterOption) => filterOption?.name === subCatFilterName);

                if (!alreadyExist) {
                    const newSubCatFilterOptions = {
                        // id: 1, // You can generate a unique ID as needed
                        name: subCatFilterName.trim(),
                        options: subCatFilterOptions.split(',').map(option => option.trim())
                    };

                    // Push the new filter option into the filterOptions array of the target subCategory
                    targetSubCat.filterOptions.push(newSubCatFilterOptions);

                    // Update the state with the modified subCategories array
                    setSubCategories([...subCategories]); // Trigger state update by creating a new array reference

                    // console.log(targetSubCat);
                    // console.log(subCategories);
                }
            }
        }

        // Reset the following state variables
        setMainFilterName('');
        setMainFilterOption('')
        setSubCatName('')
        setSubCatInfo('')
        setSubCatFilterName('')
        setSubCatFilterOptions('')
        setSubCatFilterForm(-1);
    }

    const handleUpdate = (key, parentIndex, index) => {
        if (key === 'mainFilter') {
            const filterToUpdate = mainFilterOptions[index];
            setMainFilterName(filterToUpdate.name);
            setMainFilterOption(filterToUpdate.options.join(', '));
            setEditMainFilterIndex(index);
        }
        else if (key === 'subCat') {
            const filterToUpdate = subCategories[index];
            setSubCatName(filterToUpdate.name);
            setSubCatInfo(filterToUpdate.info);
            setEditSubCatIndex(index);
        } 
        else {
            setSubCatFilterForm(parentIndex);
            const filterToUpdate = subCategories[parentIndex].filterOptions[index];
            setSubCatFilterName(filterToUpdate.name);
            setSubCatFilterOptions(filterToUpdate.options.join(', '));
            setEditSubCatFilterIndex(index);
        }

    }

    const saveChanges = (key, parentIndex) => {
        if (key === 'mainFilter') {
            const updatedOptions = [...mainFilterOptions];
            updatedOptions[editMainFilterIndex] = {
                name: mainFilterName,
                options: mainFilterOption.split(',').map(option => option.trim())
            };
            setMainFilterOptions(updatedOptions);
            setMainFilterName('');
            setMainFilterOption('');
            setEditMainFilterIndex(-1); // Reset editIndex after saving changes
        }
        else if (key === 'subCat') { 
            const updatedOptions = [...subCategories];
            updatedOptions[editSubCatIndex] = {
                name: subCatName.trim(),
                info: subCatInfo.trim()
            };
            setSubCategories(updatedOptions);
            setSubCatName('');
            setSubCatInfo('');
            setEditSubCatIndex(-1); // Reset editIndex after saving changes
        }
        else {
            const updatedOptions = [...subCategories];
            updatedOptions[parentIndex].filterOptions[editSubCatFilterIndex] = {
                name: subCatFilterName,
                options: subCatFilterOptions.split(',').map(option => option.trim())
            };
            setSubCategories(updatedOptions);
            setSubCatFilterName('');
            setSubCatFilterOptions('');
            setEditSubCatFilterIndex(-1); // Reset editIndex after saving changes
            setSubCatFilterForm(-1);
        }
        

       
    }

    const handleRemove = (key, index, parentIndex) => {
        if (key === 'mainFilter') {
            const updateMainFilterOptions = [...mainFilterOptions];
            updateMainFilterOptions.splice(index, 1);

            setMainFilterOptions(updateMainFilterOptions);
        }
        else if (key === 'subCat') {
            const updateSubCategories = [...subCategories];
            updateSubCategories.splice(parentIndex, 1);
            setSubCategories(updateSubCategories);
        }
        else {
            const updateSubCategories = [...subCategories];
            updateSubCategories[parentIndex].filterOptions.splice(index, 1);
            setSubCategories(updateSubCategories);
        }
    }

    const handleDrop = async (event) => {
        const file = event.target.files[0]; // Get the first file from the input element
        // Send the file to the uploadImages store
        await uploadImages(file); // Pass the file as an array
    };
   
    const categoryImages = [];
    images.forEach((i) => {
        categoryImages.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    const handleSaveCategory = (e) => {
        e.preventDefault();
        const newCategory = {
            ...categoryData,
            images: categoryImages,
            subCategories,
            filterOptions: mainFilterOptions
        }

        console.log(newCategory);
    }

    // console.log(mainFilterOptions);

    return (
        <div className="">
            <h2 className='text-[1.15rem] font-medium'>
                setting
            </h2>
            <div className='mt-[1rem] flex gap-x-[1.5rem]'>
                <div className="w-[20%] h-fit bg-zinc-100 p-[1rem] rounded-[5px]">
                    <SideBarMenu />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-[5px]">
                            <Link to='/admin/settings/categories' className='flex items-center gap-x-[5px] text-[13px] font-medium text-zinc-400'>
                                <MdStackedBarChart className='text-[14px]' />
                                Categories
                            </Link>
                            <div className="w-[1.5px] h-[1rem] bg-zinc-500" />
                            <h2 className='text-[14px] font-medium'>
                                New Category
                            </h2>
                        </div>
                        <button
                            onClick={handleSaveCategory}
                            className='bg-zinc-700 text-white flex items-center justify-center gap-x-[5px] px-[20px] py-[8px] rounded-md text-[14px] md:text-[13px] lg:text-[11px]'
                        >
                            <IoMdSave className='text-[1.1rem]' />
                            <p>
                                Save category
                            </p>
                        </button> 
                    </div>

                    <div className="mt-[2rem]">
                        <form action="" className='flex gap-[2rem]' onSubmit={handleSaveCategory}>
                            <div className="w-[50%] space-y-[25px]">
                                <div className="">
                                    <h3 className='text-[13px] font-medium mb-[10px]'>
                                        Category Images
                                    </h3>
                                    <div className="bg-zinc-100 rounded-[5px] border-[1px] border-dashed border-zinc-600 flex flex-col p-[10px] items-center justify-center gap-[10px]">
                                        <div className="grid grid-cols-3 gap-[5px] h-[8rem]">
                                            {/* {images.map((file, index) => (
                                                <div key={index} className="border-[1px] border-dashed border-zinc-600 rounded-[5px]">
                                                    <img src={file.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))} */}
                                        </div>
                                        <div className="">
                                            <label htmlFor="categoryImage" className='text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-500 rounded-[5px]'>
                                                <LuImagePlus />
                                                select image
                                                <input
                                                    type="file"
                                                    id="categoryImage"
                                                    name="categoryImage"
                                                    className="hidden"
                                                    onChange={handleDrop}
                                                    accept="image/*"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-[10px]">
                                    <label
                                        htmlFor="categoryName"
                                        className='text-[13px] font-medium'
                                    >
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        id='categoryName'
                                        name='categoryName'
                                        placeholder='eg. Electronic'
                                        value={categoryData?.categoryName}
                                        onChange={handleChange}
                                        className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent  capitalized placeholder:italic'
                                    />
                                </div>

                                <div className="flex flex-col gap-y-[10px]">
                                    <label
                                        htmlFor="info1"
                                        className='text-[13px] font-medium'
                                    >
                                        Info 1 (short description for users)
                                    </label>
                                    <textarea
                                        name="info1"
                                        id="info1" rows="5"
                                        value={categoryData?.info1}
                                        onChange={handleChange}
                                        className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent  placeholder:italic'
                                    ></textarea>
                                </div>

                                <div className="flex flex-col gap-y-[10px]">
                                    <label
                                        htmlFor="info2"
                                        className='text-[13px] font-medium'
                                    >
                                        Info 2 (short description for vendors)
                                    </label>
                                    <textarea
                                        name="info2"
                                        id="info2" rows="5"
                                        value={categoryData?.info2}
                                        onChange={handleChange}
                                        className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent  placeholder:italic'
                                    ></textarea>
                                </div>

                                {/* Category Main FIlter Options */}
                                <div className="w-[100%] flex items-center gap-x-[1rem]">
                                    <div className="form-group w-[100%] flex flex-col my-3">
                                        <h2
                                            className='text-[15px] font-medium mb-3'>
                                            Filter Options (You can add more than one):
                                        </h2>
                                        <div className="space-y-[20px]">
                                            <div className="flex flex-col gap-y-[10px]">
                                                <label
                                                    htmlFor="filterName"
                                                    className='text-[13px] font-medium'
                                                >
                                                    Filter Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id='filterName'
                                                    name='filterName'
                                                    placeholder='eg. brand'
                                                    value={mainFilterName}
                                                    onChange={(e) => setMainFilterName(e.target.value)}
                                                    className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent capitalized placeholder:italic outline-0'
                                                />
                                            </div>

                                            <div className="flex flex-col gap-y-[10px]">
                                                <label
                                                    htmlFor="filterOptions"
                                                    className='text-[13px] font-medium'
                                                >
                                                    Options (must be comma (, ) separated value)
                                                </label>
                                                <input
                                                    type="text"
                                                    id='filterOptions'
                                                    name='filterOptions'
                                                    placeholder='eg. Apple, HP'
                                                    value={mainFilterOption}
                                                    onChange={(e) => setMainFilterOption(e.target.value)}
                                                    className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent capitalized placeholder:italic outline-0'
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type='button'
                                            onClick={
                                                () => editMainFilterIndex === -1 ? handleAdd('mainFilter', '') : saveChanges('mainFilter', '')
                                            }
                                            className='w-[100%] text-[11px] bg-zinc-600 text-white rounded-[5px] py-[7px] font-medium mt-[15px]'
                                        >
                                            {editMainFilterIndex === -1 ? 'Add Filter Option' : 'Save Changes'}
                                        </button>
                                        {/* Output */}
                                        {mainFilterOptions?.length > 0 ? (
                                            <div className="output my-[1rem] bg-zinc-100 p-[1rem] rounded-[5px] border-[1px] border-blue-500">
                                                {/* {mainFilterOptions?.map((option, index) => ( */}
                                                <div className="" /*key = { index }*/>
                                                    <h2 className='text-[14px] font-medium border-b-[1px] pb-[5px] mb-[10px]'>
                                                        Filter Options
                                                    </h2>
                                                    <div className="space-y-[20px]">
                                                        {mainFilterOptions?.map((mainFilterOption, index) => {
                                                            const { name, options } = mainFilterOption
                                                            return (
                                                                <div className="space-y-[10px] border-b-[1px] pb-[10px] mb-1" key={index}>
                                                                    {/* Filter name */}
                                                                    <div className="flex items-center justify-between">
                                                                        <h3 className='flex  items-center gap-[5px] text-[13.5px] font-medium capitalize'>
                                                                            Name :
                                                                            <span className='text-[13px] font-normal capitalized'>
                                                                                {name}
                                                                            </span>
                                                                        </h3>
                                                                        <div className="flex items-center gap-[10px]">
                                                                            <AiFillEdit
                                                                                onClick={
                                                                                    () => handleUpdate('mainFilter', '', index)
                                                                                }
                                                                                className='cursor-pointer'
                                                                            />
                                                                            <HiTrash
                                                                                onClick={
                                                                                    () => handleRemove('mainFilter', index, '')
                                                                                }
                                                                                className='cursor-pointer'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    {/* Options */}
                                                                    <div className="">
                                                                        <h2 className='text-[13.5px] font-medium mb-[5px]'>
                                                                            Options :
                                                                        </h2>
                                                                        
                                                                        <div className="flex flex-wrap items-start gap-x-[20px] gap-y-[10px] pl-[1rem] text-[13px] capitalized">
                                                                            {options?.map((option, index) => (
                                                                                <p key={index}>
                                                                                    {option}
                                                                                </p>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                        
                                                    </div>
                                                </div>
                                                {/* ))} */}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            {/* Sub-Category and  FIlter Options */}
                            <div className="w-[50%]">
                                <div className="w-[100%] flex items-center gap-x-[1rem]">
                                    <div className="form-group w-[100%] flex flex-col my-3">
                                        <h2
                                            className='text-[15px] font-medium mb-[15px] flex flex-col gap-y-[5px]'
                                        >
                                            Sub-categories :
                                            <span className='text-[12px] text-zinc-500'>
                                                (You can add more than one)
                                            </span>
                                        </h2>

                                        <div className="space-y-[20px]">
                                            <div className="flex flex-col gap-y-[10px]">
                                                <label
                                                    htmlFor="subCatFilterName"
                                                    className='text-[13px] font-medium'
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id='subCatFilterName'
                                                    name='subCatFilterName'
                                                    placeholder='eg. Smartphones & Accessories'
                                                    value={subCatName}
                                                    onChange={(e) => setSubCatName(e.target.value)}
                                                    className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent  placeholder:italic outline-0 capitalize'
                                                />
                                            </div>

                                            <div className="flex flex-col gap-y-[10px]">
                                                <label
                                                    htmlFor="subCatFilterInfo"
                                                    className='text-[13px] font-medium'
                                                >
                                                    Info (short description)
                                                </label>
                                                <textarea
                                                    name="subCatFilterName"
                                                    id="subCatFilterName" rows="5"
                                                    value={subCatInfo}
                                                    onChange={(e) => setSubCatInfo(e.target.value)}
                                                    className='w-[100%] text-[11px] py-[5px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent  placeholder:italic'
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button
                                            type='button'
                                            onClick={
                                                () => editSubCatIndex === -1 ? handleAdd('subCat', '') : saveChanges('subCat', '')
                                            }
                                            className='w-[100%] text-[11px] bg-zinc-500 text-white rounded-[5px] py-[7px] font-medium mt-[15px]'
                                        >
                                            {editSubCatIndex === -1 ? 'Add sub-category' : 'Save Changes'}
                                        </button>
                                        {/* Output */}
                                        {subCategories?.length > 0 ? (
                                            <div className="output my-[1rem] bg-zinc-100 p-[1rem] rounded-[5px] border-[1px] border-blue-500">
                                                <div className="">
                                                    <h2 className='text-[14px] font-medium border-b-[1px] pb-[5px] mb-[10px]'>
                                                        Sub-categories
                                                    </h2>

                                                    {/* Sub categories output */}
                                                    {subCategories?.map((subCat, parentIndex) => (
                                                        <div className={`mb-[10px] ${subCategories.length - 1  === parentIndex ? '' : 'border-b-[1px] border-zinc-500'}`} key={parentIndex}>
                                                            {/* Sub category name & description */}
                                                            <div className="">
                                                                <div className="flex items-center justify-between">
                                                                    <h3 className='text-[13.5px] font-medium capitalize'>
                                                                        {subCat?.name}
                                                                    </h3>
                                                                    <div className="flex items-center gap-[10px]">
                                                                        <AiFillEdit
                                                                            onClick={
                                                                                () => handleUpdate('subCat', '', parentIndex)
                                                                            }
                                                                            className='cursor-pointer'
                                                                        />
                                                                        <HiTrash
                                                                            onClick={
                                                                                () => handleRemove('subCat', '', parentIndex)
                                                                            }
                                                                            className='cursor-pointer'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <p className='text-[12px] mt-[7px]'>
                                                                    {subCat?.info}
                                                                </p>
                                                            </div>

                                                            {/* Sub category add new filter options */}
                                                            <div className="flex items-center justify-between border-b-[1px] pb-[5px] mt-[10px]">
                                                                <h2 className='text-[13px] font-medium'>
                                                                    Filter Options
                                                                </h2>
                                                                <button
                                                                    type='button'
                                                                    onClick={() => setSubCatFilterForm(parentIndex)}
                                                                    className='flex items-center gap-x-[5px] text-[11px] border-[1px] border-zinc-400 py-[4px] px-[10px] rounded-[5px]'
                                                                >
                                                                    <FiPlus />
                                                                    New filter options
                                                                </button>
                                                            </div>
                                                            
                                                            {/* Inputs sub category filter options */}
                                                            {subCatFilterForm === parentIndex && (
                                                                <div className="mt-[10px] mb-[4rem] relative">
                                                                    <div className="space-y-[20px]">
                                                                        <div className="flex flex-col gap-y-[10px]">
                                                                            <label
                                                                                htmlFor="subCatFilterName"
                                                                                className='text-[12px] font-medium'
                                                                            >
                                                                                Filter Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                id='subCatFilterName'
                                                                                name='subCatFilterName'
                                                                                placeholder='eg. brand'
                                                                                value={subCatFilterName}
                                                                                onChange={(e) => setSubCatFilterName(e.target.value)}
                                                                                className='w-[100%] text-[11px] py-[3px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent capitalized placeholder:italic outline-0'
                                                                            />
                                                                        </div>

                                                                        <div className="flex flex-col gap-y-[10px]">
                                                                            <label
                                                                                htmlFor="subCatFilterOptions"
                                                                                className='text-[12px] font-medium'
                                                                            >
                                                                                Options (must be comma (, ) separated value)
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                id='subCatFilterOptions'
                                                                                name='subCatFilterOptions'
                                                                                placeholder='eg. Apple, HP'
                                                                                value={subCatFilterOptions}
                                                                                onChange={(e) => setSubCatFilterOptions(e.target.value)}
                                                                                className='w-[100%] text-[11px] py-[3px] px-[10px] border-[1px] border-zinc-200 rounded-[5px] bg-transparent capitalized placeholder:italic outline-0'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        type='button'
                                                                        onClick={
                                                                            () => editSubCatFilterIndex === -1 ? handleAdd('subCatFilter', parentIndex) : saveChanges('subCatFilter', parentIndex)
                                                                        }
                                                                        className='mt-[10px] flex items-center gap-x-[5px] text-[11px] bg-zinc-600 text-white py-[5px] px-[10px] rounded-[5px] absolute bottom-[-2.5rem] right-0'
                                                                    >
                                                                        <FiPlus />
                                                                        {editSubCatFilterIndex === -1 ? 'Add filter' : 'Save Changes'}
                                                                    </button>
                                                                </div>
                                                            )}
                                                            

                                                            {/* Sub Category filter options output */}
                                                            <div className="mt-[10px]" /*key = { index }*/>  
                                                                <div className="space-y-[20px]">
                                                                    {subCat?.filterOptions?.map((filter, index) => (
                                                                        <div className="space-y-[10px] border-b-[1px] pb-[10px] mb-1" key={index}>
                                                                            <div className="flex items-center justify-between">
                                                                                <h3 className='flex  items-center gap-[5px] text-[13.5px] font-medium capitalize'>
                                                                                    Name :
                                                                                    <span className='text-[13px] font-normal capitalized'>
                                                                                        {filter?.name}
                                                                                    </span>
                                                                                </h3>
                                                                                <div className="flex items-center gap-[10px]">
                                                                                    <AiFillEdit
                                                                                        onClick={
                                                                                            () => handleUpdate('subCatFilter', parentIndex, index)
                                                                                        }
                                                                                        className='cursor-pointer'
                                                                                    />
                                                                                    <HiTrash
                                                                                        onClick={
                                                                                            () => handleRemove('subCatFilter', index, parentIndex)
                                                                                        }
                                                                                        className='cursor-pointer'
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="">
                                                                                <h2 className='text-[12.5px] font-medium mb-[5px]'>
                                                                                    Options :
                                                                                </h2>
                                                                                <div className="flex flex-wrap items-start gap-x-[20px] gap-y-[10px] pl-[1rem] text-[12px] capitalized">
                                                                                    {filter?.options?.map((option, index) => (
                                                                                        <p key={index}>{option}</p>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCategories