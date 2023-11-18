import { type FC, type ChangeEvent, useState } from 'react';
import { Stack } from '@mui/material';
// component
import { Box, Input, Button } from '@components/atoms/';
import { checkMessage } from '@constants/checkMessage';

type CheckType = null | 1 | 2 | 3 | 4 | 5 | 6;
type Check = Record<string, CheckType>;
export interface CheckMessage {
    email: Record<number, string>;
    password: Record<number, string>;
    passwordCheck: Record<number, string>;
    name: Record<number, string>;
    phoneNumber: Record<number, string>;
    businessNumber: Record<number, string>;
}

export const SignUpTemplate: FC = () => {
    const [check, setCheck] = useState<Check>({
        email: null,
        password: null,
        passwordCheck: null,
        name: null,
        phoneNumber: null,
        businessNumber: null,
    });

    const [password, setPassword] = useState<string>('');

    const checkObj: Check = {
        email: null,
        password: null,
        passwordCheck: null,
        name: null,
        phoneNumber: null,
        businessNumber: null,
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);

        const emailCheck =
            /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailCheck.test(event.target.value)) {
            checkObj.email = 1;
        }
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);
        setPassword(event.target.value);
        const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

        if (event.target.value.length < 8) {
            checkObj.password = 1;
        } else if (event.target.value.length > 16) {
            checkObj.password = 2;
        } else if (!passwordCheck.test(event.target.value)) {
            checkObj.password = 3;
        }
    };

    const handlePasswordCheckChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);
        if (password !== event.target.value) {
            checkObj.passwordCheck = 1;
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);

        // 한글만 입력가능
        const nameCheck = /^[가-힣]+$/;
        if (!nameCheck.test(event.target.value)) {
            checkObj.name = 1;
        }
    };

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);
        const target = event.target;
        const maxlength = 13;

        if (event.target.value.length > maxlength) {
            event.target.value = event.target.value.substring(0, maxlength);
        }

        target.value = target.value.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        if (target.value.length < 12) {
            checkObj.phoneNumber = 1;
        }
    };

    const handleBusinessNumberChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCheck(checkObj);
        const target = event.target;
        const maxlength = 12;

        if (event.target.value.length > maxlength) {
            event.target.value = event.target.value.substring(0, maxlength);
        }

        target.value = target.value.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{2})(\d{5})$/, `$1-$2-$3`);
        if (target.value.length < 10) {
            checkObj.businessNumber = 1;
        }
    };

    return (
        <Stack>
            <h3>Sign Up</h3>
            <Box border>
                <Input
                    onChange={handleEmailChange}
                    type="email"
                    label="이메일"
                    helperText={checkMessage.email[check.email ?? 0] ?? ''}
                />
                <Input
                    onChange={handlePasswordChange}
                    type="password"
                    label="비밀번호"
                    helperText={checkMessage.password[check.password ?? 0] ?? ''}
                />
                <Input
                    onChange={handlePasswordCheckChange}
                    type="password"
                    label="비밀번호 확인"
                    helperText={checkMessage.passwordCheck[check.passwordCheck ?? 0] ?? ''}
                />
                <Input
                    onChange={handleNameChange}
                    type="text"
                    label="이름"
                    helperText={checkMessage.name[check.name ?? 0] ?? ''}
                />
                <Input
                    onChange={handlePhoneNumberChange}
                    type="tel"
                    label="전화번호"
                    helperText={checkMessage.phoneNumber[check.phoneNumber ?? 0] ?? ''}
                />
                <Input
                    onChange={handleBusinessNumberChange}
                    type="tel"
                    label="사업자번호"
                    helperText={checkMessage.businessNumber[check.businessNumber ?? 0] ?? ''}
                />
            </Box>
            <Button>회원가입</Button>
        </Stack>
    );
};
