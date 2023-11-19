import type { FC, PropsWithChildren } from 'react';
import { Box as MUIBox, type SxProps, type Theme } from '@mui/material';

interface Props extends PropsWithChildren {
    sx?: SxProps<Theme>;
    noGutter?: boolean;
}

export const Box: FC<Props> = ({ children, sx, noGutter }) => {
    const style = {
        box: {
            width: '100%',
            height: 'auto',
            borderRadius: '30px',
            border: '1px solid lightgray',
            overflowY: 'auto',
            backgroundColor: '#fff',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            ...sx,
        },
        textBox: {
            height: '100%',
            padding: noGutter ? 0 : '24px',
            textWrap: 'wrap',
        },
    } as const;

    return (
        <MUIBox sx={style.box}>
            <MUIBox sx={style.textBox}>{children}</MUIBox>
        </MUIBox>
    );
};
