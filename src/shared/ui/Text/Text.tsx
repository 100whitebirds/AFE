import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TextAlign;
  isError?: boolean;
}

export const Text = memo((props: TextProps) => {
  const { className, text, title, isError, align = TextAlign.LEFT } = props;

  const mods: Mods = {
    [cls.error]: isError,
    [cls[align]]: true,
  };

  return (
    <div className={classNames(cls.root, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
