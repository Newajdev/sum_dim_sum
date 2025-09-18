import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const PrimBtn = ({Title}) => {
    return (
        <button className='flex items-center text-white bg-[#B31217] px-5 py-2.5 rounded-[8px] group'>{Title}<FaLongArrowAltRight className='opacity-0 -ml-3  lg:group-hover:opacity-100 lg:group-hover:ml-3  duration-300'/></button>
    );
};

export default PrimBtn;