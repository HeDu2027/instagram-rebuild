import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import Image1 from '/Users/hedu/Downloads/instagram-rebuild/src/client/components/banner/asset/截屏2023-08-03 14.26.43.png';
import Image2 from '/Users/hedu/Downloads/instagram-rebuild/src/client/components/banner/asset/截屏2023-08-03 14.26.48.png'
import Image from '/Users/hedu/Downloads/instagram-rebuild/src/client/components/banner/asset/截屏2023-08-03 14.24.36.png'
import Image3 from '/Users/hedu/Downloads/instagram-rebuild/src/client/components/banner/asset/截屏2023-08-03 14.26.52.png'

const StyledCarousel = styled(Carousel)`
    .control-arrow {
        box-shadow: none !important;
    }
`;

const Banner = () => {
    return (
        <div style={{
            width:'60%',
            height:'10%',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <StyledCarousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={true} // 显示左右箭头
                dynamicHeight={false}
                style={{ width: '80%', height: '100%' }} // 修改Carousel的高度为100%
            >
                <div>
                    <img src={Image} alt="Image" style={{ width: '100%', height: '50%' }} />
                </div>
                <div>
                    <img src={Image1} alt="Image 1" style={{ width: '100%', height: '50%' }} />
                </div>
                <div>
                    <img src={Image2} alt="Image 2" style={{ width: '100%', height: '50%' }} />
                </div>
                <div>
                    <img src={Image2} alt="Image 2" style={{ width: '100%', height: '50%' }} />
                </div>
                <div>
                    <img src={Image3} alt="Image 3" style={{ width: '100%', height: '50%' }} />
                </div>
            </StyledCarousel>
        </div>
    );
};

export default Banner;
