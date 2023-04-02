import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";

const Subscribe = () => {
    return (
        <section className="pb-[90px]">
            <div className="container">
                <div className="py-[50px] shadow-2xl mx-auto bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700">
                    <h1 className="text-[#FFFFFF] text-[42px] text-center">Subscribe to get the Latest News</h1>
                    <p className="text-[#FFFFFF] text-[16px] text-center pb-[25px]">We recommended you to subscribe to
                        our newspaper,drop your email below to get daily update about us</p>

                    <div className="w-[860px] mx-auto">
                        <div className="relative">
                            <input type="search" id="default-search"
                                   className="block w-full p-4 pl-10 text-[#FFFFFF] border border-gray-700 bg-transparent rounded-[70px]"
                                   placeholder="Enter your email addres" required/>
                                <button type="submit"
                                        className="flex items-center text-[#F9FAFB] bg-[#2563EB] rounded-[70px] absolute right-2.5 bottom-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaTelegramPlane className="pr-[5px] text-xl"/>Subscribe
                                </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
);
};

export default Subscribe;