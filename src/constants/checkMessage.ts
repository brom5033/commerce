import { CheckMessage } from '@components/templates/SignUp';

export const checkMessage: CheckMessage = {
    email: {
        1: '이메일 형식이 아니에요',
    },
    password: {
        1: '8글자 이상 작성해야 해요',
        2: '16글자 미만 작성해야 해요',
        3: '알파벳 대/소문자, 숫자, 특수문자를 모두 포함해야 해요',
    },
    passwordCheck: {
        1: '비밀번호가 일치하지 않아요',
    },
    name: {
        1: '한글만 입력 가능해요',
    },
    phoneNumber: {
        1: '올바른 전화번호 형식이 아니에요',
    },
    businessNumber: {
        1: '올바른 사업자번호 형식이 아니에요',
    },
} as const;
