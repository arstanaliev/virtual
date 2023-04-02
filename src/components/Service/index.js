import React from 'react';
import image1 from "../../img/Service-image.png"
import image2 from "../../img/Service-image2.png"
import image3 from "../../img/Service-image3.png"
import image4 from "../../img/Service-image4.png"
import image5 from "../../img/Service-image5.png"
import image6 from "../../img/Service-image6.png"
import {FaArrowRight} from "react-icons/fa";

const Service = () => {
    return (
        <section>
            <div className="container">
                <div className="py-[120px]">
                    <h1 className="text-[#FFFFFF] text-[42px] text-center">Our Service</h1>
                    <p className="text-[#FFFFFF] text-[16px] text-center py-[30px]">We turn information into actionable insights
                        We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>
                    <div className="grid grid-cols-3">
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image1} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Order Management</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image2} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Social Assistant</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image3} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Crypto Platform</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image4} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Smart Trading Modules</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image5} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Analyzer of the News</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                        <div
                            className="my-[20px] mx-auto w-[345px] bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700 shadow-2xl px-[20px] py-[28px]">
                            <img src={image6} alt="" className="mx-auto"/>
                            <h1 className="text-[#FFFFFF] text-[24px] text-center pt-[18px]">Module of Price Notification</h1>
                            <p className="text-[#FFFFFF] text-[16px] text-start py-[15px]">Lorem ipsum dolor sit amet,
                                consectetur <br/>
                                the adipiscing elit. Sed quis accumsan nisi <br/>
                                Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="" className="text-[#FFFFFF] flex items-end text-[16px] justify-center">Learn
                                more <FaArrowRight className="pl-[10px] text-2xl"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;