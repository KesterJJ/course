import React from 'react';
import { SignButton } from '../navbar/Navbar.elements';
import { BannerContainer, Bannerh2, Bannerh3, Bannerp, Image1 } from './Banner.elements';

const image1 = require('./img/svg-1.svg').default;

function Banner () {
return (
    <>
    <BannerContainer>
    <div>
        <Bannerh2>Marketing Agency</Bannerh2>
        <Bannerh3>Lead Generation Specialist for Online Business</Bannerh3>
        <Bannerp>lorem</Bannerp>
        <SignButton>Get Started</SignButton>
        
    </div>
    <div>
        <Image1 src={image1} />
    </div>

    </BannerContainer>
    </>
)

}

export default Banner