import type { FC, PropsWithChildren } from 'react';

export const Hr: FC<PropsWithChildren> = ({ children }) => {
    return <div style={{ borderBottom: '1px solid lightgray' }}>{children}</div>;
};
