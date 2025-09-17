import Image from "next/image";
import Container from "../Container";
import { cinzel, raleway } from "@/app/layout";
import SecondaryBtn from "../SecondaryBtn";






const Tradition = () => {
    const FoodData = [
        {
            id: 1,
            image: '/assets/traditionalfood01.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖',
            description: 'A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.'
        },
        {
            id: 2,
            image: '/assets/traditionalfood01.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖',
            description: 'A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.'
        },
        {
            id: 3,
            image: '/assets/traditionalfood01.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖',
            description: 'A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.'
        },
        {
            id: 4,
            image: '/assets/traditionalfood01.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖',
            description: 'A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.'
        },

    ]

    return (
        <Container>
            <div>
                {/* title */}
                <div className="flex flex-col justify-center items-center">
                    <h2 className={`${cinzel.className} text-5xl`}>Taste the Tradition</h2>
                    <Image src={'/assets/tree02.png'} width={117} height={48} alt="Taste the Tradition" />
                </div>

                {/* Image Container */}
                <div className="py-[60px] flex flex-wrap gap-6">
                    {/* Food-01 */}
                    <div className="w-[848px] h-[410px] rounded-[20px] group relative">
                        <Image src={'/assets/traditionalfood01.png'} width={884} height={410} alt="food" />

                        {/* Hidden content */}
                        <div className="w-full bg-[#0000006d] absolute bottom-0 rounded-b-2xl -mb-2 opacity-0 group-hover:mb-0 group-hover:opacity-100  duration-300 p-5">

                            <div className={`${raleway.className} flex justify-between items-center text-white`}>
                                <div>
                                    <h3 className="font-semibold">Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                    <p className="w-[438px] mt-3 font-normal">A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.</p>
                                </div>
                                <SecondaryBtn Title={'View Details'} />
                            </div>

                        </div>
                    </div>
                    {/* Food-02 */}
                    <div className="w-[448px] h-[410px] rounded-[20px] group relative">
                        <Image className="w-[448px] h-[410px]" src={'/assets/traditionalfood01.png'} width={884} height={410} alt="food" />

                        {/* Hidden content */}
                        <div className="w-full bg-[#0000006d] absolute bottom-0 rounded-b-2xl -mb-2 opacity-0 group-hover:mb-0 group-hover:opacity-100  duration-300 p-5">

                            <div className={`${raleway.className} text-white`}>
                                <div>
                                    <h3 className="font-semibold">Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                    <p className="my-5 font-normal">A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.</p>
                                </div>
                                <SecondaryBtn Title={'View Details'} />
                            </div>

                        </div>
                    </div>
                    {/* Food-03 */}
                    <div className="w-[448px] h-[410px] rounded-[20px] group relative">
                        <Image className="w-[448px] h-[410px]" src={'/assets/traditionalfood01.png'} width={884} height={410} alt="food" />

                        {/* Hidden content */}
                        <div className="w-full bg-[#0000006d] absolute bottom-0 rounded-b-2xl -mb-2 opacity-0 group-hover:mb-0 group-hover:opacity-100  duration-300 p-5">

                            <div className={`${raleway.className} text-white`}>
                                <div>
                                    <h3 className="font-semibold">Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                    <p className="my-5 font-normal">A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.</p>
                                </div>
                                <SecondaryBtn Title={'View Details'} />
                            </div>

                        </div>
                    </div>
                    
                    {/* Food-04 */}
                    <div className="w-[848px] h-[410px] rounded-[20px] group relative">
                        <Image src={'/assets/traditionalfood01.png'} width={884} height={410} alt="food" />

                        {/* Hidden content */}
                        <div className="w-full bg-[#0000006d] absolute bottom-0 rounded-b-2xl -mb-2 opacity-0 group-hover:mb-0 group-hover:opacity-100  duration-300 p-5">

                            <div className={`${raleway.className} flex justify-between items-center text-white`}>
                                <div>
                                    <h3 className="font-semibold">Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                    <p className="w-[438px] mt-3 font-normal">A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.</p>
                                </div>
                                <SecondaryBtn Title={'View Details'} />
                            </div>

                        </div>
                    </div>
                    

                </div>

            </div>
        </Container>
    );
};

export default Tradition;