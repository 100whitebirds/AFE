import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <div className={classNames(cls.root)}>{t('page_not_found')}</div>;
};

export default NotFoundPage;
