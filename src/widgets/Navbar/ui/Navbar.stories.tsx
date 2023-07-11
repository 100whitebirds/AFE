import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
