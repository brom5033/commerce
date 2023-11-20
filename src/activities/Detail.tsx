import type { ActivityComponentType } from '@stackflow/react';

// component
import { AppScreen } from '@components/organisms';
import { DetailPage } from '@components/templates';

interface Props {
    data: string;
}

export const Detail: ActivityComponentType<Props> = ({params}) => {
    return (
        <AppScreen main>
            <DetailPage data={params.data} />
        </AppScreen>
    );
};
