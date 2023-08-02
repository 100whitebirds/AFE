import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlock.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
