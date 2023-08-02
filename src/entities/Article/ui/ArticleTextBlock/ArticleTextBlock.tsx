import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={cls.title}
        />
      )}
      {block.paragraphs.map((paragraph, _) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={cls.paragraph}
        />
      ))}
    </div>
  );
});
