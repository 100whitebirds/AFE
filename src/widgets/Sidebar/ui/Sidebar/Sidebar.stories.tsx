import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
