import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const AuthNavbar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};
