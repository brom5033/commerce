import type { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
// component
import { Button } from '@components/atoms';
import { Slider } from '@components/molecules';
import { userModel } from '@stores/index';

export const MainPage: FC = () => {
    const userModelStore = userModel();

    const handleLogoutClick = () =>{
        userModelStore.emptyUser();
    } 

    return (
        <>
            <Button onClick={handleLogoutClick}>로그아웃 테스트</Button>
            <Slider>
                <SwiperSlide>
                    <img src="/images/slider1.jpg" alt="slider1" height="400px" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slider2.jpg" alt="slider2" height="400px" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slider3.jpg" alt="slider3" height="400px" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slider4.jpg" alt="slider4" height="400px" />
                </SwiperSlide>
            </Slider>
        </>
    );
};
