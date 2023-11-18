import type { ActivityComponentType } from '@stackflow/react';

// component
import { AppScreen } from '@components/index';
import { MainTemplate } from '@components/templates/Main';

export const Main: ActivityComponentType = () => {
    return (
        <AppScreen main>
            <MainTemplate />
        </AppScreen>
    );
};
