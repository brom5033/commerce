import type { FC } from 'react';
import { useFlow } from 'stackflow';
import { Container, Grid, Avatar, Typography, Stack } from '@mui/material';
// component
import { Logo, Button } from '@components/atoms';
import { DrawerAppBar } from '@components/molecules';
import { userModel } from '@stores/index';

export const AppBar: FC = () => {
    const userModelStore = userModel();

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
    const LoginPageNavigation = () => push('Login', {});
    const SignUpPageNavigation = () => push('SignUp', {});

    return (
        <Container disableGutters component="header" maxWidth={false} sx={style.header}>
            <Grid container>
                <Grid item sx={{ position: 'absolute', left: '1px' }}>
                    <DrawerAppBar />
                </Grid>
                <Grid item sx={{ cursor: 'pointer', fontWeight: 'bold', margin: 'auto' }}>
                    <Logo onClick={MainPageNavigation} />
                </Grid>
                <Grid item sx={{ position: 'absolute', right: '1px' }}>
                    <Stack direction="row" spacing={1} sx={{ pl: '24px', pr: '24px', pt: '8px', pb: '8px' }}>
                        {userModelStore.isLogin() ? (
                            <div>
                                <Avatar alt="profile" src="/images/dog.jpg" sx={{ width: 24, height: 24 }} />
                                <Typography sx={{ mt: '8px' }}>박민정</Typography>
                            </div>
                        ) : (
                            <div>
                                <Button onClick={LoginPageNavigation}>로그인</Button>
                                <Button onClick={SignUpPageNavigation}>회원가입</Button>
                            </div>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};
