import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
    email?: string;
    name?: string;
    profileImage?: string;
    token?: string;
}

interface UserModel {
    data: User;
    getUser: () => User;
    setUser: (
        email: User['email'],
        name: User['name'],
        profileImage: User['profileImage'],
        token: User['token'],
    ) => void;
    emptyUser: () => void;
}

export const userModel = create<UserModel>()(
    persist(
        (set, get) => ({
            data: {
                email: undefined,
                name: undefined,
                profileImage: undefined,
                token: undefined,
            },

            getUser() {
                return get().data;
            },

            setUser(email, name, profileImage, token) {
                set({
                    data: {
                        email,
                        name,
                        profileImage,
                        token,
                    },
                });
            },

            emptyUser: () =>
                set({
                    data: {
                        email: undefined,
                        name: undefined,
                        profileImage: undefined,
                        token: undefined,
                    },
                }),
        }),
        {
            name: 'store',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
