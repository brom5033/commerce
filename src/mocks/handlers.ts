import { type DefaultBodyType, http, HttpResponse } from 'msw';

const token = 'abc-123';

export const handlers = [
    http.post('/api/signup', async () => {
        await sleep(200);

        return HttpResponse.json({ message: '회원가입 성공', data: null });
    }),
    http.post('/api/login', async ({ request }) => {
        await sleep(200);

        const user = await request.json();
        const { username, password } = user as DefaultBodyType & { username: string; password: string };

        if (username !== 'admin' || password !== 'admin') {
            return HttpResponse.json(
                {
                    message: '로그인 실패',
                    data: {
                        username: '',
                        nickname: '',
                        profileImage: '',
                        token: '',
                    },
                },
                { status: 400 },
            );
        }

        return HttpResponse.json({
            message: '로그인 성공',
            data: {
                username: 'admin',
                nickname: '관리자',
                profileImage: 'https://avatars.githubusercontent.com/u/18197734?v=4',
                token,
            },
        });
    }),
];

async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}
