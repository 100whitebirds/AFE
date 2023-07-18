import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
  title: 'sfeatures/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};
