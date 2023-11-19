import type { ActivityComponentType } from '@stackflow/react';

// component
import { AppScreen } from '@components/organisms';
import { CataloguePage } from '@components/templates';

export const Catalogue: ActivityComponentType = () => {
    return <AppScreen main>
      <CataloguePage />
    </AppScreen>;
};
