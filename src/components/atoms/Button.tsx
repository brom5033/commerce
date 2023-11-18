import { type FC, type PropsWithChildren, MouseEventHandler } from 'react';
import { Button as MuiButton } from '@mui/material';

const style = {
    button: {
        color: '#fff',
        backgroundColor: 'gray',
        borderRadius: '5px',
    },
} as const;

interface Props extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({ children, onClick }) => {
    return (
        <MuiButton sx={style.button} onClick={onClick}>
            {children}
        </MuiButton>
    );
};
