import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Text' },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
