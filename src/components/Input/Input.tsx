import React from 'react';
import { ErrorText, InputStyled, WrapperInputStyled } from './styled';

export const Input = (props: any) => {
  const { status, errorText } = props;
  return (
    <WrapperInputStyled>
      <InputStyled {...props} status={status} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </WrapperInputStyled>
  );
};
