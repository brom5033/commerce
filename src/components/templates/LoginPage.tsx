import type { FC, ChangeEvent } from 'react';
import { useRef, useState, type KeyboardEvent } from 'react';
import { Stack } from '@mui/material';
import { useFlow } from 'stackflow';
// component
import { Box, Input, Button } from '@components/atoms';
import { useLogin } from '@hooks/api';
import { checkMessage } from '@constants/index';

type CheckType = null | 1 | 2 | 3 | 4 | 5 | 6;
type Check = Record<string, CheckType>;

export const LoginPage: FC = () => {
    const { replace } = useFlow();
    const [check, setCheck] = useState<Check>({
        email: null,
        password: null,
    });

    const checkObj: Check = {
        email: null,
        password: null,
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const emailCheck =
            /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailCheck.test(event.target.value)) {
            checkObj.email = 1;
        } else {
            checkObj.email = null;
        }
        setCheck({ ...check, email: checkObj.email });
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

        if (event.target.value.length < 8) {
            checkObj.password = 1;
        } else if (event.target.value.length > 16) {
            checkObj.password = 2;
        } else if (!passwordCheck.test(event.target.value)) {
            checkObj.password = 3;
        } else {
            checkObj.password = null;
        }

        setCheck({ ...check, password: checkObj.password });
    };

    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const submit = () => {
        const email = emailRef?.current?.value ?? '';
        const password = passwordRef?.current?.value ?? '';

        useLogin(email, password)
            .then(() => {
                replace('Main', {});
            })
            .catch(() => {
                setCheck({ ...check, email: 1, password: 1 });
            });
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            submit();
        }
    };

    return (
        <Stack
            gap="50px"
            sx={{
                width: '100%',
                maxWidth: '500px',
                margin: 'auto',
                top: '50%',
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <Stack gap="50px">
                <Box>
                    <h3>Login</h3>
                    <Input
                        onChange={handleEmailChange}
                        onKeyDown={handleOnKeyDown}
                        ref={emailRef}
                        type="email"
                        label="이메일"
                        helperText={checkMessage.email[check.email ?? 0] ?? ''}
                    />
                    <Input
                        onChange={handlePasswordChange}
                        onKeyDown={handleOnKeyDown}
                        ref={passwordRef}
                        type="password"
                        label="비밀번호"
                        helperText={checkMessage.password[check.password ?? 0] ?? ''}
                    />
                </Box>
            </Stack>
            <Button onClick={submit}>로그인</Button>
        </Stack>
    );
};
