import type { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
// component
import { Button } from '@components/atoms';
import { Slider } from '@components/molecules/Slider';
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
        </>
    );
};
