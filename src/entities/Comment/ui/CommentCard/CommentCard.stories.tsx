import { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
} as Meta<typeof CommentCard>;

type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {},
};
