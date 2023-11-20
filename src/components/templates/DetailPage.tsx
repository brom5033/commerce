import type { FC } from 'react';
import { Stack } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
// component
import { Slider } from '@components/molecules';

interface Props {
    data: string;
}

export const DetailPage: FC<Props> = ({ data }) => {
    const catalogue = JSON.parse(data);

    return (
        <Stack>
            <Stack>
                <Slider>
                    <SwiperSlide>
                        <img src={catalogue.images[0]} alt={catalogue.product_name} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={catalogue.images[1]} alt={catalogue.product_name} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={catalogue.images[2]} alt={catalogue.product_name} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={catalogue.images[3]} alt={catalogue.product_name} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={catalogue.images[4]} alt={catalogue.product_name} />
                    </SwiperSlide>
                </Slider>
            </Stack>
            <Stack sx={{ position: 'absolute', bottom: '0px', top: '600px' }}>
                <p>호텔명{catalogue.product_name}</p>
                <p>등급{catalogue.grade}</p>
                <p>가격{catalogue.price}</p>
                <p>룸타입{catalogue.room_type}</p>
                <p>상세설명{catalogue.description}</p>
                <p>주소{catalogue.address}</p>
                <p>전화번호{catalogue.phone}</p>
                <p>이메일{catalogue.email}</p>
            </Stack>
        </Stack>
    );
};
