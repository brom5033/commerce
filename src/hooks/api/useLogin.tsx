import axios from 'axios';

export const useLogin = (email: string, password: string) => {
    return axios.post('/api/login', {
        email,
        password,
    });
};
