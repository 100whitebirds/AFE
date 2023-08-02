import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { IArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      <img
        src={block.src}
        alt={block.title}
        className={cls.img}
      />
      {block.title && (
        <Text
          text={block.title}
          align={TextAlign.CENTER}
        />
      )}
    </div>
  );
});
