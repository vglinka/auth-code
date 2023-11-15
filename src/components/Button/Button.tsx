import React from 'react';
import { ButtonStyled, WrapperStyled } from './styled';
import { Loader } from '../Loader';

export const Button = (props: any) => {
  const { isLoading, value } = props;
  return (
    <WrapperStyled>
      <ButtonStyled {...props}>
        {isLoading && <Loader />}
        {value}
      </ButtonStyled>
    </WrapperStyled>
  );
};
