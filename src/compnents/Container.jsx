import React from 'react';

const Container = ({children}) => {
    return (
        <section className='w-max md:w-[90%] lg:[85%] xl:[80%] mx-auto'>
            {children}
        </section>
    );
};

export default Container;