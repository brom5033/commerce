import type { FC, PropsWithChildren } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Stack } from '@mui/material';

const style = {
    stackWrap: {
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
    },
} as const;

interface Props extends PropsWithChildren {
    width?: boolean;
    height?: boolean;
}

export const Slider: FC<Props> = ({ children, width }) => {
    return (
        <Stack sx={style.stackWrap}>
            <Swiper
                style={{ height: '400px', width: width ? '600px' : '300px' }}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {children}
            </Swiper>
        </Stack>
    );
};
