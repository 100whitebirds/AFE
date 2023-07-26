import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames('', {}, [className])}>
        {t('profile')}
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
