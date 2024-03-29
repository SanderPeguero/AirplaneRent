import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

const NavBarNotification = () => {
    return (
        <div>
            <nav className="bg-[#2c2c2c] p-4">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-end sm:justify-start">
                            <div className=" hidden sm:flex">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for aircraft"
                                        className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <button type="button" className="relative bg-orange-500 items-center justify-center  rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 pr-8 mr-10 pl-8 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                Add Aircraft
                            </button>

                            <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 pr-10 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <HiMagnifyingGlass color='white' className="h-6 w-6" />
                            </button>

                            <button
                                type="button"
                                className="relative rounded-full bg-white-800 p-1 pr-10 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View Message </span>
                                < IoMdNotifications color='white' className="h-6 w-6" />
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>

                                        <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>


                                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                 <div className="flex items-center justify-end sm:justify-start">
                    <div className="ml-6 hidden sm:flex">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none"
                            />
                            <HiMagnifyingGlass color='white' className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                        </div>
                    </div>
                </div>

            </div>
        </div> */}
            </nav>
        </div>
    )
}

export default NavBarNotification