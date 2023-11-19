import axios from 'axios';

export const useSignUp = (
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    businessNumber: string,
) => {
    return axios.post('/api/signup', {
        email,
        password,
        name,
        phoneNumber,
        businessNumber,
    });
};
