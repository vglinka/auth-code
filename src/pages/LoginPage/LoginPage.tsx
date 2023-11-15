import React, { useState } from 'react';
import { HeaderStyled, LoginFormStyled, WrapperStyled } from './styled';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { validation } from './validation';
import { requestAuth } from '../../services/api';

export const LoginPage = () => {
  const [formError, setFormError] = useState<Record<string, string>>({});

  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();

    const reqData: Record<string, string> = {};
    Object.values(event.target.elements).forEach((elem: any) => {
      if (elem.name) {
        reqData[elem.name] = elem.value;
      }
    });

    const validationResult = validation(reqData);
    setFormError(validationResult);

    const isEmpty = (v: Record<string, unknown>) => Object.keys(v).length;
    if (isEmpty(validationResult)) return;

    setLoading(true);

    requestAuth(reqData)
      .then((res) => {
        if (res.success) alert('Вы залогинены');
        setLoading(false);
        return res;
      })
      .catch((err) => {
        alert(`Что-то пошло не так: ${err}`);
        setLoading(false);
      });
  };

  return (
    <WrapperStyled>
      <HeaderStyled>Y_LAB</HeaderStyled>
      <LoginFormStyled onSubmit={onSubmitHandler}>
        <Input
          type="email"
          placeholder="email"
          name="email"
          status={formError.email ? 'error' : undefined}
          errorText={formError.email}
          onChange={() => {
            setFormError({ ...formError, email: '' });
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          status={formError.password ? 'error' : undefined}
          errorText={formError.password}
          onChange={() => {
            setFormError({ ...formError, password: '' });
          }}
        />
        <Button value="Войти" type="submit" isLoading={isLoading} isDisabled={isLoading} />
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{ textAlign: 'center' }}
        >
          Регистрация | Забыли пароль?
        </a>
      </LoginFormStyled>
    </WrapperStyled>
  );
};
