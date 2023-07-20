import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  loginActions,
  loginReducer,
} from 'features/Login/model/slice/loginSlice';
import { loginByUsername } from 'features/Login/model/services/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/Login/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/Login/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/Login/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/Login/model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(
      loginByUsername({
        username,
        password,
      }),
    );
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(cls.root, {}, [className])}>
        <Text title={t('login_form')} />
        {error && (
          <Text
            text={t('wrong_login_or_password')}
            isError
          />
        )}
        <Input
          autofocus
          type="text"
          className={cls.input}
          placeholder={t('enter_username')}
          onChange={onUsernameChange}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('enter_password')}
          onChange={onPasswordChange}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.login_btn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};
