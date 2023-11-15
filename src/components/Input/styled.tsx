import styled from 'styled-components';

export const InputStyled = styled.input`
  line-height: 20px;
  outline: none;
  appearance: none;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  text-overflow: ellipsis;
  padding: 8px 12px;
  color: #212121;
  background-color: #f4f4f4;
  width: calc(100% - 24px);

  &:focus {
    border-color: hsl(24deg 100% 50%);
  }

  ${(props: any) =>
    props.status === 'error' &&
    `
    background: #ffe9e7;
  `}
`;

export const WrapperInputStyled = styled.div`
  height: 60px;
`;

export const ErrorText = styled.p`
  color: #f51a1a;
  line-height: 0;
  margin: 10px 0 0;
  padding-left: 10px;
  font-size: 0.8em;
`;
