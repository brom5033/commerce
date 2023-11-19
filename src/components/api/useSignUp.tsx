import axios from 'axios';

export const useSignUp = (email: string, password: string, name: string) => {
    return axios.post('/api/signup', {
        email,
        password,
        name,
    });
};