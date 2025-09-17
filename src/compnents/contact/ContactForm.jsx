"use client";
import { useForm } from "react-hook-form"
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[60px] w-full">

            <input placeholder="Your Name" className="w-full py-4 px-3 border-b border-[#ffffff] focus:outline-0" {...register("name")} />

            <div className="grid grid-cols-2 gap-6 justify-center items-center py-10">
                <input placeholder="Your Email Address" className="py-4 px-3 border-b border-[#ffffff] focus:outline-0" {...register("email")} />

                <input type="text" placeholder="Your Phone Number" className="py-4 px-3 border-b border-[#ffffff] focus:outline-0" {...register("phone")} />


            </div>
            <textarea placeholder="Your Message" className="w-full py-4 px-3 border-b border-[#ffffff] focus:outline-0" ></textarea>

            <div className="flex  justify-end">
                <button type="submit" className='mt-[60px] flex items-center text-white bg-[#B31217] px-10 py-2.5 rounded-[8px] group'>Submit<FaLongArrowAltRight className='opacity-0 -ml-3  group-hover:opacity-100 group-hover:ml-3  duration-300' /></button>
            </div>
        </form>
    );
};

export default ContactForm;