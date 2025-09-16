import React from 'react';

const Container = ({children}) => {
    return (
        <section className='w-[1320px] mx-auto'>
            {children}
        </section>
    );
};

export default Container;