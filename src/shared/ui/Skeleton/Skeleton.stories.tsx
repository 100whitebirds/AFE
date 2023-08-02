import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
