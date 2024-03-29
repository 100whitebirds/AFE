import { User } from 'entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface IArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type TArticleBlock =
  | IArticleCodeBlock
  | IArticleImageBlock
  | IArticleTextBlock;

export enum ArticleView {
  BIG = 'big',
  SMALL = 'small',
}

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: TArticleBlock[];
}
