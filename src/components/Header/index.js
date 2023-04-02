import React from 'react';
import headerLogo from "../../img/Logo.png"

const Header = ({darkMode, setDarkMode}) => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between items-center p-[40px]">
                    <div>
                        <img src={headerLogo} alt=""/>
                    </div>
                    <div className="flex w-[55%]">
                        <div className="flex justify-between w-[100%] items-center">
                            <a href="" className="text-[#F9FAFB] text-[14px]">Home</a>
                            <a href="" className="text-[#F9FAFB] text-[14px]">About Us</a>
                            <a href="" className="text-[#F9FAFB] text-[14px]">Service</a>
                            <a href="" className="text-[#F9FAFB] text-[14px]">Pricing</a>
                            <a href="" className="text-[#F9FAFB] text-[14px]">Blog</a>
                            <div>
                                <button onClick={() => setDarkMode(!darkMode)} className="text-[14px] bg-gradient-to-br from-purple-600 to-blue-500 text-[#F9FAFB] py-[10px] px-[20px] rounded-[5px]">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;