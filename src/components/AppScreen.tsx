import type { FC, PropsWithChildren } from "react";
import { AppScreen as StackFlowAppScreen } from "@stackflow/plugin-basic-ui";
// component
import { AppBar } from "@components/index";


interface Props extends PropsWithChildren {
  main?: boolean;
  sub?: boolean;
  page?: boolean;
  logout?: boolean;
}

export const AppScreen: FC<Props> = ({ children, main}) => {
  return (
    <StackFlowAppScreen>
      {main && <AppBar />}
      {children}
    </StackFlowAppScreen>
  );
};
