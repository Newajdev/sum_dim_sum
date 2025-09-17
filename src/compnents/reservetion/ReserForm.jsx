"use client";
import { useForm } from "react-hook-form"


const ReserForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[60px] ">

            <div className="grid grid-cols-2 gap-6 justify-center items-center">
                <input placeholder="Your name" className="py-4 px-3 border-b border-[#0C0C0C] focus:outline-0" {...register("name")} />

                <input placeholder="How many Person" className="py-4 px-3 border-b border-[#0C0C0C] focus:outline-0" {...register("person")} />

                <input type="date" className="py-4 px-3 border-b border-[#0C0C0C] focus:outline-0" {...register("date")}  />

                <select defaultValue="Pick your Time" className="py-4 px-3 border-b border-[#0C0C0C] focus:outline-0" {...register("time")} >
                    <option disabled={true}>Pick your Time</option>
                    <option value={'9:00 am'}>9:00 am</option>
                    <option value={'10:00 am'}>10:00 am</option>
                    <option value={'11:00 am'}>11:00 am</option>
                    <option value={'12:00 am'}>12:00 am</option>
                    <option value={'1:00 am'}>1:00 pm</option>
                </select>
            </div>

            <input className='flex justify-center items-center mx-auto text-white bg-[#B31217] px-[80px] py-2.5 rounded-[8px] mt-[60px]' type="submit" value={'Book Now'} />
        </form>
    );
};

export default ReserForm;