import type { ActivityComponentType } from '@stackflow/react';

// component
import { AppScreen } from '@components/organisms';
import { LoginPage } from '@components/templates';

export const Login: ActivityComponentType = () => {
    return (
        <AppScreen main>
            <LoginPage />
        </AppScreen>
    );
};
