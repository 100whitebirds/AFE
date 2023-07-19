import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/Login/model/selectors/getLoginState/getLoginState';
import { useCallback } from 'react';
import { loginActions } from 'features/Login/model/slice/loginSlice';
import { loginByUsername } from 'features/Login/model/services/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

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
  );
};
