import { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
} as Meta<typeof CommentList>;

type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {},
};
