import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className='relative'>
        <div className="absolute w-full h-32 bg-gradient-to-t from-grey-100 to-transparent bottom-0 z-20">

        </div>
            <Carousel
                autoplay
                infiniteLoop
                showStatus={true}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <img loading="lazy" src=" https://links.papareact.com/gil" />
                </div>
                <div>
                    <img loading="lazy" src=" https://links.papareact.com/6ff" />
                </div>

                <div>
                    <img loading="lazy" src=" https://links.papareact.com/7ma" />
                </div>
                <div>
                    <img loading="lazy" src=" https://links.papareact.com/7ma" />
                </div>

            </Carousel>
        </div>
    );
}

export default Banner
