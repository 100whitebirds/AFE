import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/Login';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.root, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      {isLoginModal && (
        <LoginModal
          isOpen={isLoginModal}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
};
