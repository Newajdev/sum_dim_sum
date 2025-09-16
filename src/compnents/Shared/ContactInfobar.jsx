import React from 'react';
import Container from '../Container';
import {raleway } from '@/app/layout';

const ContactInfobar = () => {
    return (
            <div className={`${raleway.className} bg-[#0C0C0C] text-[#F8F8FF]`}>
                <Container>
                    <div className='flex justify-between'>
                        {/* Contact info */}
                        <div>
                            
                        </div>

                        {/* Social Links */}
                        <div> Social Links</div>
                    </div>
                </Container>
            </div>
    );
};

export default ContactInfobar;