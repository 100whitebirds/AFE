import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
