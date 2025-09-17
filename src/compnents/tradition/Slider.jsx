'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const Slider = () => {
    const Pathname = usePathname('#item1')

    

    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-6 py-2">
                <a href="#item1" className="bg-[#B31217] w-5 h-5 p-2 rotate-45"></a>
                <a href="#item2" className="bg-[#B31217] w-5 h-5 p-2 rotate-45"></a>
                <a href="#item3" className="bg-[#B31217] w-5 h-5 p-2 rotate-45"></a>
                <a href="#item4" className="bg-[#B31217] w-5 h-5 p-2 rotate-45"></a>
            </div>
        </div>
    );
};

export default Slider;