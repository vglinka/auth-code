/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderStyled = styled.h1`
  font-size: min(18vw, 4rem);
  margin: 0 0 min(max(3vw, 1rem), 4rem);
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
  background: linear-gradient(45deg,
    hsl(35deg 100% 50%) 0%,
    hsl(18deg 98% 50%) 100%
  );
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: max(20vw, 250px);


  & > * {
    margin-bottom: 0.5rem;
  }
`;
