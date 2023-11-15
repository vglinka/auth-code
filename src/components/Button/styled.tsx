/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  height: 38px;
  font-size: 1.2rem;
  padding: 0.6em 1em;
  margin-bottom: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 0;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: linear-gradient(0deg,
    hsl(35deg 100% 50%) 0%,
    hsl(18deg 98% 50%) 100%
  );
  transition: all 0.1s ease;

  &:hover {
    background: linear-gradient(0deg,
      hsl(28deg 100% 50%) 0%,
      hsl(13deg 98% 50%) 100%
    );
  }

  &:active {
    background: linear-gradient(0deg,
      hsl(24deg 100% 50%) 0%,
      hsl(6deg 98% 50%) 100%
    );
  }

    ${(props: any) => props.isDisabled && `
    filter: grayscale(70%);
  `}
`

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
