import type { FC, MouseEventHandler } from "react";

const style = {
  logo: {
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
  },
} as const;

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Logo: FC<Props> = ({ onClick }) => {
  return (
    <div style={style.logo} onClick={onClick}>
      Love Commerce
    </div>
  );
};
