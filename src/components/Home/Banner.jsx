import React from 'react';

const Banner = () => {
    return (
        <div className='banner min-h-screen'>
            <div className="mx-auto max-w-screen-xl px-5 md:px-2 lg:px-0">
                <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
 className='min-h-screen flex flex-col items-center justify-center md:w-2/3 w-full text-white'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl'>Open Your Heart, Open Your Home: Adopt a Pet Today</h2>
                    <p>Millions of loving pets wait for a home. Open your heart and theirs. Adopt a pet today and experience the joy of unconditional love and companionship. Visit Pet Pals Hub to find your perfect furry friend!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;