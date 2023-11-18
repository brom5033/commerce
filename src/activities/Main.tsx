import { type ActivityComponentType } from '@stackflow/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// component
import { AppScreen } from '@components/index';

export const Main: ActivityComponentType = () => {
    return (
        <AppScreen main>
            main page
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
                <SwiperSlide>
                    <img src="/images/slider5.jpg" alt="" height="400px" />
                </SwiperSlide>
            </Swiper>
        </AppScreen>
    );
};