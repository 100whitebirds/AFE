import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    children: (
      <Text
        title="test"
        text="text text"
      />
    ),
  },
};
