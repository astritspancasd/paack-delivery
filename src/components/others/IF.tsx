import { FC } from "react";

type IFProps = {
  condition: boolean;
  children: React.ReactNode;
};

export const IF: FC<IFProps> = (props) => {
  const { condition, children } = props;

  if (!condition) return null;

  return <>{children}</>;
};
