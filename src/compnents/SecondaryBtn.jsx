import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const SecondaryBtn = ({Title}) => {
    return (
        <button className='flex items-center justify-between gap-x-2 text-white border px-5 py-2.5 rounded-[8px] hover:bg-white hover:border-transparent hover:text-black duration-300'>{Title}<FaLongArrowAltRight/></button>
    );
};

export default SecondaryBtn;