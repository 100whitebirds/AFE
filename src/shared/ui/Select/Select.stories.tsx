import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      {
        value: '123',
        content: 'Первый пункт',
      },
      {
        value: '1234',
        content: 'Второй пункт',
      },
    ],
  },
};