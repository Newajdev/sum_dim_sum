import React from 'react';

const Container = ({children}) => {
    return (
        <section className='w-max md:w-[90%] lg:w-[1320px] xl:w-[1320px] mx-auto'>
            {children}
        </section>
    );
};

export default Container;