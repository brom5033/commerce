import { type ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@components/AppScreen';
import { SignUpTemplate } from '@components/templates/SignUp';

export const SignUp: ActivityComponentType = () => {

    return <AppScreen main><SignUpTemplate /></AppScreen>;
};
