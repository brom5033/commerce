import type { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
// component
import { Slider } from '@components/molecules/Slider';

export const MainPage: FC = () => {
    return (
        <Slider>
            <SwiperSlide>
                <img src="/images/slider1.jpg" alt="" height="400px" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider2.jpg" alt="" height="400px" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider3.jpg" alt="" height="400px" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider4.jpg" alt="" height="400px" />
            </SwiperSlide>
        </Slider>
    );
};
