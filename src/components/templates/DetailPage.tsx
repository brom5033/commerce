import type { FC } from 'react';
import { Stack } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
// component
import { Slider } from '@components/molecules';
import { Box, Hr } from '@components/atoms';

interface Props {
    data: string;
}

export const DetailPage: FC<Props> = ({ data }) => {
    const catalogue = JSON.parse(data);

    return (
        <Stack>
            <Stack>
                <Slider width>
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
                    <Hr>
                        <h4>Name</h4>
                        <p>{catalogue.product_name}</p>
                    </Hr>
                    <Hr>
                        <h4>Grade</h4>
                        <p>{catalogue.grade}</p>
                    </Hr>
                    <Hr>
                        <h4>Price</h4>
                        <p>$ {catalogue.price}</p>
                    </Hr>
                    <Hr>
                        <h4>Room Type</h4>
                        <p>{catalogue.room_type}</p>
                    </Hr>
                    <Hr>
                        <h4>Description</h4> <p>{catalogue.description}</p>
                    </Hr>
                    <Hr>
                        <h4>Address</h4>
                        <p>{catalogue.address}</p>
                    </Hr>
                    <Hr>
                        <h4>Phone</h4>
                        <p>{catalogue.phone}</p>
                    </Hr>
                    <Hr>
                        <h4>Email</h4>
                        <p>{catalogue.email}</p>
                    </Hr>
                </Box>
            </Stack>
        </Stack>
    );
};
