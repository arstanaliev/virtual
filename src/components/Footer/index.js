import React from 'react';
import footerLogo from "../../img/Logo.png"
import {FaFacebookF, FaInstagram, FaPinterestP, FaTwitter} from "react-icons/fa";
import {CiLocationOn, CiMail} from "react-icons/ci";
import {TbPhoneCall} from "react-icons/tb";

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <img src={footerLogo} alt="" className="w-[58%] py-[6px]"/>
                        <a href="" className="text-gray-300 text-[18px] py-[4px] flex items-center"><CiLocationOn className="pr-[8px] text-3xl"/>Dhaka, Bangladesh</a>
                        <a href="" className="text-gray-300 text-[18px] py-[4px] flex items-center"><TbPhoneCall className="pr-[8px] text-3xl"/>0943833399</a>
                        <a href="" className="text-gray-300 text-[18px] py-[4px] flex items-center"><CiMail className="pr-[8px] text-3xl"/>support@zone.com</a>
                        <div className="flex py-[6px]">
                            <a href="" className="p-[5px] border border-gray-700 rounded-[50%] text-gray-400 mr-[7px]"><FaFacebookF/></a>
                            <a href="" className="p-[5px] border border-gray-700 rounded-[50%] text-gray-400 mx-[7px]"><FaTwitter/></a>
                            <a href="" className="p-[5px] border border-gray-700 rounded-[50%] text-gray-400 mx-[7px]"><FaInstagram/></a>
                            <a href="" className="p-[5px] border border-gray-700 rounded-[50%] text-gray-400 ml-[7px]"><FaPinterestP/></a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Service</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Order Management</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Social Assistant</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Crypto Platform</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Analyzer of the News</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Company</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">About Us</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">News</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Our trusted partner</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">New users FAQ</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Supports</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Help center</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Feedbcak</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Contact us</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Terms conditins</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Resources</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Download app</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Blog</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">What’s new</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Sitemap</a>
                    </div>
                </div>
            </div>
            <hr className="mt-[30px]"/>
            <div className="container">
                <div className="flex justify-between items-center py-[30px] ">
                    <a href="" className="text-gray-300 text-[18px] py-[5px]">© 2021 Zone. - All rights reserved.</a>
                    <div className="flex justify-between w-[28%]">
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Privacy</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Security</a>
                        <a href="" className="text-gray-300 text-[18px] py-[5px]">Terms</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;