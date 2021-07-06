import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import imagess from '../assets/banner.png'

SwiperCore.use([Navigation, Pagination]);

const Hero = () => {
       // const slides = [];
       // for (let i = 0; i < 5; i +=1 ) {
       //        slides.push(
       //               <SwiperSlide key={`slide-${i}`} tag="li">
       //                      <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`Slide ${i}`} />
       //               </SwiperSlide>
       //        )
       // }
       return (
              <div className="carousels">
                     <img className="banners" src={imagess} alt="" />
                     {/* <Swiper
                            id="main"
                            tag="section"
                            wrapperTag="ul"
                            navigation
                            pagination
                            spaceBetween={0}
                            slidesPerView={1}
                     >
                            {slides}
                     </Swiper> */}
              </div>
       )
}
export default Hero