import { type FC } from 'react';
import { useFlow } from 'stackflow';
import { Container, Grid, Avatar, Typography } from '@mui/material';
// component
import { Logo } from '@components/atoms';
import { DrawerAppBar } from '@components/molecules';

export const AppBar: FC = () => {
    const style = {
        header: {
            color: '#353537',
            padding: '10px 12px',
            height: '50px',
            position: 'sticky',
            zIndex: 1000,
            top: 0,
            backgroundColor: 'white',
        },
        button: {
            position: 'absolute',
            top: '14px',
            left: '12px',
        },
    } as const;

    const { push } = useFlow();

    const MainPageNavigation = () => push('Main', {});

    return (
        <Container disableGutters component="header" maxWidth={false} sx={style.header}>
            <Grid container>
                <Grid item sx={{ position: 'absolute', left: '1px' }}>
                    <DrawerAppBar />
                </Grid>
                <Grid item sx={{ cursor: 'pointer', fontWeight: 'bold', margin: 'auto' }}>
                    <Logo onClick={MainPageNavigation} />
                </Grid>
                <Grid item>
                    <Avatar alt="profile" src="/images/dog.jpg" />
                </Grid>
                <Grid item sx={{ ml: '10px' }}>
                    <Typography sx={{ mt: '8px' }}>박민정</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
