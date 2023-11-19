import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Stack } from '@mui/material';

export const MainPage: FC = () => {
    return (
        <Stack
            sx={{
                width: '100%',
                maxWidth: '500px',
                margin: 'auto',
                top: '50%',
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <Swiper
                style={{ height: '400px', width: '300px' }}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
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
            </Swiper>
        </Stack>
    );
};
