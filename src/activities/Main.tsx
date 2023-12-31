import type { ActivityComponentType } from '@stackflow/react';

// component
import { AppScreen } from '@components/organisms';
import { MainPage } from '@components/templates';

export const Main: ActivityComponentType = () => {
    return (
        <AppScreen main>
            <MainPage />
        </AppScreen>
    );
};
