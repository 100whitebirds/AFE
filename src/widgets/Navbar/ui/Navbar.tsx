import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/Login';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      <LoginModal
        isOpen={isLoginModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
