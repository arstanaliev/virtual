import React from 'react';
import image1 from "../../img/Projects-image1.png"
import image2 from "../../img/Projects-image2.png"

const Projects = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <div className="flex justify-between items-center pb-[50px]">
                        <img src={image1} alt=""/>
                        <div>
                            <h1 className="text-[#FFFFFF] text-[42px]">We complete every projects <br/>
                                extra care as customer need</h1>
                            <p className="text-[#FFFFFF] text-[16px] py-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                                non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                                scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore <br/>
                                eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                                error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                            <button className="text-[#F9FAFB] bg-gradient-to-br from-purple-600 to-blue-500 py-[15px] px-[35px] rounded-[6px]">Read more</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[#FFFFFF] text-[42px]">We complete every projects <br/>
                                extra care as customer need</h1>
                            <p className="text-[#FFFFFF] text-[16px] py-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                                non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                                scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore <br/>
                                eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                                error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                            <button className="text-[#F9FAFB] bg-gradient-to-br from-purple-600 to-blue-500 py-[15px] px-[35px] rounded-[6px]">Read more</button>
                        </div>
                        <img src={image2} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;