import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
// Activity
import { Main, SignUp } from '@activities/index';

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: 'cupertino',
        }),
    ],
    activities: {
        Main,
        SignUp,
    },
    initialActivity: () => 'SignUp',
});
