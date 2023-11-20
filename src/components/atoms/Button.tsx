import { type FC, type PropsWithChildren, MouseEventHandler } from 'react';
import { Button as MuiButton } from '@mui/material';

interface Props extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    height?: boolean;
}

export const Button: FC<Props> = ({ children, onClick, height }) => {
    const style = {
        button: {
            color: '#fff',
            backgroundColor: 'lightgray',
            borderRadius: '15px',
            height: height ? 'auto' : '60px',
        },
    } as const;

    return (
        <MuiButton sx={style.button} onClick={onClick}>
            {children}
        </MuiButton>
    );
};
