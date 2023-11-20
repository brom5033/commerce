import type { FC } from 'react';
import { Stack } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
// component
import { Slider } from '@components/molecules';
import { Box } from '@components/atoms';

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
                <Box sx={{ overflow: 'visible', textAlign: 'center' }}>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Name</h4>
                        <p>{catalogue.product_name}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Grade</h4>
                        <p>{catalogue.grade}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Price</h4>
                        <p>$ {catalogue.price}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Room Type</h4>
                        <p>{catalogue.room_type}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Description</h4> <p>{catalogue.description}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Address</h4>
                        <p>{catalogue.address}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Phone</h4>
                        <p>{catalogue.phone}</p>
                    </div>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <h4>Email</h4>
                        <p>{catalogue.email}</p>
                    </div>
                </Box>
            </Stack>
        </Stack>
    );
};
