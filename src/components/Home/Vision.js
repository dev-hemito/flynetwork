import React from 'react'
import { FaEyeDropper } from 'react-icons/fa';


const Vision = () => {
    return (
        <div className=" text-white min-h-[200px] p-8 md:p-12 mt-2 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="flex-shrink-0">
                    <div className="md:bg-purple-800 p-4 rounded-full">
                        <FaEyeDropper className="w-32 h-32 md:w-16 md:h-16" />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl font-semibold text-left">
                        Our Vision
                    </h2>
                    <p className="text-purple-100 text-sm md:text-base leading-relaxed text-justify">
                        Transforming the future of business by equipping young entrepreneurs with structured networking, relationship-building, and access to resources and mentorship to become tomorrow's visionary leaders and innovators
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision
