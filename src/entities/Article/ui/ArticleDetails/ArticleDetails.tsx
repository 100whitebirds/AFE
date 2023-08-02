import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { TArticleBlock, ArticleBlockType } from '../../model/types/article';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlock
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlock
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlock
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    console.log(id);

    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton
          className={cls.title}
          width={300}
          height={32}
        />
        <Skeleton
          className={cls.skeleton}
          width={600}
          height={24}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('error_occured_while_loading_article')}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatar_wrapper}>
          <Avatar
            size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.article_info}>
          <Icon
            className={cls.icon}
            Svg={EyeIcon}
          />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.article_info}>
          <Icon
            className={cls.icon}
            Svg={CalendarIcon}
          />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.root, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
