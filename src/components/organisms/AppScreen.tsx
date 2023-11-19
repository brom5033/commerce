import type { FC, PropsWithChildren } from 'react';
import { AppScreen as StackFlowAppScreen } from '@stackflow/plugin-basic-ui';
// component
import { AppBar } from '@components/molecules';
import { Container } from '@mui/material';

interface Props extends PropsWithChildren {
    main?: boolean;
    sub?: boolean;
    page?: boolean;
    logout?: boolean;
}

export const AppScreen: FC<Props> = ({ children, main }) => {
    return (
        <StackFlowAppScreen>
            {main && <AppBar />}
            <Container maxWidth={false} component="main">
                {children}
            </Container>
        </StackFlowAppScreen>
    );
};
