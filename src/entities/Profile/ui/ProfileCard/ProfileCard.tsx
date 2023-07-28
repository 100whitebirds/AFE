import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button
          className={cls.edit_button}
          theme={ButtonTheme.OUTLINE}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('your_name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('your_surname')}
          className={cls.input}
        />
      </div>
    </div>
  );
};