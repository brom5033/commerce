import type { FC, PropsWithChildren, MouseEventHandler } from 'react';
import { CardMedia, Card as MUICard, CardContent } from '@mui/material';

interface Props extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLDivElement>;
    src: string;
    alt: string;
}

export const Card: FC<Props> = ({ onClick, children, src, alt }) => {
    return (
        <MUICard sx={{ maxWidth: '250px', margin: '24px', height: '520px' }} onClick={onClick}>
            <CardMedia component="img" src={src} alt={alt} sx={{ height: '200px' }} />
            <CardContent>{children}</CardContent>
        </MUICard>
    );
};
