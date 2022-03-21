import { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled('button')({
  margin: '0.5rem',
  display: 'inline-block',
});

type ButtonProps = {
  [x: string]: any;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};
