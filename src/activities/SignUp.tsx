import { type ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@components/organisms';
import { SignUpPage } from '@components/templates';

export const SignUp: ActivityComponentType = () => {
    return (
        <AppScreen main>
            <SignUpPage />
        </AppScreen>
    );
};
