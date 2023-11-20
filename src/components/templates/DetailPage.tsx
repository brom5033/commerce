import type { FC } from 'react';
import { Stack } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
// component
import { Slider } from '@components/molecules';

interface Props {
  data: string;
}

export const DetailPage: FC<Props> = ({data}) => {
  const catalogue = JSON.parse(data);
  console.log(catalogue)

    return (
        <Stack>
            <Stack>
                <Slider>
                    <SwiperSlide>
                        <img src="https://picsum.photos/200/300" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://picsum.photos/200/300" alt="image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://picsum.photos/200/300" alt="image" />
                    </SwiperSlide>
                </Slider>
            </Stack>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </Stack>
    );
};
