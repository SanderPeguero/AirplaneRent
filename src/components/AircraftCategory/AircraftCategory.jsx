import React, { useState } from 'react'

const AircraftCategory = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const dataArray = Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        name: `Software ${index + 1}`,
    }));

    const [checkedItems, setCheckedItems] = useState(dataArray.map(() => true));

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-auto'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'>Aircraft category & Attributes</h1>

                    <div className="container mx-auto mt-8">
                        <form className='mb-8'>
                            <div className='mb-8'>
                                <span className='mb-[5rem] text-white mt-[1rem] text-lg'>Category</span>
                                <div className=' mt-[1rem] mx-[0.5rem]'>

                                    <div>
                                        {/* <label className="block text-lg  ml-1 mb-2 text-white">Category</label> */}
                                        <div className="relative ">
                                            <select
                                                name="title"
                                                value={selectedOption}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                                className="py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"

                                            >
                                                <option className='' value="" disabled>Select an category</option>
                                                {options.map((option) => (
                                                    <option className='text-black' key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className=' text-white mt-[4rem] text-lg'>Compatibility</span>
                                <div className='mt-[1rem] mx-[0.5rem]'>

                                    <div className='flex flex-wrap'>
                                        {dataArray.map((data, i) => (
                                            <div key={i} className='w-1/3 p-2 flex '>
                                                <div className="inline-flex items-center">
                                                    <label
                                                        className="relative flex cursor-pointer items-center rounded-full p-3"
                                                        data-ripple-dark="true"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 "
                                                            id={`checkbox-${i}`}
                                                            checked={checkedItems[i]}
                                                            onChange={() => handleCheckboxChange(i)}
                                                        />
                                                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-3.5 w-3.5"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                stroke="currentColor"
                                                                strokeWidth="1"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='text-white text-sm p-4 rounded-md'>
                                                    <p>{data.name}</p>
                                                </div>
                                            </div>
                                        ))}
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

export default AircraftCategory