import React, {useState} from 'react';
import {BsPlayCircle} from "react-icons/bs";
import image from "../../img/1 1.png"

const Hero = () => {
    const [video, setVideo] = useState(false)
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <iframe width="520" height="250" src="https://www.youtube.com/embed/WCBCGNePaRs"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen style={{
                            transform: video ? "scale(1)" : "scale(0)"
                        }} className="absolute "></iframe>
                        <h1 className="text-[#2563EB] text-[58px]">Virtual Reality <br/>
                            Business Solutions</h1>
                        <p className="text-[#E5E7EB] text-[15px] py-[20px]">We have over 15 year exprience in business
                            consultting arena. We have over <br/>
                            15 year exprience in business consultting arena and artficial intelligence.</p>
                        <div className="flex">
                            <button
                                className="text-[#F9FAFB] bg-gradient-to-br from-purple-600 to-blue-500 py-[15px] px-[35px] rounded-[6px]">Join
                                Us
                            </button>

                            <button
                                className="text-[#F9FAFB] bg-transparent flex items-center py-[15px] px-[35px] font-sans-700"
                                onClick={() => setVideo(!video)}><BsPlayCircle className="pr-[10px] text-4xl"/>Watch
                                video
                            </button>
                        </div>

                    </div>
                    <img src={image} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;