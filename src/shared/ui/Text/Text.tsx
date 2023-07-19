import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  isError?: boolean;
}

export const Text = (props: TextProps) => {
  const { className, text, title, isError } = props;

  return (
    <div
      className={classNames(
        cls.root,
        {
          [cls.error]: isError,
        },
        [className],
      )}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
