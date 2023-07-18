import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t('enter_username')}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enter_password')}
      />
      <Button className={cls.login_btn}>{t('login')}</Button>
    </div>
  );
};