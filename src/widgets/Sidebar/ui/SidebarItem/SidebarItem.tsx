import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.root, {
        [cls.collapsed]: collapsed,
      })}
    >
      <item.Icon className={cls.icon} />

      <span className={cls.link}>
        {
          // TODO i18n COMPLETE TYPESAFETY
          t(item.text as any)
        }
      </span>
    </AppLink>
  );
});