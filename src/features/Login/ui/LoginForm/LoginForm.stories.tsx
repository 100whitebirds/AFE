import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'sfeatures/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: 'asd',
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: 'asd',
        error: 'ERROR',
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
