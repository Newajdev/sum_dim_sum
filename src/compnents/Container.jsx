import React from 'react';

const Container = ({children}) => {
    return (
        <section className='w-full md:w-full lg:w-[1320px] xl:w-[1320px] mx-auto'>
            {children}
        </section>
    );
};

export default Container;