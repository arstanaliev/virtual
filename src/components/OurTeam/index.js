import React from 'react';
import image1 from "../../img/OurTeam-image1.png"
import image2 from "../../img/OurTeam-image2.png"
import image3 from "../../img/OurTeam-image3.png"
import image4 from "../../img/OurTeam-image4.png"
import {BsFacebook, BsSkype, BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai";

const OurTeam = () => {
    return (
        <section>
            <div className="container">
                <div className="py-[100px]">
                    <h1 className="text-[#FFFFFF] text-[42px] text-center">Met Our Team</h1>
                    <p className="text-[#FFFFFF] text-[16px] text-center py-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                    <div className="flex">
                        <div className="w-[270px] my-[20px] mx-auto bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image1} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[28px] text-center">Sunny Khan</h1>
                            <p className="text-[#FFFFFF] text-[16px] pb-[7px] text-center">Executive officer</p>
                            <div className="flex justify-center">
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><AiFillInstagram/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><FaLinkedinIn/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><BsTwitter/>
                                </a>
                                <a href="" className={"text-[#3FA4F1] text-[32px] bg-white rounded-[50%] mx-[5px]"}>
                                    <BsFacebook/></a>
                            </div>
                        </div>
                        <div className="w-[270px] my-[20px] mx-auto bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image2} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[28px] text-center">Alina Jesia</h1>
                            <p className="text-[#FFFFFF] text-[16px] pb-[7px] text-center">UX/UI DESIGNER</p>
                            <div className="flex justify-center">
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><AiFillInstagram/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><FaLinkedinIn/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><BsTwitter/>
                                </a>
                                <a href="" className={"text-[#3FA4F1] text-[32px] bg-white rounded-[50%] mx-[5px]"}>
                                    <BsFacebook/></a>
                            </div>
                        </div>
                        <div className="w-[270px] my-[20px] mx-auto bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image3} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[28px] text-center">Alex Sohag</h1>
                            <p className="text-[#FFFFFF] text-[16px] pb-[7px] text-center">BUSINESS DEVELOPMENT</p>
                            <div className="flex justify-center">
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><AiFillInstagram/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><FaLinkedinIn/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><BsTwitter/>
                                </a>
                                <a href="" className={"text-[#3FA4F1] text-[32px] bg-white rounded-[50%] mx-[5px]"}>
                                    <BsFacebook/></a>
                            </div>
                        </div>
                        <div className="w-[270px] my-[20px] mx-auto bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image4} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[28px] text-center">Afroza Mou</h1>
                            <p className="text-[#FFFFFF] text-[16px] pb-[7px] text-center">Head of marketing</p>
                            <div className="flex justify-center">
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><AiFillInstagram/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><FaLinkedinIn/>
                                </a>
                                <a href="" className={"bg-[#3FA4F1] text-[#FFFFFF] p-2 rounded-[50%] mx-[5px]"}><BsTwitter/>
                                </a>
                                <a href="" className={"text-[#3FA4F1] text-[32px] bg-white rounded-[50%] mx-[5px]"}>
                                    <BsFacebook/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;